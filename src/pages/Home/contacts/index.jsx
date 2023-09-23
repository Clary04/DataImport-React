import { useState, forwardRef, useEffect } from 'react'
import { toast } from 'react-toastify';
import { Box, Button, useTheme} from "@mui/material"
import { DataGrid, GridToolbar } from "@mui/x-data-grid"
import { tokens } from "../../../theme"
import { api } from '../../../services/api';

import { Home } from "../../../components/HomeLayoutComponents/Home"
import { Header } from "../../../components/Header"

import PropTypes from 'prop-types';
import clsx from 'clsx';
import { styled } from '@mui/system';
import Modal from '@mui/base/Modal';

import '@coreui/coreui/dist/css/coreui.min.css'
import { CForm, CFormLabel, CFormInput, CButton } from '@coreui/react'

export const Contacts = () => {

    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        address: '',
        city: '',
        zipCode: ''
      });

    const [data, setData] = useState(null);
    const [validated, setValidated] = useState(false)
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);


    useEffect(() => {
        handleMembers().then(result => {
        const dataWithIds = result.map((row, index) => ({ ...row, id: index + 1 })); 
        setData(dataWithIds);
        }).catch(error => {
          console.error('Erro ao buscar dados:', error);
        });
      }, []);

    const delay = ms => new Promise(
        resolve => setTimeout(resolve, ms)
      );   

    const handleSuccess = () => {
        toast.success('Contato registrado com sucesso!');
    }

    const handleError = () => {
        toast.error('Erro ao registrar contato');
    }

    const handleSubmit = async (event) => {
        event.preventDefault();

        const form = event.currentTarget;

        if(form.checkValidity() === false){
            event.stopPropagation();
        }
        setValidated(true);

        const response = await api.post("/contacts", formData);

        if(response.data.contact){
            handleSuccess(); 
            delay(2000);
            window.location.reload();
        }else{
            handleError();
        }
    } 
    
    const handleMembers = async () => {
       const response = await api.get("/contacts");
       return response.data;
    }

    const columns = 
    [
     {
     field: "name", 
     headerName: "Nome", 
     flex: 1,
     cellClassName: "name-column--cell"
    },
    {
        field: "phone", 
        headerName: "Telefone", 
        flex: 1
    },
    {
        field: "email", 
        headerName: "Email", 
        flex: 1
    },
    {
        field: "address", 
        headerName: "Endereço", 
        flex: 1
    },
    {
        field: "city", 
        headerName: "Cidade", 
        flex: 1
    },
    {
        field: "zipCode", 
        headerName: "CEP", 
        flex: 1
    },
    ]

     // Verifica se os dados foram carregados
    if (!data) {
        return <div>Carregando...</div>;
    }


    return(
        <Home>
            <Box m="20px">
               <Header title="CONTATOS" subtitle="Lista de parceiros para contato"/>
                
                <Box onClick={handleOpen}>
                <Button
                    sx={{
                    backgroundColor: colors.blueAccent[500],
                    color: colors.blackAccent[100],
                    fontSize: "14px",
                    fontWeight: "bold",
                    padding: "10px 20px",
        
                    "&:hover": {
                        backgroundColor: colors.blueAccent[700]
                    }
                    }}
                >Registrar novo Contato
                </Button>
                </Box>

                <StyledModal
                    aria-labelledby="unstyled-modal-title"
                    aria-describedby="unstyled-modal-description"
                    open={open}
                    onClose={handleClose}
                    slots={{ backdrop: StyledBackdrop }}
                >
                    <Box sx={style}>
                        <CForm
                            noValidate
                            validated={validated}
                            onSubmit={handleSubmit}
                        >
                        <div className="mb-3">
                            <CFormLabel htmlFor="inputName">Informe o nome completo</CFormLabel>
                            <CFormInput type="text" id="name" placeholder="Nome" required  
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}/>
                        </div>
                        <div className="mb-3">
                            <CFormLabel htmlFor="inputPhone">Informe o telefone</CFormLabel>
                            <CFormInput type="number" id="phone" placeholder="Telefone"
                             value={formData.phone}
                             onChange={(e) => setFormData({ ...formData, phone: e.target.value })}/>
                        </div>
                        <div className="mb-3">
                            <CFormLabel htmlFor="inputEmail">Informe o email</CFormLabel>
                            <CFormInput type="email" id="email" placeholder="name@example.com" required
                             value={formData.email}
                             onChange={(e) => setFormData({ ...formData, email: e.target.value })}/>
                        </div>
                        <div className="mb-3">
                            <CFormLabel htmlFor="inputAddress">Informe o endereço</CFormLabel>
                            <CFormInput type="text" id="address" placeholder="Endereço" required
                             value={formData.address}
                             onChange={(e) => setFormData({ ...formData, address: e.target.value })}/>
                        </div>
                        <div className="mb-3">
                            <CFormLabel htmlFor="inputCity">Informe a cidade</CFormLabel>
                            <CFormInput type="text" id="city" placeholder="Cidade" required
                             value={formData.city}
                             onChange={(e) => setFormData({ ...formData, city: e.target.value })}/>
                        </div>
                        <div className="mb-3">
                            <CFormLabel htmlFor="inputZIPCode">Informe o CEP</CFormLabel>
                            <CFormInput type="number" id="zipCode" placeholder="CEP"
                             value={formData.zipCode}
                             onChange={(e) => setFormData({ ...formData, zipCode: e.target.value })}/>
                        </div>
                        <CButton color="success" type="submit" shape="rounded-pill" className="mb-3"><b>Registrar Contato</b></CButton>
                        </CForm>
                    </Box>
                </StyledModal>

                <Box m="40px 0 0 0" height="75vh" 
                    sx={{
                        "& .MuiDataGrid-root": {
                            border: "none"
                        },
                        "& .MuiDataGrid-cell": {
                            borderBottom: "none"
                        },
                        "& .name-column--cell": {
                            color: colors.yellowAccent[500]
                        },
                        "& .MuiDataGrid-columnHeaders": {
                            backgroundColor: colors.primary[100],
                            borderBottom: "none"
                        },
                        "& .MuiDataGrid-footerContainer": {
                            borderTop: "none",
                            "backgroundColor": colors.primary[100]
                        },
                        "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
                            color: `${colors.yellowAccent[400]} !important`
                        }
                    }}>
                    <DataGrid
                    rows={data}
                    columns={columns}
                    components={{ Toolbar: GridToolbar}}
                    >
                    </DataGrid>
                </Box>
            </Box>
        </Home>
    );
}

const Backdrop = forwardRef((props, ref) => {
    const { open, className, ...other } = props;
    return (
      <div
        className={clsx({ 'MuiBackdrop-open': open }, className)}
        ref={ref}
        {...other}
      />
    );
  });
  
  Backdrop.propTypes = {
    className: PropTypes.string.isRequired,
    open: PropTypes.bool,
  };
  
  
  const StyledModal = styled(Modal)`
    position: fixed;
    z-index: 1300;
    inset: 0;
    display: flex;
    align-items: center;
    justify-content: center;
  `;
  
  const StyledBackdrop = styled(Backdrop)`
    z-index: -1;
    position: fixed;
    inset: 0;
    background-color: rgb(0 0 0 / 0.5);
    -webkit-tap-highlight-color: transparent;
  `;
  
  const style = (theme) => ({
    width: 400,
    borderRadius: '12px',
    padding: '16px 32px 24px 32px',
    backgroundColor: theme.palette.mode === 'dark' ? '#1565c0' : 'white',
    boxShadow: `0px 2px 24px ${theme.palette.mode === 'dark' ? '#000' : '#383838'}`,
  });
  

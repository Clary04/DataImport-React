import { Box, useTheme} from "@mui/material"
import { DataGrid, GridToolbar } from "@mui/x-data-grid"
import { tokens } from "../../../theme"
import { mockDataContacts } from "../../../dataMock/mockData"

import { Home } from "../../../components/HomeLayoutComponents/Home"
import { Header } from "../../../components/Header"


export const Contacts = () => {

    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    const columns = 
    [{field: "id", headerName: "ID", flex: 0.5},
     {field: "registrarId", headerName: " Registrar ID"},
     {
     field: "name", 
     headerName: "Nome", 
     flex: 1,
     cellClassName: "name-column--cell"
    },
    {
     field: "age", 
     headerName: "Idade", 
     type: "number",
     headerAlign: "left",
     align: "left"
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

    return(
        <Home>
            <Box m="20px">
                <Header title="CONTATOS" subtitle="Lista de parceiros para contato"/>
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
                    rows={mockDataContacts}
                    columns={columns}
                    components={{ Toolbar: GridToolbar}}
                    >
                    </DataGrid>
                </Box>
            </Box>
        </Home>
    );
}

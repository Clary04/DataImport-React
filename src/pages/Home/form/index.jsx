import { Box, Button, TextField, useTheme} from "@mui/material"
import { Formik } from "formik"
import * as yup from "yup"
import useMediaQuery from "@mui/material/useMediaQuery"

import { Home } from "../../../components/HomeLayoutComponents/Home"
import { Header } from "../../../components/Header"

export const Form = () => {
    const isNonMobile = useMediaQuery("(min-width:600px)");
    const theme = useTheme();
    
    const handleFormSubmit = (values) => {
        console.log(values);
    }

    return(
    <Home>
        <Box m="20px">
            <Header title="ADICIONAR NOVO MEMBRO" subtitle="Adicione um novo membro á sua equipe"/>
            <Formik
                onSubmit={handleFormSubmit}
                initialValues={initialValues}
                validationSchema={userSchema}>
                 
                 {({values, errors, touched, handleBlur, handleChange, handleSubmit}) => (
                    <form onSubmit={handleSubmit}>
                        <Box 
                        marginTop="20px"
                        display="grid" 
                        gap="30px"
                        gridTemplateColumns="repeat(4, minmax(0, 1fr))"
                        sx={{
                            "& >  div": {gridColumn: isNonMobile ? undefined : "span 4"}
                        }}>
                        <TextField
                         fullWidth
                         variant="filled"
                         label="Nome Completo"
                         type="text"
                         onBlur={handleBlur}
                         onChange={handleChange}
                         value={values.firstName}
                         name="firstName"
                         error={!!touched.firstName && !!errors.firstName}
                         helperText={touched.firstName && errors.firstName}
                         sx={{ gridColumn: "span 3", borderRadius: "50%"}}>
                        </TextField>

                        <TextField
                         fullWidth
                         variant="filled"
                         label="Data de Nascimento"
                         type="text"
                         onBlur={handleBlur}
                         onChange={handleChange}
                         value={values.bornDate}
                         name="bornDate"
                         error={!!touched.bornDate && !!errors.bornDate}
                         helperText={touched.bornDate && errors.bornDate}
                         sx={{ gridColumn: "span 1"}}>
                        </TextField>

                        <TextField
                         fullWidth
                         variant="filled"
                         label="Profissão"
                         type="text"
                         onBlur={handleBlur}
                         onChange={handleChange}
                         value={values.occupation}
                         name="occupation"
                         error={!!touched.occupation && !!errors.occupation}
                         helperText={touched.occupation && errors.occupation}
                         sx={{ gridColumn: "span 2"}}>
                        </TextField>

                        <TextField
                         fullWidth
                         variant="filled"
                         label="Endereço"
                         type="text"
                         onBlur={handleBlur}
                         onChange={handleChange}
                         value={values.address}
                         name="address"
                         error={!!touched.address && !!errors.address}
                         helperText={touched.address && errors.address}
                         sx={{ gridColumn: "span 2"}}>
                        </TextField>


                        <TextField
                         fullWidth
                         variant="filled"
                         label="Email"
                         type="text"
                         onBlur={handleBlur}
                         onChange={handleChange}
                         value={values.email}
                         name="email"
                         error={!!touched.email && !!errors.email}
                         helperText={touched.email && errors.email}
                         sx={{ gridColumn: "span 2"}}>
                        </TextField>

                        <TextField
                         fullWidth
                         variant="filled"
                         label="Contato"
                         type="text"
                         onBlur={handleBlur}
                         onChange={handleChange}
                         value={values.contact}
                         name="contact"
                         error={!!touched.contact && !!errors.contact}
                         helperText={touched.contact && errors.contact}
                         sx={{ gridColumn: "span 2"}}>
                        </TextField>

                        </Box>

                        <Box 
                            display="flex" 
                            justifyContent="end" 
                            mt="20px" >
                            <Button 
                            type="submit"
                            variant="contained"
                            color="success"
                            >
                                Adicionar novo membro
                            </Button>
                        </Box>
                    </form>
                 )}
            </Formik>
        </Box>
    </Home>
    );
}

const initialValues = {
    firstName: "",
    bornDate: "",
    email: "",
    contact: "",
    occupation: "",
    address: "",
}

const phoneRegExp = /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/;

const userSchema = yup.object().shape({
    firstName: yup.string().required("Campo obrigatório."),
    bornDate: yup.string().required("Campo obrigatório."),
    email: yup.string().required("Campo obrigatório."),
    contact: yup.string().matches(phoneRegExp, "Númmero de telefone inválido").required("Campo obrigatório."),
    occupation: yup.string().required("Campo obrigatório."),
    address: yup.string().required("Campo obrigatório."),
})
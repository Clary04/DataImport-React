import { Home } from '../../../components/HomeLayoutComponents/Home'
import { Header } from '../../../components/Header'
import { Box, Button, IconButton, Typography, useTheme } from "@mui/material"
import { tokens } from "../../../theme"
import { mockTransactions } from '../../../dataMock/mockData'

import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined"
import EmailIcon from "@mui/icons-material/Email"
import PersonAddIcon from "@mui/icons-material/PersonAdd"
import PointOfSaleIcon from "@mui/icons-material/PointOfSale"

import { LineChart } from "../../../components/HomeLayoutComponents/ChartsComponents/LineChart"
import { BarChart  } from "../../../components/HomeLayoutComponents/ChartsComponents/BarChart"
import { GeographyChart } from "../../../components/HomeLayoutComponents/ChartsComponents/GeographyChart"

import { StatBox }  from '../../../components/StatBox'
import { ProgressCircle }from '../../../components/ProgressCircle'

export const Dashboard = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    return (
    <Home>
        <Box m="20px">
            <Box display="flex" justifyContent="space-between" alignItems="center">
                <Header title="DASHBOARD" subtitle="Bem vindo ao seu Dashboard" />

                <Box>
                <Button
                    sx={{
                    backgroundColor: colors.greenAccent[500],
                    color: colors.blackAccent[100],
                    fontSize: "14px",
                    fontWeight: "bold",
                    padding: "10px 20px",
        
                    "&:hover": {
                        backgroundColor: colors.greenAccent[700]
                    }
                    }}
                >
                    <DownloadOutlinedIcon sx={{ mr: "10px" }} />
                    Relatórios Diários
                </Button>
                </Box>
            </Box>

            <Box
            display="grid"
            gridTemplateColumns="repeat(12, 1fr)"
            gridAutoRows="140px"
            gap="20px">

                {/*COLUMN 1*/}
                <Box gridColumn="span 4" 
                     backgroundColor={colors.primary[100]}
                     display="flex"
                     alignItems="center"
                     justifyContent="center">
                        <StatBox
                        title="12,361"
                        subtitle="Emails enviados"
                        progress="0.75"
                        increase="+14%"
                        icon={<EmailIcon sx={{ color: colors.orangeAccent[400], fontSize: "26px"}}/>}/>
                </Box>
                {/*COLUMN 2*/}
                <Box gridColumn="span 4" 
                     backgroundColor={colors.primary[100]}
                     display="flex"
                     alignItems="center"
                     justifyContent="center">
                        <StatBox
                        title="32,441"
                        subtitle="Novos membros"
                        progress="0.30"
                        increase="+5%"
                        icon={<PersonAddIcon sx={{ color: colors.orangeAccent[400], fontSize: "26px"}}/>}/>
                </Box>
                {/*COLUMN 3*/}
                <Box gridColumn="span 4" 
                     backgroundColor={colors.primary[100]}
                     display="flex"
                     alignItems="center"
                     justifyContent="center">
                        <StatBox
                        title="431,225"
                        subtitle="Lucro obtido"
                        progress="0.5"
                        increase="+21%"
                        icon={<PointOfSaleIcon sx={{ color: colors.orangeAccent[400], fontSize: "26px"}}/>}/>
                </Box>

                {/*ROW 2*/}
                <Box
                gridColumn="span 8"
                gridRow="span 2"
                backgroundColor={colors.primary[100]}
                >
                 <Box
                    mt="25px"
                    p="0 30px"
                    display="flex"
                    justifyContent="space-between"
                    alignItems="center">
                    
                    <Box>
                        <Typography variant="h5" fontWeight="600" color={colors.orangeAccent[500]}>Dados Gerados</Typography>
                        <Typography variant="h3" fontWeight="500" color={colors.yellowAccent[500]}>Hoje às 22h42</Typography>
                    </Box>

                    <Box>
                        <IconButton>
                            <DownloadOutlinedIcon
                            sx={{ fontSize: "26px", color: colors.greenAccent[500]}}/>
                        </IconButton>
                    </Box>
                 </Box>

                 <Box height="250px" pb="10px">
                    <LineChart isDashboard={true}/>
                 </Box>
               </Box>

               <Box 
                 gridColumn="span 4"
                 gridRow="span 2"
                 backgroundColor={colors.primary[100]}
                 overflow="auto">
                 <Box 
                    display="flex" 
                    justifyContent="space-between" 
                    alignItems="center"
                    borderBottom={`4px solid ${colors.primary[500]}`}
                    p="15px">
                        <Typography 
                            variant="h5" 
                            color={colors.orangeAccent[500]}
                            fontWeight="bold">
                            Membros Recentes
                        </Typography>     
                    </Box>
                    
                    {mockTransactions.map((transaction, i) => (
                       <Box
                        key={`${transaction.txId}-${i}`}
                        display="flex"
                        justifyContent="space-between"
                        alignItems="center"
                        borderBottom={`2px solid ${colors.primary[500]}`}
                        p="15px">
                        
                            <Box>
                                <Typography 
                                variant="h5" 
                                color={colors.yellowAccent[400]}
                                fontWeight="bold">
                                {transaction.txId}
                                </Typography>

                                <Typography 
                                color={colors.primary[900]}>
                                {transaction.user}
                                </Typography>
                            </Box>
                            
                            <Box color={colors.primary[800]}>{transaction.date}</Box>

                            <Box
                             backgroundColor={colors.yellowAccent[500]}
                             color={colors.blackAccent[100]}
                             p="5px 10px"
                             borderRadius="4px">
                               ${transaction.cost} 
                            </Box>
                        </Box>

                    ))}     
                </Box>

                {/*ROW 3*/}
                <Box
                 gridColumn="span 4"
                 gridRow="span 2"
                 backgroundColor={colors.primary[100]}
                 p="30px"
                 color={colors.orangeAccent[500]}>
                    <Typography variant="h5" fontWeight="600">
                       Progresso dos Dados Analisados
                    </Typography>
                    <Box 
                      display="flex"
                      flexDirection="column"
                      alignItems="center"
                      mt="25px"
                      >
                        <ProgressCircle size="125"/>
                        <Typography 
                        variant="h5" 
                        color={colors.blueAccent[200]}
                        sx={{ mt: "15px"}}>
                            75,000 dados lidos
                        </Typography>

                        <Typography>Dados que precisam de correção não são considerados</Typography>
                      </Box>
                </Box>

                <Box
                 gridColumn="span 4"
                 gridRow="span 2"
                 backgroundColor={colors.primary[100]}
                 color={colors.orangeAccent[500]}
                 >
                    <Typography 
                     variant="h5" 
                     fontWeight="600"
                     sx={{ p: "30px 30px 0 30px"}}>
                        Evasão por Cidade
                    </Typography>

                    <Box 
                      height="250px"
                      >
                        <BarChart isDashboard={true}/>
                      </Box>
                </Box>

                <Box
                 gridColumn="span 4"
                 gridRow="span 2"
                 backgroundColor={colors.primary[100]}
                 color={colors.orangeAccent[500]}
                 p="30px"
                 >
                    <Typography 
                     variant="h5" 
                     fontWeight="600"
                     sx={{ mb: "15px"}}
                    >
                        Evasão por País
                    </Typography>

                    <Box 
                      height="200px"
                      >
                        <GeographyChart isDashboard={true}/>
                      </Box>
                </Box>
            </Box>
        </Box>
    </Home>
    );
}


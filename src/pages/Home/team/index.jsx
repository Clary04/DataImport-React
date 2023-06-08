import { Box, Typography, useTheme} from "@mui/material"
import { DataGrid } from "@mui/x-data-grid"
import { tokens } from "../../../theme"
import { mockDataTeam } from "../../../dataMock/mockData"

import { Home } from "../../../components/HomeLayoutComponents/Home"
import { Header } from "../../../components/Header"

import  AdminPanelSettingsOutlinedIcon from "@mui/icons-material/AdminPanelSettingsOutlined"
import  LockOpenOutlinedIcon from "@mui/icons-material/LockOpenOutlined"
import  SecurityOutlinedIcon  from "@mui/icons-material/SecurityOutlined"

export const Team = () => {

    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    const columns = 
    [{field: "id", headerName: "ID"},
     {
     field: "name", 
     headerName: "Name", 
     flex: 1,
     cellClassName: "name-column--cell"
    },
    {
     field: "age", 
     headerName: "Age", 
     type: "number",
     headerAlign: "left",
     align: "left"
    },
    {
        field: "phone", 
        headerName: "Phone Number", 
        flex: 1
    },
    {
        field: "email", 
        headerName: "Email", 
        flex: 1
    },
    {
        field: "access", 
        headerName: "Access Level", 
        flex: 1,
        renderCell: ({row: {access}}) => {
            return (          
                <Box
                width="60%"
                m="0 auto"
                p="5px"
                display="flex"
                justifyContent="center"
                backgroundColor={
                    access === "admin" ? colors.yellowAccent[600] : colors.yellowAccent[700]
                }
                borderRadius="4px"
                >
                {access === "admin" && <AdminPanelSettingsOutlinedIcon/>}
                {access === "manager" && <SecurityOutlinedIcon/>}
                {access === "user" && <LockOpenOutlinedIcon/>}
                <Typography color={colors.primary[100]} sx={{ ml: "5px"}}>
                    {access}
                </Typography>
                </Box>
            )
        }
    },
    ]

    return(
        <Home>
            <Box m="20px">
                <Header title="TIME" subtitle="Gerencie os membros do seu time"/>
                <Box m="40px 0 0 0" height="75vh" 
                    sx={{
                        "& .MuiDataGrid-root": {
                            border: "none"
                        },
                        "& .MuiDataGrid-cell": {
                            borderBottom: "none"
                        },
                        "& .name-column--cell": {
                            color: colors.orangeAccent[400]
                        },
                        "& .MuiDataGrid-columnHeaders": {
                            backgroundColor: colors.primary[100],
                            borderBottom: "none"
                        },
                        "& .MuiDataGrid-footerContainer": {
                            borderTop: "none",
                            "backgroundColor": colors.primary[100]
                        }
                    }}>
                    <DataGrid
                    rows={mockDataTeam}
                    columns={columns}
                    >
                    </DataGrid>
                </Box>
            </Box>
        </Home>
    );
}

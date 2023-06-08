import { useState } from "react"
import imgGraphic from '../../assets/bar-graphic.png'
import "react-pro-sidebar/dist/css/styles.css"

import { ProSidebar , Menu, MenuItem } from "react-pro-sidebar"
import { Box, IconButton, Typography, useTheme} from "@mui/material"
import { Link} from "react-router-dom" 
import { tokens } from "../../theme"

import  HomeOutlinedIcon from '@mui/icons-material/HomeOutlined'
import  PeopleOutlinedIcon from '@mui/icons-material/PeopleOutlined'
import  ContactsOutlinedIcon from '@mui/icons-material/ContactsOutlined'
import  MapOutlinedIcon from '@mui/icons-material/MapOutlined'
import  CalendarTodayOutlined from "@mui/icons-material/CalendarTodayOutlined"
import  PersonOutlinedIcon from '@mui/icons-material/PersonOutlined'
import  HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined'
import  PieChartOutlineOutlinedIcon from '@mui/icons-material/PieChartOutlineOutlined'
import  BarChartOutlinedIcon from '@mui/icons-material/BarChartOutlined'
import  TimelineOutlinedIcon from '@mui/icons-material/TimelineOutlined'
import  MenuOutlinedIcon from '@mui/icons-material/MenuOutlined'

const Item = ({ title, to, icon, selected, setSelected }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <MenuItem
      active={selected === title}
      style={{
        color: colors.primary[100],
      }}
      onClick={() => setSelected(title)}
      icon={icon}
    >
      <Typography>{title}</Typography>
      <Link to={to} />
    </MenuItem>
  );
};

export const Sidebar = () =>{

    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const [ isCollapsed, setIsCollapsed] = useState(false);
    const [selected, setSelected] = useState("Dashboard");

    return(
      <Box
      sx={{
        "& .pro-sidebar-inner": {
          background: `${colors.primary[500]} !important`,
        },
        "& .pro-icon-wrapper": {
          backgroundColor: "transparent !important",
        },
        "& .pro-inner-item": {
          padding: "5px 35px 5px 20px !important",
        },
        "& .pro-inner-item:hover": {
          color: "#FFA500 !important",
        },
        "& .pro-menu-item.active": {
          color: "#FFA500 !important",
        },
      }}
    >
       <ProSidebar collapsed={isCollapsed}>
         <Menu iconShape="square">
            <MenuItem
                onClick={() => setIsCollapsed(!isCollapsed)}
                icon={isCollapsed ? <MenuOutlinedIcon /> : undefined}
                style={{
                margin: "10px 0 20px 0",
                color: colors.primary[100],
                }}
            >
                {!isCollapsed && (
                <Box
                    display="flex"
                    justifyContent="space-between"
                    alignItems="center"
                    ml="15px"
                >
                  <Typography variant="h3" color={colors.primary[100]}>
                  ADMINIS
                </Typography>
                    <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
                    <MenuOutlinedIcon />
                    </IconButton>
                </Box>
                )}
            </MenuItem>

            {/*USER*/}
            {!isCollapsed && (
                <Box mb="25px">
                    <Box display="flex" justifyContent="center" alignItems="center">
                        <img 
                        width="100px"
                        height="100px"
                        src={imgGraphic}
                        style={{cursor: "pointer", borderRadius: "50%"}}/>
                    </Box>

                <Box textAlign="center">
                        <Typography
                        variant="h2"
                        color={colors.primary[100]}
                        fontWeight="bold"
                        sx={{ m: "10px 0 0 0" }}
                        >
                        Clarissa Giselly
                        </Typography>
                        <Typography variant="h5" color={colors.primary[100]}>
                         Admin
                        </Typography>
                </Box>
             </Box>
            )}

        <Box paddingLeft={isCollapsed ? undefined : "10%"}>
            <Item
              title="Dashboard"
              to="/dashboard"
              icon={<HomeOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />

            <Typography
              variant="h6"
              color={colors.primary[300]}
              sx={{ m: "15px 0 5px 20px" }}
            >
              Gestão
            </Typography>
            <Item
              title="Gestão de Time"
              to="/team"
              icon={<PeopleOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Contatos"
              to="/contacts"
              icon={<ContactsOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
           
            <Typography
              variant="h6"
              color={colors.primary[300]}
              sx={{ m: "15px 0 5px 20px" }}
            >
              Páginas
            </Typography>
            <Item
              title="Registro de Membros"
              to="/form"
              icon={<PersonOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />

            <Item
              title="Calendário"
              to="/calendar"
              icon={<CalendarTodayOutlined />}
              selected={selected}
              setSelected={setSelected}
            />
          
            <Typography
              variant="h6"
              color={colors.primary[300]}
              sx={{ m: "15px 0 5px 20px" }}
            >
              Gráficos
            </Typography>
            <Item
              title="Barra"
              to="/bar-chart"
              icon={<BarChartOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Pizza"
              to="/pie-chart"
              icon={<PieChartOutlineOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Linha"
              to="/line-chart"
              icon={<TimelineOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Geográfico"
              to="/geo-chart"
              icon={<MapOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
          </Box>

         </Menu>
        </ProSidebar>
      </Box>
    );
}


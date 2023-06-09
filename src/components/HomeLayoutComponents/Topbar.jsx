import { Box, IconButton, useTheme } from '@mui/material'
import { useContext } from 'react'
import { ColorModeContext, tokens } from '../../theme'

import InputBase from "@mui/material/InputBase";
import  DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined'
import  LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined'
import  SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined'
import  NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined'

import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import SearchIcon from "@mui/icons-material/Search";
import { AuthContext } from '../../context/auth';

export const Topbar = () =>{
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const colorMode = useContext(ColorModeContext);
    const { signOut} = useContext(AuthContext);

    const delay = ms => new Promise(
      resolve => setTimeout(resolve, ms)
    );

    const handleClick = async event => {
      await delay(1000);
    
      signOut();
    };

    return (
    <Box display="flex" justifyContent="space-between" p={2}>

      <Box
        display="flex"
        backgroundColor={colors.primary[500]}
        borderRadius="3px"
      >
        <InputBase sx={{ ml: 2, flex: 1 }} placeholder="Pesquisar" />
        <IconButton type="button" sx={{ p: 1 }}>
          <SearchIcon />
        </IconButton>
      </Box>
        
      <Box>
        <IconButton onClick={colorMode.toggleColorMode}>
            {theme.palette.mode === "dark" ? (
              <DarkModeOutlinedIcon />
            ) : (
              <LightModeOutlinedIcon />
            )}
          </IconButton>
          <IconButton>
            <NotificationsOutlinedIcon />
          </IconButton>
          <IconButton>
            <SettingsOutlinedIcon />
          </IconButton>
          <IconButton>
            <LogoutOutlinedIcon onClick={handleClick} />
          </IconButton>
      </Box>
        
    </Box>
    );
}
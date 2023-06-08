import { Box, Typography, useTheme} from "@mui/material"
import { tokens } from "../theme"
import {ProgressCircle } from "./ProgressCircle"

export const StatBox = ({ title, subtitle, icon, progress, increase}) => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    return(
        <Box width="80%" m="0px 20px">
            <Box display="flex" justifyContent="space-between">
                <Box>
                    {icon}
                    <Typography 
                     variant="h4"
                     fontWeight="bold"
                     sx={{ color: colors.primary[100]}} 
                    >
                      {title}
                    </Typography>
                </Box>
                <Box>
                    <ProgressCircle progress={progress}/>
                </Box>

                <Box display="flex" justifyContent="space-between">
                    <Typography 
                        variant="h4"
                        fontWeight="bold"
                        sx={{ color: colors.orangeAccent[400]}} 
                        >
                        {subtitle}
                        </Typography>
                   <Typography 
                     variant="h4"
                     fontStyle="italic"
                     ml="0.3em"
                     sx={{ color: colors.orangeAccent[400]}} 
                    >
                      {increase}
                    </Typography>
                </Box>

                
            </Box>
        </Box>
    );
}

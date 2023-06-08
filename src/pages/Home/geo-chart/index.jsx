import { Box } from "@mui/material"
import { tokens } from "../../../theme";
import { useTheme } from "@mui/material";
import { Header } from "../../../components/Header"
import { GeographyChart } from "../../../components/HomeLayoutComponents/ChartsComponents/GeographyChart"
import { Home } from "../../../components/HomeLayoutComponents/Home"


export const Geography = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    return (
      <Home>
        <Box m="20px">
            <Header title="Gráfico geográfico" subtitle="Gráfico geográfico simples"/>
            <Box mt="10px" height="75vh" border={`1px solid ${colors.blackAccent[900]}`}>
                <GeographyChart/>
            </Box>
        </Box>
      </Home>
    )
}
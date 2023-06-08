import { Box } from "@mui/material"
import { Header } from "../../../components/Header"
import { BarChart } from "../../../components/HomeLayoutComponents/ChartsComponents/BarChart"
import { Home } from "../../../components/HomeLayoutComponents/Home"

export const Bar = () => {
    return (
      <Home>
        <Box m="20px">
            <Header title="Gráfico de Barras" subtitle="Gráfico de barras simples"/>
            <Box height="75vh">
                <BarChart/>
            </Box>
        </Box>
      </Home>
    )
}
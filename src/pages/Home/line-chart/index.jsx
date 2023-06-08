import { Box } from "@mui/material"
import { Header } from "../../../components/Header"
import { LineChart } from "../../../components/HomeLayoutComponents/ChartsComponents/LineChart"
import { Home } from "../../../components/HomeLayoutComponents/Home"

export const Line = () => {
    return (
      <Home>
        <Box m="20px">
            <Header title="Gráfico de Linhas" subtitle="Gráfico de linhas simples"/>
            <Box height="75vh">
                <LineChart/>
            </Box>
        </Box>
      </Home>
    )
}
import { Box } from "@mui/material"
import { Header } from "../../../components/Header"
import { PieChart } from "../../../components/HomeLayoutComponents/ChartsComponents/PieChart"
import { Home } from "../../../components/HomeLayoutComponents/Home"

export const Pie = () => {
    return (
      <Home>
        <Box m="20px">
            <Header title="Gráfico de Pizza" subtitle="Gráfico de pizza simples"/>
            <Box height="75vh">
                <PieChart/>
            </Box>
        </Box>
      </Home>
    )
}
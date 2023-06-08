import { useState } from "react";
import { ColorModeContext, useMode } from "../../theme";
import { CssBaseline, ThemeProvider } from "@mui/material";

import {Topbar} from "./Topbar";
import { Sidebar } from "./Sidebar";

export const Home = (props) => {

    const [theme, colorMode] = useMode();
    const [isSidebar, setIsSidebar] = useState(true);

    return(
        <ColorModeContext.Provider value={colorMode}>
        <ThemeProvider theme={theme}>
            <CssBaseline/>
        <div className="container-dashboard">
          <Sidebar isSidebar={isSidebar}/>
            <main className="content">
                <Topbar/>
                {props.children}
            </main>
        </div>
        </ThemeProvider>
        </ColorModeContext.Provider>
    );
}
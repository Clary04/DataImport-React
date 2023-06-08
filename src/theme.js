import { createContext, useState, useMemo } from "react";
import { createTheme } from '@mui/material/styles'

export const tokens = (mode) => ({

    ...(mode === 'dark' 
    ? {
        primary: {
            100: "#d6d6d6",
            200: "#adadad",
            300: "#858585",
            400: "#5c5c5c",
            500: "#333333",
            600: "#292929",
            700: "#1f1f1f",
            800: "#141414",
            900: "#0a0a0a"
        },
        blackAccent: {
            100: "#cfcfcf",
            200: "#a0a0a0",
            300: "#707070",
            400: "#414141",
            500: "#111111",
            600: "#0e0e0e",
            700: "#0a0a0a",
            800: "#070707",
            900: "#030303"
        },
        yellowAccent: {
            100: "#fff7cc",
            200: "#ffef99",
            300: "#ffe766",
            400: "#ffdf33",
            500: "#ffd700",
            600: "#ccac00",
            700: "#998100",
            800: "#665600",
            900: "#332b00"
        },
        orangeAccent: {
            100: "#ffedcc",
            200: "#ffdb99",
            300: "#ffc966",
            400: "#ffb733",
            500: "#ffa500",
            600: "#cc8400",
            700: "#996300",
            800: "#664200",
            900: "#332100"
        },
        redAccent: {
            100: "#ffcccc",
            200: "#ff9999",
            300: "#ff6666",
            400: "#ff3333",
            500: "#ff0000",
            600: "#cc0000",
            700: "#990000",
            800: "#660000",
            900: "#330000"
        },
        greenAccent: {
            100: '#c8e6c9',
            200: '#a5d6a7',
            300: '#81c784',
            400: '#66bb6a',
            500: '#4caf50',
            600: '#43a047',
            700: '#388e3c',
            800: '#2e7d32',
            900: '#1b5e20',
        },
        blueAccent: {
            100: '#bbdefb',
            200: '#90caf9',
            300: '#64b5f6',
            400: '#42a5f5',
            500: '#2196f3',
            600: '#1e88e5',
            700: '#1976d2',
            800: '#1565c0',
            900: '#0d47a1'
        }
    } : {
        primary: {
            100: "#232323",
            200: "#454545",
            300: "#686868",
            400: "#8a8a8a",
            500: "#adadad",
            600: "#bdbdbd",
            700: "#cecece",
            800: "#dedede",
            900: "#efefef",
        },
        blackAccent: {
            100: "#030303",
            200: "#070707",
            300: "#0a0a0a",
            400: "#0e0e0e",
            500: "#111111",
            600: "#414141",
            700: "#707070",
            800: "#a0a0a0",
            900: "#cfcfcf",
        },
        yellowAccent: {
            100: "#332b00",
            200: "#665600",
            300: "#998100",
            400: "#ccac00",
            500: "#ffd700",
            600: "#ffdf33",
            700: "#ffe766",
            800: "#ffef99",
            900: "#fff7cc",
        },
        orangeAccent: {
            100: "#332100",
            200: "#664200",
            300: "#996300",
            400: "#cc8400",
            500: "#ffa500",
            600: "#ffb733",
            700: "#ffc966",
            800: "#ffdb99",
            900: "#ffedcc",
        },
        redAccent: {
            100: "#330000",
            200: "#660000",
            300: "#990000",
            400: "#cc0000",
            500: "#ff0000",
            600: "#ff3333",
            700: "#ff6666",
            800: "#ff9999",
            900: "#ffcccc",
        },
        greenAccent: {
            100: '#c8e6c9',
            200: '#a5d6a7',
            300: '#81c784',
            400: '#66bb6a',
            500: '#4caf50',
            600: '#43a047',
            700: '#388e3c',
            800: '#2e7d32',
            900: '#1b5e20',
        },
        blueAccent: {
            100: '#bbdefb',
            200: '#90caf9',
            300: '#64b5f6',
            400: '#42a5f5',
            500: '#2196f3',
            600: '#1e88e5',
            700: '#1976d2',
            800: '#1565c0',
            900: '#0d47a1'
        }
    })
})

export const themeSettings = (mode) => {
    const colors = tokens(mode);

    return{
        palette: {
            mode: mode,
            ...(mode === 'dark'
            ? {
                primary:{
                    main: colors.primary[100],
                },
                secondary:{
                    main: colors.blackAccent[100],
                },
                neutral:{
                    dark: colors.blackAccent[700],
                    main: colors.blackAccent[400],
                    light: colors.blackAccent[100]
                },
                background:{
                    default: colors.blackAccent[500],
                } 
            } : {
                primary:{
                    main: colors.primary[500],
                },
                secondary:{
                    main: colors.blackAccent[100],
                },
                neutral:{
                    dark: colors.blackAccent[700],
                    main: colors.blackAccent[400],
                    light: colors.blackAccent[100]
                },
                background:{
                    default: colors.primary[600],
                } 
            })
        },
        typography:{
            fontFamily: ["Roboto", "sans-serif"].join(","),
            fontSize: 12,
            h1: {
             fontFamily: ["Roboto", "sans-serif"].join(","),
             fontSize: 40
            },
            h2: {
                fontFamily: ["Roboto", "sans-serif"].join(","),
                fontSize: 32
            },
            h3: {
                fontFamily: ["Roboto", "sans-serif"].join(","),
                fontSize: 24
            },
            h4: {
                fontFamily: ["Roboto", "sans-serif"].join(","),
                fontSize: 20
            },
            h5: {
                fontFamily: ["Roboto", "sans-serif"].join(","),
                fontSize: 16
            },
            h6: {
                fontFamily: ["Roboto", "sans-serif"].join(","),
                fontSize: 14
            }
        }
    }
}

export const ColorModeContext = createContext({
    toggleColorMode: () => {}
})

export const useMode = () => {
    const [mode, setMode] = useState("dark");

    const colorMode = useMemo(
         () => ({
            toggleColorMode: () => 
            setMode((prev) => (prev === "light" ? "dark" : "light"))
         }),
         []
    );
    const theme = useMemo(() => createTheme(themeSettings(mode)), [mode])
     return [theme, colorMode];
}
import { createTheme } from "@mui/material";

export const theme = createTheme({
    palette: {
        primary: {
            main: '#cfcfcf',
        },
        action: {
            hover: '#cf2735'
        },
        success: {
            main: '#cf2735'
        },
        info: {
            main: '#626262'
        }
    },
    typography: {
        fontSize: 16, 
    },
})
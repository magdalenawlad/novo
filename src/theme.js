import { createMuiTheme } from "@material-ui/core";

const theme = createMuiTheme({
    typography: {
        fontFamily: "Roboto"
    },
    palette: {
        primary: {
            main: "#617D8B"
        }
    },
    overrides: {
        MuiTypography: {
            h6: {
                lineHeight: "28px"
            },
            subtitle2: {
                lineHeight: "20px"
            }
        },
        MuiButton: {
            root: {
                "& svg":{
                    width: "0.6em"
                },
                "&$disabled": {
                    "background": "rgba(0,0,0,0.87)",
                    "color": "rgba(0,0,0,0.38)"
                }
            },
            startIcon: {
                marginRight: 4
            }
        }
    }
});

export default theme;

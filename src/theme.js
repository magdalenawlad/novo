import { createMuiTheme } from "@material-ui/core";

const success = "#087f23";
const error = "#ba000d";

const theme = createMuiTheme({
    colors: {
        success,
        error
    },
    typography: {
        fontFamily: "Roboto",
        h6: {
            fontSize: 24
        },
        subtitle2: {
            fontSize: 14
        },
        overline: {
            fontFamily: "Roboto Medium",
            textTransform: "uppercase",
            fontSize: 12,
            letterSpacing: 2
        }
    },
    palette: {
        primary: {
            main: "#617D8B"
        },
        background: {
            default: "#EEF0F1"
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
                fontFamily: "Roboto Medium",
                letterSpacing: 1.25,
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
        },
        MuiPaper: {
            elevation1: {
                borderRadius: 0,
                boxShadow: "0 2px 2px 0 rgba(0,0,0,0.14), 0 3px 1px -2px rgba(0,0,0,0.12), 0 1px 5px 0 rgba(0,0,0,0.2)"
            }
        }
    }
});

export default theme;

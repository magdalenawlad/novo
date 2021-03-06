import React, { useEffect } from "react";
import { MuiThemeProvider } from "@material-ui/core/styles";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import { Box } from "@material-ui/core";
import CopyrightIcon from "@material-ui/icons/Copyright";
import { useDispatch } from "react-redux";
import { HashRouter as Router } from "react-router-dom";
import { Route } from "react-router";
import { User, UserList } from "./container"
import theme from "../theme";
import { TopBar, Alerts } from "./_shared";
import { loadUsers } from "../redux/actions/usersActions";

const useStyles = makeStyles({
    container: {
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        background: theme.palette.background.default
    },
    footer: {
        height: 40,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "#E1E4E5",
        borderTop: "2px solid #C1C6C8"
    },
    footerIcon: {
        fontSize: 10,
        paddingRight: 10
    }
});

const App = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(loadUsers());
    }, [dispatch]);

    return (
        <MuiThemeProvider theme={theme}>
            <div className={classes.container}>
                <Alerts />
                <TopBar />
                <Box flex={1}>
                    <Router>
                        <Route exact path="/" component={UserList} />
                        <Route exact path="/user" component={User} />
                        <Route path="/user/:userId" component={User} />
                    </Router>
                </Box>
                <footer className={classes.footer}>
                    <CopyrightIcon color="primary" className={classes.footerIcon} />
                    <Typography color="primary" variant="overline">Users App</Typography>
                </footer>
            </div>
        </MuiThemeProvider>
    )
};

export default App;

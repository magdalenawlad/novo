import React, { Fragment, useCallback, useMemo } from "react";
import { isMobile } from "react-device-detect";
import { makeStyles } from "@material-ui/core/styles";
import AddIcon from "@material-ui/icons/Add";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";
import List from "@material-ui/core/List";
import { Box } from "@material-ui/core";
import { useSelector } from "react-redux";
import Layout from "../_shared/Layout";
import Header from "../_shared/Header";

const useStyles = makeStyles(({
    avatar: {
        width: 103,
        height: 84,
        overflow: "hidden",
        margin: 10,
        position: "relative"
    },
    listItemRoot: {
        paddingTop: 3,
        paddingBottom: 3,
        ...(isMobile && ({
            display: "flex",
            flexDirection: "column"
        }))
    },
    multiline: {
        marginTop: 0,
        marginBottom: 0
    }
}));

const UserList = ({ history }) => {
    const classes = useStyles();
    const users = useSelector(state => state.users.data);
    const addNewUserHandler = useCallback(() => history.push("/user"), [history]);
    const actions = useMemo(() => [{
        label: "Add user",
        action: addNewUserHandler,
        name: "test",
        startIcon: <AddIcon />
    }], [addNewUserHandler])
    const goToUserPreview = useCallback((id) => history.push(`/user/${id}`), [history])

    return (
        <Layout maxWidth="md">
            <Header label="Users" actions={actions}/>
            <Box my={2} >
                <List>
                    {!!users.length && users.map(({ id, first_name, last_name, email, avatar }) => (
                        <Box
                            key={`user-${id}`}
                            my={2}
                            border={1}
                            borderRadius={6}
                            borderColor="grey.300"
                        >
                            <ListItem classes={{ root: classes.listItemRoot }} onClick={() => goToUserPreview(id)} button>
                                <ListItemText
                                    classes={{ multiline: classes.multiline}}
                                    primary={
                                        <Fragment>
                                            <Typography
                                                variant="subtitle2" color="textSecondary">{`ID: ${id}`}
                                            </Typography>
                                            <Typography
                                                variant="h6">{`${first_name} ${last_name}`}
                                            </Typography>
                                        </Fragment>
                                    }
                                    secondary={email}
                                />
                                <ListItemAvatar>
                                    <Avatar
                                        variant="square"
                                        className={classes.avatar}
                                        alt={`${first_name} ${last_name}`}
                                        src={avatar}
                                    />
                                </ListItemAvatar>
                            </ListItem>
                        </Box>
                    ))}
                </List>
            </Box>
        </Layout>
    )
}

export default UserList;

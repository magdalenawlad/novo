import React, { useCallback, useMemo, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Box, Typography } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import Layout from "../_shared/Layout";
import Header from "../_shared/Header";
import { Button } from "../_shared";
import {
    initialFormValues as initialData,
    getInputLabel,
    getInputType,
    validate,
    isShallowEqual
} from "./helpers";
import { addUser } from "../../redux/actions/usersActions";
import { createAlert } from "../../redux/actions/alertActions";

const SUBMISSION_PENDING_MESSAGE = "Thank you, your submission is pending and will appear after validation.";

const User = ({ history, match: { params: { userId }} }) => {
    const dispatch = useDispatch();
    const goToUserList = useCallback(() => history.push(""), [history])
    const handleSubmit = useCallback(() => {
        goToUserList();
        dispatch(addUser(userId));
        dispatch(createAlert({ text: SUBMISSION_PENDING_MESSAGE }))
    }, [goToUserList, dispatch, userId]);
    const [data, setData] = useState(initialData);
    const users = useSelector(state => state.users.data);
    const goBack = useCallback(() => history.goBack(), [history]);
    const [errors, setErrors] = useState({});
    const handleDataChange = useCallback((e) => {
        const { name, value } = e.target;
        const validator = validate(name);
        const error = validator(value);
        setErrors({
            ...errors,
            [name]: error
        });
        setData({
            ...data,
            [name]: value
        });
    }, [errors, data]);
    const currentUserData = useMemo(() => {
        return userId ? users.find(({ id }) => Number(id) === Number(userId)) : {}
    }, [userId, users]);
    const isCurrentUserEdited = useMemo(() =>
        !(userId && isShallowEqual(currentUserData, data)), [userId, currentUserData, data]);
    const isFormValid = useMemo(() => {
        const isTouched = userId || Object.keys(errors).length === Object.keys(data).length;
        const isValid = !Object.values(errors).join("");
        return isCurrentUserEdited && isValid && isTouched;
    },[errors, data, userId, isCurrentUserEdited]);
    useEffect(() => {
        const user = userId && users.length ? currentUserData: initialData;
        setData(user);
    }, [userId, users, currentUserData]);

    return (
        <Layout maxWidth="xs">
            <Box maxWidth={500}>
                <Header allowReturn label="New user details" />
                <Box pl={3} my={2}>
                    {userId && <Typography
                        variant="subtitle2" color="textSecondary">{`ID: ${userId}`}
                    </Typography>}
                    {Object.keys(initialData).map((name) => {
                        const isTouched = Object.prototype.hasOwnProperty.call(errors, name);
                        const errorText = validate(name)(data[name])
                        return (
                            <TextField
                                helperText={isTouched && errorText}
                                error={isTouched && !!errorText}
                                key={name}
                                name={name}
                                type={getInputType(name)}
                                label={getInputLabel(name)}
                                fullWidth
                                size="medium"
                                margin="normal"
                                onChange={handleDataChange}
                                variant="outlined"
                                value={data[name]}
                            />
                        )
                    })}
                </Box>
                <Box display="flex" justifyContent="flex-end">
                    <Button action={goBack} label="Cancel" variant="text" />
                    <Button disabled={!isFormValid} action={handleSubmit} label="Submit to review" />
                </Box>
            </Box>
        </Layout>
    );
}

export default User;

import React, { useCallback, useMemo, useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import { Box } from "@material-ui/core";
import Layout from "../_shared/Layout";
import Header from "../_shared/Header";
import TextField from '@material-ui/core/TextField';
import { Button } from "../_shared";
import { initialFormValues as initialData, getInputLabel, getInputType, validate } from "./helpers";
import {addUser} from "../../redux/actions/usersActions";

const User = ({ history, match: { params: { userId }} }) => {
    const [data, setData] = useState(initialData);
    const users = useSelector(state => state.users.data);
    const goBack = useCallback(() => history.goBack(), [history]);
    const [errors, setErrors] = useState({});

    const dispatch = useDispatch();
    const handleSubmit = useCallback(() => {
        // todo: redirect on success
        dispatch(addUser(userId));
    }, [dispatch, userId]);

    const handleDataChange = useCallback((e) => {
        const { name, value } = e.target;
        const validator = validate(name);
        const error = validator(value);
        setErrors({
            ...errors,
            [name]: error
        })
        setData({
            ...data,
            [name]: value
        })
    }, [data]);
    const formLength = useMemo(() => Object.keys(data).length, [data.length])

    const isFormValid = useMemo(() => {
        const isTouched = userId || Object.keys(errors).length === formLength;
        const isValid = !Object.values(errors).join("");
        return isValid && isTouched;
    },[errors, formLength, userId]);

    useEffect(() => {
        const user = userId && users.length ?
            users.find(({ id }) => Number(id) === Number(userId)) : initialData;
        setData(user)
    }, [users, userId])

    return (
        <Layout maxWidth="xs">
            <Box maxWidth={500}>
                <Header allowReturn label="New user details" />
                <Box pl={3} my={2}>
                    {Object.keys(initialData).map((name) => {
                        const isTouched = errors.hasOwnProperty(name);
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
    )
}

export default User;

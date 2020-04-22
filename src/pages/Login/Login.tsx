import React, { FormEventHandler, useState } from "react";
import { Button, Box, TextField, makeStyles, Theme, Grid, Paper } from '@material-ui/core';

import { loginUser } from '../../store/system/actions';
import { IRootState } from '../../store/';
import { useSelector, useDispatch } from "react-redux";
import { Redirect } from "react-router-dom";

// https://material-ui.com/components/text-fields/
const useStyles = makeStyles((theme: Theme) => ({
    root: {
        display: "flex",
        flexWrap: "wrap",
        minHeight: '100vh',
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: "25ch",
    },
    formItem: {
        marginTop: theme.spacing(1),
    },
}));

function LoginPage() {
    const [login, setLogin] = useState('');
    const [password, setPas] = useState('');
    const dispatch = useDispatch();

    const onSubmit: FormEventHandler<unknown> = (e) => {
        e.preventDefault();
        dispatch(loginUser({
            login,
            password,
        }));
    }
    const classes = useStyles();
    const userLoggedIn = useSelector((state: IRootState) => state.system.loggedIn);

    if (userLoggedIn) {
        return (
            <Redirect to="/" />
        );
    }

    return (
        <div className={classes.root}>
            <Grid
                container
                spacing={3}
                justify="center"
                alignItems="center"
                >
                <Grid item xs={6}>
                    <Paper className={classes.paper}>
                        <form onSubmit={onSubmit} autoComplete="off">
                            <Box className={classes.formItem}>
                                <TextField
                                    id="form-login"
                                    label="Login"
                                    variant="standard"
                                    required
                                    fullWidth
                                    className={classes.textField}
                                    value={login}
                                    onChange={({ target }) => setLogin(target.value)}
                                    />
                            </Box>

                            <Box className={classes.formItem}>
                                <TextField
                                    id="form-password"
                                    type="password"
                                    label="Password"
                                    variant="standard"
                                    required
                                    fullWidth
                                    className={classes.textField}
                                    value={password}
                                    onChange={({ target }) => setPas(target.value)}
                                    />
                            </Box>

                            <Box textAlign="right" className={classes.formItem}>
                                <Button type="submit" variant="contained" color="primary">
                                    Login
                                </Button>
                            </Box>
                        </form>

                    </Paper>
                </Grid>
            </Grid>
        </div>
    );
}

export default LoginPage;

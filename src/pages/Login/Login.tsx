import React from "react";
// import { connect, ConnectedProps } from "react-redux";
import { Button, Container, Box, TextField, makeStyles, Theme, Grid, Paper } from '@material-ui/core';

// import { SystemEvents } from "../../store/system/types";
// import { IRootState } from "../../store";

// const mapState = (state: IRootState) => ({
//     system: state.system,
// });

// const mapDispatch = {
//     login: () => ({ type: SystemEvents.LOGIN }),
// };

// const connector = connect(mapState, mapDispatch);
// type IPropsFromRedux = ConnectedProps<typeof connector>;

/**
 * Own props of component
 */
interface IAppProps extends Object {// IPropsFromRedux {
    backgroundColor: string;
}

// FROM https://material-ui.com/components/text-fields/
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
    // const { system } = props;
    // const { loggedIn } = system;

    // @ts-ignore TODO: убрать
    const onSubmit = (data) => console.log(data);
    const classes = useStyles();

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

// TODO: Hooks + reselect? https://react-redux.js.org/api/hooks
export default LoginPage; // connector(LoginPage);

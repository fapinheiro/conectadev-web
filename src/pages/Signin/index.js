import React from "react";
import { Typography, Avatar, TextField, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        height: '100vh',
    },
    left: {
        backgroundColor: 'blue',
        flex: '0 58%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        background: 'url(/images/background.jpg)',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'none'
    },
    right: {
        flex: '0 42%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        margin: '10px 20px',
        width: '100%'
    },
    form: {
        display: 'flex',
        flexDirection: 'column',
        maring: '64px 32px',
        alignItems: 'center',
        width: '100%'
    },
    avatar: {
        backgroundColor: theme.palette.primary.main
    },
    button: {
        marginTop: theme.spacing(2)
    },
    forgot: {
        marginTop: theme.spacing(1),
        width: '100%',
        justifyContent: 'space-between',
        display: 'flex'
    }
}));


function Signin() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <div className={classes.left}>
                <Typography style={{ color: '#fff', fontSize: 35, lineHeight: '45px' }} >
                    Simplificando a forma de conectar os desenvolvedores de software
                </Typography>
                <Typography variant='body2' style={{ color: 'rgb(255,255,255,0.7', marginTop: 30, fontSize: 15, lineHeight: '30px' }}>
                    Compartilhe seu conhecimento com toda nossa rede de desenvolvedores de software
                </Typography>
            </div>
            <div className={classes.right}>
                <Avatar className={classes.avatar}><LockOutlinedIcon /></Avatar>
                <Typography variant="h5">
                    Acesso
                </Typography>
                <form className={classes.form}>
                    <TextField variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        name="email"
                        label="Email"
                        id="email"
                        autoComplete="email"
                        autoFocus>
                    </TextField>
                    <TextField variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label="Senha"
                        type="password"
                        id="password"
                        autoComplete="current-password">
                    </TextField>
                    <Button className={classes.button} variant="contained" color="primary" fullWidth>
                        Entrar
                    </Button>
                    <div className={classes.forgot}>
                        <a href="#">Esqueceu a senha?</a>
                        <a href="#">Registre-se</a>
                    </div>
                </form>
            </div>
        </div >
    )
}

export default Signin;

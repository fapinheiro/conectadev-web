import React from "react";
import { makeStyles } from "@material-ui/core";
import { AppBar, Toolbar } from "@material-ui/core";
import SvgIcon from "@material-ui/core/SvgIcon";
import { Bell } from "react-feather";
import Button from "@material-ui/core/Button";
import Avatar from '@material-ui/core/Avatar';

const useStyles = makeStyles({
    appBar: {
        boxShadow: 'none'
    },
    imgLogo: {
        maxHeight: '55px'
    },
    toolBar: {
        justifyContent: 'space-between'
    },
    userSection: {
        display: 'flex',
        alignItems: 'center'
    },
    botaoNovoPost: {
        marginRight: '10px'
    },
    bell: {
        marginRight: '10px'
    }
})

function Header() {
    const classes = useStyles()

    return (
        <AppBar position="fixed" color="inherit" className={classes.appBar}>
            <Toolbar className={classes.toolBar}>
                <img src="./images/logo.png" alt="logo" className={classes.imgLogo}/>
                <div className={classes.userSection}>
                    <Button color="primary" variant="contained" className={classes.botaoNovoPost}>Novo Post</Button>
                    <SvgIcon className={classes.bell}>
                        <Bell></Bell>
                    </SvgIcon>
                    <Avatar alt="Remy Sharp" src=""></Avatar>
                </div>
                {/* <div>
                    <span>Conecta Dev</span>
                </div>
                <div>
                    <Button color="primary">Novo Post</Button>
                    <button>

                    </button>
                    <span>img1</span>
                    <span>img2</span>
                </div> */}
            </Toolbar>
        </AppBar>
    )
}

export default Header;
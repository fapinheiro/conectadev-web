import React from "react";
import { ListItem, ListItemText, ListSubheader, makeStyles } from "@material-ui/core";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles(theme => ({
    root: {
        padding: theme.spacing(2), //8x2 de acordo com o theme
        width: '275px',
        marginRight: theme.spacing(2)
    },
    botaoRegistrar: {
        width: '100%'
    }
}));

// const useStyles = makeStyles({
//     root: {
//         padding: '16px',
//         width: '275px'
//     }
// })

const tags = [
    {id: 1, name: 'reactjs'},
    {id: 2, name: 'javascript'},
    {id: 3, name: 'dotnet'},
    {id: 4, name: 'php'},
    {id: 5, name: 'webdev'}
]
function Navbar() {
    const classes = useStyles();

    return (
        <Paper className={classes.root}>
            <Button variant="outlined" color="secondary" className={classes.botaoRegistrar}>Registrar Gratis</Button>
            <ListSubheader>{"Tags em alta"}</ListSubheader>
            {
                tags.map( item => (
                    <ListItem dense button key={`item-${item.id}-${item.name}`}>
                        <ListItemText primary={`#${item.name}`}></ListItemText>
                    </ListItem>
                ))
            }
            <ListItem button>
                <ListItemText primary={"Exibir mais tags"}></ListItemText>
            </ListItem>
        </Paper>
    )
}

export default Navbar;
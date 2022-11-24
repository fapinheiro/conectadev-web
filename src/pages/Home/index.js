import React from "react";
import { Box, Container, makeStyles } from "@material-ui/core";
import Header from './components/Header';
import Feed from './components/Feed';
import Navbar from './components/Navbar';

const useStyles = makeStyles({
    root: {
        display: 'flex',
        flexDirection: 'column'
    },
    main: {
        height: '100vh',
        padding: '24px',
        // display: 'flex',
        // width: '1280px',
        // margin: '0 auto'
    },
    toolbar: {
        minHeight: '64px'
    },
    container: {
        // maxWidth: '1024px',
        '@media (min-width: 1280px)': {
            maxWidth: '1024px',
        },
        '@media (min-width: 2048px)': {
            maxWidth: '1480px'
        }
    }
})

function Home() {
    const classes = useStyles()

    return (
        <div className={classes.root}>
            <Header/>
            <div className={classes.toolbar}></div>
            <main className={classes.main}>
                <Container className={classes.container}>
                    <Box display="flex">
                        <Navbar/>
                        <Feed/>
                    </Box>
                </Container>
            </main>
        </div>
    );
}

export default Home;
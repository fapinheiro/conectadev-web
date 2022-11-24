import React from "react";
import { makeStyles } from "@material-ui/core";
import PostCard from "../../../components/PostCard";

const useStyles = makeStyles(theme => ({
    root: {
        // padding: theme.spacing(2), //8x2 de acordo com o theme
        width: '100%',
        // marginRight: theme.spacing(2)
    },
}));

const posts = [
    {
        id: 1,
        author: {
            id: 1,
            name: 'Filipe Pinheiro',
            username: 'fapinheiro',
            avatar: ''
        },
        title: 'Criando um app do zero utilizando React.js',
        date: 'April 7, 2020',
        description: 'Fala pessoal! Qual o frameworkd favorito de vcs?',
        hashtags: '#dotnet, #javascript, #reactjs, #developer',
        image: './images/brasil.png'
    },
    {
        id: 2,
        author: {
            id: 2,
            name: 'Sarah Pinheiro',
            username: 'sapinheiro',
            avatar: ''
        },
        title: 'Comparativo entre React.js e Vue.js - Performance',
        date: 'April 7, 2020',
        description: 'Quero criar um bootcamp gratuito para falar um pouco da minha experiência.',
        hashtags: '#dotnet, #javascript, #reactjs, #vuejs, #developer',
        image: './images/brasil.png'
    },
]

function Feed() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            {
                posts.map(post => (
                    <PostCard key={post.id} post={post}>
                    </PostCard>
                ))
            }
        </div>
    )
}

export default Feed;
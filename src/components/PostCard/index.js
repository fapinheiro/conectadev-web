import React from "react";
import { Avatar, CardActionArea, makeStyles, Typography } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import FavoretIcon from "@material-ui/icons/Favorite";
import BookmarkIcon from '@material-ui/icons/Bookmark';
import MessageIcon from '@material-ui/icons/Message';
import IconButton from "@material-ui/core/IconButton";

const useStyles = makeStyles(theme => ({
    root: {
       marginBottom: theme.spacing(2),
    //    width: '100%'
    },
    subHeader: {
        display: 'flex',
        alignItems: 'center'
    },
    caption: {
        marginRight: theme.spacing(1)
    },
    message: {
        height: 'auto',
        marginBottom: theme.spacing(2),
        padding: '0 24px'
    },
    image: {
        height: '300px',
        width: '100%'
    },
    content: {
        padding: '0'
    },
    favorite: {
        marginLeft: 'auto'
    }
}));


function PostCard(props) {
    const {post} = props;
    const classes = useStyles();
    return (
        <Card className={classes.root}>
            <CardHeader avatar={<Avatar src={post.author.avatar}></Avatar>}
                title={<Typography variant="h6">{post.title}</Typography>}
                subheader={
                    <div className={classes.subHeader}>
                        <Typography variant="caption" className={classes.caption}>
                            {'Avaliado por'}
                        </Typography>
                        <Typography variant="subtitle2" className={classes.caption}>
                            {post.author.name}
                        </Typography>
                        <Typography variant="caption" className={classes.caption}>
                            {post.date}
                        </Typography>
                    </div>
                }>
            </CardHeader>
            <CardContent className={classes.content}>
                <Typography variant="body1" className={classes.message}>
                    {post.hashtags}
                </Typography>
                <CardActionArea>
                    <img src={post.image} className={classes.image} alt="img"/>
                </CardActionArea>
            </CardContent>
            <CardActions disableSpacing>
                <IconButton aria-label="like">
                    <FavoretIcon></FavoretIcon>
                    <Typography style={{cursor: 'pointer'}}
                        color="textSecondary"
                        variant="body2">
                        {'10'}
                    </Typography>
                </IconButton>
                <IconButton aria-label="comment">
                    <MessageIcon></MessageIcon>
                    <Typography style={{cursor: 'pointer'}}
                        color="textSecondary"
                        variant="body2">
                        {'30'}
                    </Typography>
                </IconButton>
                <IconButton aria-label="favorite" className={classes.favorite}>
                    <BookmarkIcon></BookmarkIcon>
                </IconButton>
            </CardActions>
        </Card>
    )
}

export default PostCard;
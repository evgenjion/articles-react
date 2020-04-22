import React from "react";
import { privateRouteComponent } from "../../components/hoc/privateRouteComponent";
import { Grid, makeStyles, Theme } from "@material-ui/core";
import { useSelector } from "react-redux";
import { IRootState } from "../../store";
import { useParams } from "react-router-dom";
import { HomePageLink } from '../../components/HomePageLink';

const useStyles = makeStyles((theme: Theme) => ({
    main: {
        padding: theme.spacing(4),
    },
}));

function ArticlePage() {
    const { articles } = useSelector((state: IRootState) => state);
    const { id } = useParams();

    const article = articles.articleList[Number(id)];
    const classes = useStyles();

    if (!article) {
        alert(article);
        return (
            <>
                <HomePageLink />
                <h1>404 Article not found</h1>
            </>
        );
    }

    return (
        <Grid
            container
            spacing={1}
            className={classes.main}
            >
            <Grid item xs>
                <HomePageLink />
                <h1>You are watching article with id {article.id}</h1>
                <h2>{article.title}</h2>
                <h4>{article.body}</h4>
            </Grid>
        </Grid>
    );
}

export default privateRouteComponent(ArticlePage);

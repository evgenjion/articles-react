import React from "react";
import { privateRouteComponent } from "../../components/hoc/privateRouteComponent";
import { Grid, makeStyles, Theme, CircularProgress, ListItem, Link } from "@material-ui/core";
import { useSelector, useDispatch } from "react-redux";
import { IRootState } from "../../store";
import { allArticlesLoad } from "../../store/articles/actions";
import { NavLink } from "react-router-dom";

const useStyles = makeStyles((theme: Theme) => ({
    main: {
        padding: theme.spacing(4),
    },
    li: {
        listStyleType: 'none'
    }
}));

function HomePage() {
    const { system, articles } = useSelector((state: IRootState) => state);
    const { userName } = system;
    const { articleList, articleListLoadStatus } = articles;
    const { loaded, loadStarted } = articleListLoadStatus;
    const classes = useStyles();
    const dispatch = useDispatch();

    if (!loadStarted) {
        dispatch(allArticlesLoad());
    }

    return (
        <Grid
            container
            spacing={1}
            className={classes.main}
            >
            <Grid item xs>
                <h2>Hello {userName}!</h2>

                {loaded ?
                    (<>
                        <h4>Here is the list of articles:</h4>
                        <ul>
                            {Object.values(articleList).map(({id, title}) => {
                                return (
                                    <li key={`article-${id}`} className={classes.li}>
                                        <NavLink to={`/article/${id}`}>
                                            <ListItem button>
                                                <Link component="button" variant="body1">{title}</Link>
                                                {/* <ListItemText primary={title} /> */}
                                            </ListItem>
                                            {/* {title} */}
                                        </NavLink>

                                    </li>
                                )
                            })}
                        </ul>
                    </>) :
                    <CircularProgress />
                }
            </Grid>
        </Grid>
    );
}

export default privateRouteComponent(HomePage);

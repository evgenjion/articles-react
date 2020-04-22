import { Action } from "redux";
import { ThunkAction } from "redux-thunk";

import { IArticleLoadFinishedEvent, IArticle, ArticleEventEnum, IArticlesState } from "./types";
import { APIUrl } from '../../config';

function articleListLoadStart() {
    return {
        type: ArticleEventEnum.LOAD_ARTICLE_LIST,
    };
}

function articlesLoadFinish(articleList: IArticle[]): IArticleLoadFinishedEvent {
    return {
        type: ArticleEventEnum.ARTICLES_LOAD_FINISHED,
        payload: articleList,
    };
}

export function allArticlesLoad(): ThunkAction<void, IArticlesState, unknown, Action<string>> {
    return (dispatch) => {
        dispatch(articleListLoadStart());

        fetch(`${APIUrl}/posts`)
            .then(response => response.json())
            .then((articleList) => {
                dispatch(articlesLoadFinish(articleList))
            });
    };
}

export function articleLoad(id: number): ThunkAction<void, IArticlesState, unknown, Action<string>> {

    return (dispatch) => {
        fetch(`${APIUrl}/posts`)
            .then(response => response.json())
            .then((articleList) => {
                dispatch(articlesLoadFinish(articleList))
            });
    }
}

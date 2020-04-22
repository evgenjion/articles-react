import { IArticlesState, IArticleEvent, ArticleEventEnum } from './types'

const initialState: IArticlesState = {
    articleListLoadStatus: {
        loaded: false,
        loadStarted: false,
    },
    articleList: {},
    loadedArticles: {},
}

export function articlesReducer(
    state = initialState,
    action: IArticleEvent
): IArticlesState {
    switch (action.type) {
        case ArticleEventEnum.ARTICLES_LOAD_FINISHED: {
            return {
                ...state,
                articleList: action.payload.reduce<IArticlesState['articleList']>((acc, article) => {
                    acc[article.id] = article;

                    return acc;
                }, {}),
                articleListLoadStatus: {
                    loaded: true,
                    loadStarted: true,
                },
            };
        }
        case ArticleEventEnum.LOAD_ARTICLE_LIST: {
            return {
                ...state,
                articleListLoadStatus: {
                    loaded: false,
                    loadStarted: true,
                },
            }
        }
        default:
            return state
    }
}

export interface IArticle {
    userId: number;
    id: number;
    title: string;
    body: string;
}

export interface ILoadStatus {
    loaded: boolean;
    loadStarted: boolean;
}

export enum ArticleEventEnum {
    LOAD_ARTICLE_LIST = 'LOAD_ARTICLE_LIST',
    LOAD_ARTICLE = 'LOAD_ARTICLE',
    ARTICLES_LOAD_FINISHED = 'ARTICLES_LOAD_FINISHED',
}

export interface IBaseArticleEvent<T extends ArticleEventEnum>{
    type: T;
}

export interface IArticleLoadEvent extends IBaseArticleEvent<ArticleEventEnum.LOAD_ARTICLE_LIST> {}
export interface IArticleLoadFinishedEvent extends IBaseArticleEvent<ArticleEventEnum.ARTICLES_LOAD_FINISHED> {
    payload: IArticle[];
}

export type IArticleEvent = IArticleLoadEvent | IArticleLoadFinishedEvent;

export interface IArticlesState {
    articleListLoadStatus: ILoadStatus;
    articleList: Record<number, IArticle>;
    loadedArticles: Record<number, ILoadStatus>;
}

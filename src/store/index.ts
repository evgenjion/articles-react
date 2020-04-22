import { combineReducers } from 'redux'
import { systemReducer } from './system/reducers'
import { articlesReducer } from './articles/reducers';

export const rootReducer = combineReducers({
    system: systemReducer,
    articles: articlesReducer,
})

export type IRootState = ReturnType<typeof rootReducer>

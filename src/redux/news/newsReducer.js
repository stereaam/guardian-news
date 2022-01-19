const initialState = {
    data: [],
    articleData: [],
    loading: false,
    error: null
}

function newsReducer(state=initialState, action){
    switch(action.type){
        case 'START_GETTING_NEWS':
            return {
                ...state,
                loading: true,
                error: null
            }
        case 'START_GETTING_ARTICLE':
             return {
                ...state,
                loading: true,
                error: null
            }
        case 'UPDATE_NEWS_DATA':
            return {
                ...state,
                data: [...action.payload],
                error: null,
                loading: false
            }
        case 'UPDATE_ARTICLE_DATA':
            return {
                ...state,
                articleData: [...state.articleData, action.payload],
                error: null,
                loading: false
            }
        case 'UPDATE_NEWS_ERROR':
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        case 'UPDATE_ARTICLE_ERROR':
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        default:
            return state
    }
}

export default newsReducer
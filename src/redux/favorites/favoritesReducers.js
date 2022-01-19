const initialState = {
    articles: [],
    maxLimitReached: false
}

export default function favoritesReducer(state=initialState, action){
    switch(action.type){
        case 'ADD_TO_FAVORITES':

            const isArticleinFavorites = state.articles.find(article => article.id === action.payload.id)

            if(state.articles.length === 10){
                return{
                    ...state,
                    maxLimitReached: true
                }
            }

            if(isArticleinFavorites)
                return state   

            return{
                 ...state,
                articles: [...state.articles, action.payload]
            }
            
        case 'REMOVE_FROM_FAVORITES':

            const filteredArticles = state.articles.filter(article => article.id !== action.payload.id)

            if (state.articles.length === 10) {
                return {
                    ...state,
                    articles: filteredArticles,
                    maxLimitReached: false
                }
            }

            return {
                ...state,
                articles: filteredArticles
            }

        default:
            return state;
    }
}
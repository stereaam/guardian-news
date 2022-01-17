const initialState = {
    data: [],
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
        case 'UPDATE_NEWS_DATA':
            return {
                ...state,
                data: [...state.data, ...action.payload],
                error: null,
                loading: false
            }
        case 'UPDATE_NEWS_ERROR':
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
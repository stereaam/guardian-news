export function startGettingNews (){
    return {
        type: 'START_GETTING_NEWS'
    }
}

export function startGettingArticle(){
    return {
        type: 'START_GETTING_ARTICLE'
    }
}

export function updateNewsData(payload){
    return {
        type: 'UPDATE_NEWS_DATA',
        payload
    }
}

export function updateArticleData(payload){
    return {
        type: 'UPDATE_ARTICLE_DATA',
        payload
    }
}

export function updateNewsError(payload){
    return {
        type: 'UPDATE_NEWS_ERROR',
        payload
    }
}

export function updateArticleError(payload){
    return {
        type: 'UPDATE_ARTICLE_ERROR',
        payload
    }
}

export function getNews(payload){
    return (dispatch) => {
        dispatch(startGettingNews)
        const GUARDIAN_API_KEY = process.env.REACT_APP_GUARDIAN_API_KEY
        const url = `https://content.guardianapis.com/search?api-key=${GUARDIAN_API_KEY}&page=${payload.page}`
        fetch(url).then((response) => response.json())
        .then(news => {
            const newsData = news.response.results.map( (result) => {
                const { id, sectionName, webTitle, pillarName } = result
                return {
                    id,
                    sectionName,
                    webTitle,
                    pillarName
                }
            })
            dispatch(updateNewsData(newsData))
        }).catch( error => {
            dispatch(updateNewsError(error))
        }) 

    }
}

export function getArticle(payload){
    return (dispatch) => {
        dispatch(startGettingArticle)
        const GUARDIAN_API_KEY = process.env.REACT_APP_GUARDIAN_API_KEY
        const url = `https://content.guardianapis.com/${payload.articleId}?api-key=${GUARDIAN_API_KEY}`
        fetch(url).then((response) => response.json())
        .then(article => {
            const articleInfo = article.response.content
            const { id, webTitle, sectionName, pillarName, webUrl, webPublicationDate } = articleInfo
            const articleData = {
                    route: payload.route,
                    id,
                    webTitle,
                    pillarName,
                    sectionName,
                    webUrl,
                    webPublicationDate
                }
            dispatch(updateArticleData(articleData))
        }).catch( error => {
            dispatch(updateArticleError(error))
        }) 

    }
}
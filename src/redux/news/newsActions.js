export function startGettingNews (){
    return {
        type: 'START_GETTING_NEWS'
    }
}

export function updateNewsData(payload){
    return {
        type: 'UPDATE_NEWS_DATA',
        payload
    }
}

export function updateNewsError(payload){
    return {
        type: 'UPDATE_NEWS_ERROR',
        payload
    }
}


export function getNews(){
    return (dispatch) => {
        dispatch(startGettingNews)
        const url = 'https://content.guardianapis.com/search?api-key=285c379c-1ba5-4ad1-905b-fb345fa35d31'
        fetch(url).then((response) => response.json())
        .then(news => {
            const newsData = news.response.results.map( (result) => {
                const { id, sectionName, webTitle, pillarName } = result;
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
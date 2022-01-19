import React from 'react'
import Layout from '../Components/Layout'
import {connect} from 'react-redux'
import {getArticle} from '../redux/news/newsActions'
import {addToFavorites} from '../redux/favorites/favoritesActions'
import './Article.css'

class Article extends React.Component {

    componentDidMount(){
        this.props.getArticle({
            articleId: this.props.match.params.articleId,
            route: this.props.location.pathname})
    }

    componentDidUpdate(prevProps){
            if(prevProps.match.params.articleId !== this.props.match.params.articleId){
                this.props.getArticle({
                    articleId: this.props.match.params.articleId,
                    route: this.props.location.pathname})
            }
    }
        

    render(){
        const {articleInfo, addToFavorites} = this.props
        return (
            <div>
                <Layout>
                    <div className="container-fluid container-min-max-width p-0">
                        {articleInfo
                        ? <div className='article p-2 px-3 m-1 my-3'>

                            <h1 className="h2 my-2">{articleInfo.webTitle}</h1>

                            <div className="d-flex justify-content-between mt-3 mb-5">
                                <p className="h4">
                                    {articleInfo.pillarName} - {articleInfo.sectionName}
                                </p>
                                <div className='d-flex align-items-center'>
                                    <p className="m-0 mx-1">{articleInfo.webPublicationDate.slice(0,10)}</p>
                                    <p className='m-0 mx-1'>{articleInfo.webPublicationDate.slice(11,19)}</p>
                                </div>
                            </div>

                            <p className="h5 mb-3">
                                Read the whole article on TheGuardian website: &nbsp;
                                <a 
                                    className="article-link" 
                                    target="_blank" 
                                    rel='noreferrer' 
                                    href={articleInfo.webUrl}
                                >
                                    Click here!
                                </a>
                            </p>
                            <button
                                className="btn btn-danger"
                                onClick={()=> addToFavorites({
                                    id: articleInfo.id,
                                    title: articleInfo.webTitle,
                                    pillarName: articleInfo.pillarName,
                                    sectionName: articleInfo.sectionName
                                })}   
                            >
                                Add to favorites
                            </button>
                        </div>
                        : null
                        }
                    </div>
                </Layout>
            </div>
        )
    }
}

function mapStateToProps(state, props){
    return{
        articleInfo: state.news.articleData.find(article => article.route === props.location.pathname)
    }
}

function mapDispatchToProps(dispatch){
    return {
        getArticle: (payload) => dispatch(getArticle(payload)),
        addToFavorites: (payload) => dispatch(addToFavorites(payload))
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(Article)

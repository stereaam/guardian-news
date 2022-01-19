import React from 'react'
import Layout from '../Components/Layout'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {removeFromFavorites} from '../redux/favorites/favoritesActions'
import './Favorites.css'

function Favorites(props) {

    const {articles,removeFromFavorites} = props

    return (
        <div>
            <Layout>
               <div className='p-3'>
                  {articles.length
                    ? articles.map( article => {
                          return <div className="favorites-article col-12 mb-5 p-4 px-3" key={article.id}>
                                <Link className='favorites-article-link' to={`/article/${article.id}`}>
                                    <h1 className="h3">{article.title}</h1>
                                    <p className="h5 mb-4">{article.pillarName} - {article.sectionName}</p>
                                </Link>
                                <button 
                                    className="btn btn-outline-danger" 
                                    onClick={()=>removeFromFavorites(
                                        {
                                            id:article.id
                                        }
                                    )}
                                >
                                    Remove from favorites
                                </button>
                            </div>

                    })
                    : <p className='h4'>No favorite articles added!</p>
                  }
               </div>
            </Layout>
        </div>
    )
}

function mapStateToProps(state){
    return{
        articles: state.favorites.articles
    }
}

function mapDispatchToProps(dispatch){
    return{
        removeFromFavorites: (payload) => dispatch(removeFromFavorites(payload))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Favorites)

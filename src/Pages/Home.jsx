import React from 'react'
import Layout from '../Components/Layout'
import {connect} from 'react-redux'
import {getNews} from '../redux/news/newsActions'
import {addToFavorites} from '../redux/favorites/favoritesActions'
import {Link} from 'react-router-dom'
import './Home.css'



class Home extends React.Component {

        componentDidMount(){
            const queryString = this.props.location.search;
            const pageNumber = this.getPageNumberFromQueryString(queryString);
            this.props.getNews({
                page: pageNumber
            })
        }

        componentDidUpdate(prevProps){
            const queryString = this.props.location.search;
            const pageNumber = this.getPageNumberFromQueryString(queryString);
            if(prevProps.location.search !== queryString){
                this.props.getNews({
                    page: pageNumber
                })     
            }
        }

        getPageNumberFromQueryString(queryString) {
            return queryString ? Number(queryString[queryString.length - 1]) : 1
        }

        goToPage(page) {
            const {history} = this.props
            const pageQueryString = page === 1 ? '' : `?page=${page}`;
            history.push({search: pageQueryString});
        }

        render(){
            const queryString = this.props.location.search
            const {addToFavorites, newsList} = this.props
            return (  
                <div>
                    <Layout>
                        <div className="row mt-1">                     
                            {newsList.map((news) => {
                                return (
                                    <div className="col-12 col-lg-6" key={news.id}>
                                        <div className='home-article d-flex flex-column justify-content-between rounded my-3 px-3 py-1'>
                                            <Link className='text-decoration-none text-black' to={`/article/${news.id}`}>
                                                <h1 className="h3">{news.webTitle}</h1>
                                                <p className="h5">
                                                    {news.pillarName} {'>'} {news.sectionName}
                                                </p>
                                            </Link>
                                        
                                            <div className="d-flex justify-content-end align-items-end">
                                                <button 
                                                    className="btn btn-danger m-0"
                                                    onClick={()=> addToFavorites({
                                                        id: news.id,
                                                        title: news.webTitle,
                                                        pillarName: news.pillarName,
                                                        sectionName: news.sectionName
                                                    })}>
                                                    Add to favorites
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                )})
                            }
                        </div>
                        <nav className="d-flex justify-content-center my-3"> 
                            <button 
                                className={
                                    this.getPageNumberFromQueryString(queryString) === 1
                                        ? 'btn btn-dark m-1' 
                                        : 'btn btn-outline-dark m-1'} 
                                onClick={() => this.goToPage(1)}
                            >
                                1
                            </button>
                        
                            <button 
                            className={
                                    this.getPageNumberFromQueryString(queryString) === 2
                                        ? 'btn btn-dark m-1' 
                                        : 'btn btn-outline-dark m-1'}
                            onClick={() => this.goToPage(2)}>
                                2
                            </button>
                            <button 
                            className={
                                    this.getPageNumberFromQueryString(queryString) === 3
                                        ? 'btn btn-dark m-1' 
                                        : 'btn btn-outline-dark m-1'}
                            onClick={() => this.goToPage(3)}>
                                3
                            </button> 
                        </nav>
                    </Layout>
                </div>
            )
    }
        }

function mapStateToProps(state){
    return{
        newsList: state.news.data
    }
}

function mapDispatchToProps(dispatch){
    return {
        getNews: (payload) => dispatch(getNews(payload)),
        addToFavorites: (payload) => dispatch(addToFavorites(payload))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Home)

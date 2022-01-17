import React from 'react'
import Layout from '../Components/Layout'
import {connect} from 'react-redux'
import {getNews} from '../redux/news/newsActions'
import {Link} from 'react-router-dom'



class Home extends React.Component {

        constructor(){
            super()
            this.state = {
                newsList: []
            }
        }
        componentDidMount(){
            this.props.getNews()
        }

        componentDidUpdate(prevProps){
            if(prevProps.newsList!== this.props.newsList){
                this.setState({newsList: this.props.newsList})        
            }
        }

        render(){
            return (  
                <div>
                    <Layout>
                        <div className="row">                         
                            {this.state.newsList.map((news) => {
                                return (
                                    <div className="article-box col-12 col-lg-6 mb-4 pl-2 pr-5 py-3" key={news.id}>
                                    <Link to={`/article/${news.id}`}>
                                        <h1 className="text-title h3">{news.webTitle}</h1>
                                        <p className="text-subtitle h5">{news.pillarName} {'>'} {news.sectionName}</p>
                                    </Link>
                                
                                
                                        <div className="d-flex justify-content-end">
                                            <button
                                                className="btn btn-outline-dark"
                                            >
                                                Add to favorites
                                            </button>
                                        </div>
                                    </div>
                                )})
                            }
                        </div>
                    </Layout>
                </div>
            )
    }
        }

function mapStateToProps(state){
    return{
        newsList: state.data
    }
}
function mapDispatchToProps(dispatch){
    return {
        getNews: () => dispatch(getNews())
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Home)

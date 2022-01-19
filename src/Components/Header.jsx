import React from 'react'
import logo from '../assets/logo.png'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import './Header.css'

function Header(props) {
    const {articles} = props
    return (
        <header className='p-2 mb-5'>
            <div className='d-flex justify-content-between align-items-center'>
                <Link to='/'>
                    <img className='logo' src={logo} alt="logo" />
                </Link>
                <div className='d-flex flex-column align-items-center'>

                    <div className='d-flex align-items-center'>
                        <Link className='favorites' to='/favorites'>
                            <p className='h3 m-0 mt-2'>Favorites</p>
                        </Link>
                        <p className='h4 px-1 favorites m-0 mt-2'>
                            ({articles.length})
                        </p>     
                    </div>
                    
                    {articles.length === 10
                        ? <em className='favorites'>Limit reached!</em>
                        : <p></p>
                    }

                </div>
            </div>
        </header>
    )
}

function mapStateToProps(state){
    return {
        articles: state.favorites.articles
    }
}

export default connect(mapStateToProps)(Header)

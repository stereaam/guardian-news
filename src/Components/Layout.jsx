import React from 'react'
import Header from './Header'
import Footer from './Footer'
import './Layout.css'

function Layout(props) {
    
    return (
        <div className='layout container-fluid container-min-max-width'>
            <Header/>
                {props.children}
            <Footer/>
        </div>
    )
}

export default Layout

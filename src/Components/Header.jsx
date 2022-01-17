import React from 'react'
import logo from '../assets/logo.png'
import {Link} from 'react-router-dom'
import './Header.css'

function Header() {
    return (
        <header className='p-2'>
            <div className='d-flex justify-content-between align-items-center'>
                <img className='logo' src={logo} alt="logo" />
                <Link className='favorites-link' to='/favorites'>
                    <p className='h3'>Favorites</p>
                </Link>
            </div>
        </header>
    )
}

export default Header

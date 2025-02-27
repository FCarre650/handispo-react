import React from 'react';
import logo from '../assets/images/logo.png'
import account from '../assets/images/account.png'
import { Link } from 'react-router-dom';



export default function Header() {
    return (
        <div className='header'>
            <header>
                <Link to="/">
                <a href="home">
                    <img src={logo} alt="logo" className="logo" />
                </a>
                </Link>
                
                <a href="login">
                    <img src={account} alt="account" className= "account"/>
                </a>
            </header>
        </div>
    );
}
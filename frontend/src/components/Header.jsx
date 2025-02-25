import React from 'react';
import logo from '../assets/images/logo.png'
import account from '../assets/images/account.png'



export default function Header() {
    return (
        <div className='header'>
            <header>
                <a href="home">
                    <img src={logo} alt="logo" className="logo" />
                </a>
                <a href="login">
                    <img src={account} alt="account" className= "account"/>
                </a>
            </header>
        </div>
    );
}
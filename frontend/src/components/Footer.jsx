import React from 'react';
import accueil from '../assets/images/accueil.png'
import liste from '../assets/images/liste.png'
import carte from '../assets/images/carte.png'
import catalogue from '../assets/images/livre.png'
import aide from '../assets/images/aide.png'
import { Link } from 'react-router-dom';


export default function Footer() {
    return (
        <div className='footer'>
            <footer>
                <Link to="/">
                <a href="accueil">
                    <img src={accueil} alt="accueil" className="accueil" />
                </a>
                </Link>

                <Link to="/associations">
                <a href="liste">
                    <img src={liste} alt="liste" className= "liste"/>
                </a>
                </Link>

                <Link to="/map">
                <a href="carte">
                    <img src={carte} alt="carte" className="carte" />
                </a>
                </Link>

                <Link to="/catalog">
                <a href="catalogue">
                    <img src={catalogue} alt="catalogue" className= "catalogue"/>
                </a>
                </Link>

                <Link to="/help">
                <a href="aide">
                    <img src={aide} alt="aide" className= "aide"/>
                </a>
                </Link>
            </footer>
        </div>
    );
}
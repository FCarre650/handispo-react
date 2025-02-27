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
                    <img src={accueil} alt="accueil" className="accueil" />
                </Link>

                <Link to="/associations">
                    <img src={liste} alt="liste" className= "liste"/>
                </Link>

                <Link to="/map">
                    <img src={carte} alt="carte" className="carte" />
                </Link>

                <Link to="/catalog">
                    <img src={catalogue} alt="catalogue" className= "catalogue"/>
                </Link>

                <Link to="/help">
                    <img src={aide} alt="aide" className= "aide"/>
                </Link>
            </footer>
        </div>
    );
}
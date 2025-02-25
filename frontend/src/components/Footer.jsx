import React from 'react';
import accueil from '../assets/images/accueil.png'
import liste from '../assets/images/liste.png'
import carte from '../assets/images/carte.png'
import catalogue from '../assets/images/livre.png'
import aide from '../assets/images/aide.png'


export default function Footer() {
    return (
        <div className='footer'>
            <footer>
                <a href="accueil">
                    <img src={accueil} alt="accueil" className="accueil" />
                </a>
                <a href="liste">
                    <img src={liste} alt="liste" className= "liste"/>
                </a>
                <a href="carte">
                    <img src={carte} alt="carte" className="carte" />
                </a>
                <a href="catalogue">
                    <img src={catalogue} alt="catalogue" className= "catalogue"/>
                </a>
                <a href="aide">
                    <img src={aide} alt="aide" className= "aide"/>
                </a>
            </footer>
        </div>
    );
}
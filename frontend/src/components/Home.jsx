import React from 'react';

import Header from './Header'
import Footer from './Footer'
import { Link } from 'react-router-dom';


export default function Home() {
    return (
        <>
        <Header/>
    
        <div>
            <section className='presentation'>
                <h1>Bienvenue sur Handispo !</h1>
                <p>Explorez des activités adaptées à vos besoins et découvrez des associations,
                    des ressources, et des sports conçus pour vous !
                </p>
            </section>

            <section className="presentation">
                <Link to="/catalog">
                    <button>CATALOGUE DES SPORTS</button>
                </Link>
                <Link to="/associations">
                    <button>LISTE DES ASSOCIATIONS</button>
                </Link>
                <Link to="/map">
                    <button>CARTE</button>
                </Link>
            </section>
        </div>

        <Footer/>
        </>
    );
}
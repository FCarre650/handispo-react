import React from 'react';




export default function Home() {
    return (
        <div>
            <section className='presentation'>
                <h1>Bienvenue sur Handispo !</h1>
                <p>Explorez des activités adaptées à vos besoins et découvrez des associations,
                    des ressources, et des sports conçus pour vous !
                </p>
            </section>

            <section className="presentation">
                <div class="bouton_haut">
                    <button className="btn_catalogue" >CATALOGUE DES SPORTS</button>
                </div>

                <div class="boutons_bas">
                    <button className="btn_liste">LISTE DES ASSOCIATIONS</button>
                    <button className="btn_carte">CARTE</button>        
                </div>
            </section>
        </div>
    );
}
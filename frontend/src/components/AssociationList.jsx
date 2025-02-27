import React from 'react';
import {useState, useEffect} from 'react'
import ModalWindow from './ModalWindow';

import Header from './Header'
import Footer from './Footer'




export default function AssociationList() {

    //state
    const [associations, setAssociations] = useState([])
    const [isModalOpen, setIsModalOpen] = useState(false)

    //appel backend pour récupérer la liste des associations
    const ListAsso = async() => {
        const response = await fetch("http://127.0.0.1:8000/api/associations/");
        return response.json();
    }

    //gerer l'asynchrone
    useEffect(() => {
        let isMounted = true;

        ListAsso().then((result) => {
            if (isMounted) setAssociations(result);
        });

        return () => {
            isMounted = false;
        };
    }, []);

  

    //comportementsAssos
    const openModal = () => {
        setIsModalOpen(true)
    }

    const closeModal = () => {
        setIsModalOpen(false)
    }

    //affichage
    return (
        <>
         <Header/>
         <div>
            <h1>Liste des associations</h1>
            <button className='button-filter' onClick={openModal} >
                FILTRES
            </button>
            <ModalWindow 
                isOpen={isModalOpen} 
                isClose={closeModal}
            />
            <ul>
            {associations.map( association => (
            <li key={association.id}>
              <p><b>{association.name}</b></p>
              <p> {association.address} </p>
              <p> {association.postal_code} {association.city} </p>
              <br/>
              </li>
            ))}
            </ul>
        </div>
        <Footer/>
        </>
    );
}
import React from 'react';
import {useState, useEffect} from 'react'




export default function AssociationList() {

    //state
    const [associations, setAssociations] = useState([])
    

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


    //affichage
    return (
        <div>
            <h1>Liste des associations</h1>
            <ul>
            {associations.map(association => {
              <li key={association.id}>{association.name}
              </li>
            })}
            </ul>
        </div>
    );
}
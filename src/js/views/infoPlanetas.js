import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { useParams } from 'react-router-dom';



export const InfoPlaneta = () => {
    const { store, actions } = useContext(Context);
    const { id, planeta_name } = useParams();

    useEffect(() => {
        actions.fetchOnePlaneta(id)
    }, [id])

    const planeta = store.singlePlanet.result ? store.singlePlanet.result.properties : null;

    if (!planeta) {
        return <div className="text-light text-center fs-2">Cargando data del planeta...</div>;
    }

    return (
        <div>
            <h1 className="text-warning text-center display-1">{planeta.name}</h1>
            <div className="d-flex gap-2 flex-wrap container-fluid bg-light p-5 w-75 rounded">
                <div>
                    <img className="rounded" src={
                         planeta.name === 'Tatooine' ? 'https://static.wikia.nocookie.net/esstarwars/images/b/b0/Tatooine_TPM.png/revision/latest?cb=20131214162357'
                         : planeta.name === 'Alderaan' ? 'https://starwars-visualguide.com/assets/img/planets/2.jpg'
                             : planeta.name === 'Yavin IV' ? 'https://starwars-visualguide.com/assets/img/planets/3.jpg'
                                 : planeta.name === 'Hoth' ? 'https://starwars-visualguide.com/assets/img/planets/4.jpg'
                                     : planeta.name === 'Dagobah' ? 'https://starwars-visualguide.com/assets/img/planets/5.jpg'
                                         : planeta.name === 'Bespin' ? 'https://starwars-visualguide.com/assets/img/planets/6.jpg'
                                             : planeta.name === 'Endor' ? 'https://starwars-visualguide.com/assets/img/planets/7.jpg'
                                                 : planeta.name === 'Naboo' ? 'https://starwars-visualguide.com/assets/img/planets/8.jpg'
                                                     : planeta.name === 'Coruscant' ? 'https://starwars-visualguide.com/assets/img/planets/9.jpg'
                                                         : planeta.name === 'Kamino' ? 'https://starwars-visualguide.com/assets/img/planets/10.jpg'
                                                             : ''
                    } />
                </div>
                <div className="fs-4">
                    <p><strong>Clima:</strong> {planeta.climate}</p>
                    <p><strong>Diámetro:</strong> {planeta.diameter} km</p>
                    <p><strong>Gravedad:</strong> {planeta.gravity}</p>
                    <p><strong>Población:</strong> {planeta.population}</p>
                    <p><strong>Terreno:</strong> {planeta.terrain}</p>
                    <p><strong>Superficie del agua:</strong> {planeta.surface_water} km</p>
                    <p><strong>Descripción:</strong> {store.singlePlanet.result.description}</p>
                </div>
            </div>
        </div>
    );
}
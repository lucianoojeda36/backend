import React from 'react';
import Filtros from '../components/filtros/Filtros';
import CardPage from './CardPage';



export default function DashBoard () {
    return (
        <div>
            
            <div>
                <Filtros/>

            </div>
            <div>
                <CardPage/>
            </div>

        </div>
    )
}
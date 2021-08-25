import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CardRestaurant from "../components/cards/CardRestaurant";
import Filtros from '../components/filtros/Filtros';
import { findRestaurant } from '../store/restaurantRegistration/Registration.action';
import './CardPage.scss'


export default function CardPage() {


    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(findRestaurant())
    }, [])

    const data = useSelector(state => state.restaurantReducer.restaurants)

    return (
        <div>
            <div className="containerPage">
                {data && data.length > 0 ? data.map(e => <CardRestaurant props={e} />) : "no hay restaurantes"}
            </div>

        </div>
    )
}
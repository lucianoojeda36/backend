import { Button } from '@material-ui/core';
import { TextField } from '@material-ui/core';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { findRestaurantForCity, findRestaurantForName } from '../../store/restaurantRegistration/Registration.action';


export default function Filtros() {
    
    const dispatch = useDispatch()

    const [data, setData] = useState({
        name:'',
        city:''
    })


    const handleInputChange = (event) => {

        setData({
            ...data,
            [event.target.name] : event.target.value
        })
        
    }
    function handleSearchName () {
        dispatch(findRestaurantForName(data.name))
    }

    function handleSearchCity () {
        dispatch(findRestaurantForCity(data.city))
    }

    return (
        <div>
            <div>
                <TextField
                    id="outlined-helperText"
                    name="name"
                    label="Filter Restaurant Name"
                    helperText="Filter Restaurant"
                    variant="outlined"
                    value={data.name}
                    onChange={handleInputChange}
                />
                <Button
                    variant="contained"
                    color="primary"
                    type="submit"
                    onClick={handleSearchName}
                >
                    Filtrar
                </Button>


            </div>
            <div>
                <TextField
                    id="outlined-helperText"
                    name="city"
                    label="Filter Restaurant City"
                    helperText="Filter Restaurant City"
                    variant="outlined"
                    value={data.city}
                    onChange={handleInputChange}
                />
                <Button
                    variant="contained"
                    color="primary"
                    type="submit"
                    onClick={handleSearchCity}
                >
                    Filtrar
                </Button>


            </div>
        </div>
    )
}
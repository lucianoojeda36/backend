import React, { useEffect, useLayoutEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';
import { useDispatch, useSelector } from 'react-redux';
import { confirmReserve, deleteRegister, editRegister, findRestaurant, findRestaurantForName } from '../../store/restaurantRegistration/Registration.action';
import { TextField } from '@material-ui/core';
import { FormControlLabel } from '@material-ui/core';
import { Checkbox } from '@material-ui/core';
import { FormGroup } from '@material-ui/core';
import CardReserve from '../CardReserve/CardReserve';
// import { Grid } from '@material-ui/core';



// import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
// import TextField from '@material-ui/core/TextField';

// const useStyles = makeStyles((theme) => ({
//   container: {
//     display: 'flex',
//     flexWrap: 'wrap',
//   },
//   textField: {
//     marginLeft: theme.spacing(1),
//     marginRight: theme.spacing(1),
//     width: 200,
//   },
// }));

// export default function DateAndTimePickers() {
//   const classes = useStyles();

//   return (
//     <form className={classes.container} noValidate>
//       <TextField
//         id="datetime-local"
//         label="Next appointment"
//         type="datetime-local"
//         defaultValue="2017-05-24T10:30"
//         className={classes.textField}
//         InputLabelProps={{
//           shrink: true,
//         }}
//       />
//     </form>
//   );
// }



const useStyles = makeStyles((theme) => ({
    button: {
        display: 'block',
        marginTop: theme.spacing(2),
    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
}));

export default function Reserve() {
    const classes = useStyles();
    const [restaurantEdit, setRestaurantEdit] = React.useState('none');
    const [open, setOpen] = React.useState(false);

    const [datos, setDatos] = React.useState({
        reserve: {
            client: '',
            date: '',
        }
    })

    const [check, setChecked] = React.useState({
        table: false,
        cancellation: false
    })


    console.log("datos", datos)

    const dispatch = useDispatch()

    useLayoutEffect(() => {
        dispatch(findRestaurant())
    }, [])


    let data = useSelector(state => state.restaurantReducer.restaurants ? state.restaurantReducer.restaurants : 0)




    const filterData = data ? data.filter(e => { return e.name == `${restaurantEdit}` })[0] : "no existe"





    const handleChange = (event) => {
        setRestaurantEdit(event.target.value);

    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleOpen = () => {
        setOpen(true);
    };

    const handleInputChange = (event) => {

        setDatos({
            ...datos,
            reserve: {
                ...datos.reserve,
                [event.target.name]: event.target.value

            }

        })

    }

    const handlecheck = (event) => {
        setChecked({
            ...check,
            [event.target.name]: event.target.checked
        })

    }


    function handelSubmit(e) {
        e.preventDefault()
        let { client, date } = datos.reserve
        let { table, cancellation } = check
        let _id = filterData._id
        dispatch(confirmReserve({ client, date, table, cancellation, _id }))
        alert("se a realizado una reservacion ")


    }


    return (
        <div>
            <div>
                <Button className={classes.button} onClick={handleOpen}>
                    Open the select
                </Button>
                <FormControl className={classes.formControl}>
                    <InputLabel id="demo-controlled-open-select-label">Restaurant Name</InputLabel>
                    <Select
                        labelId="demo-controlled-open-select-label"
                        id="demo-controlled-open-select"
                        open={open}
                        onClose={handleClose}
                        onOpen={handleOpen}
                        value={restaurantEdit}
                        onChange={handleChange}
                    >
                        <MenuItem value="">
                            <em>None</em>
                        </MenuItem>
                        {data.map(e => <MenuItem key={e._id} value={e.name}>{e.name}</MenuItem>)}
                    </Select>
                </FormControl>
                <form onSubmit={handelSubmit}>
                    <FormControlLabel
                        control={
                            <Checkbox
                                checked={check.table}
                                onChange={handlecheck}
                                name="table"
                                color="primary"
                            />
                        }
                        label="Check Table"
                    />
                    <TextField
                        id="outlined-helperText"
                        name="client"
                        label="client"
                        helperText="property"
                        variant="outlined"
                        value={datos.reserve.client}
                        onChange={handleInputChange}
                    />
                    <TextField
                        id="datetime-local"
                        label="Next appointment"
                        name="date"
                        type="datetime-local"
                        defaultValue="2017-05-24T10:30"
                        value={datos.reserve.date}
                        onChange={handleInputChange}
                        className={classes.textField}
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />

                    <FormControlLabel
                        control={
                            <Checkbox
                                checked={check.cancellation}
                                onChange={handlecheck}
                                name="cancellation"
                                color="primary"
                            />
                        }
                        label="cancellation"
                    />
                    <Button
                        variant="contained"
                        color="primary"
                        type="submit"
                    >
                        Submit
                    </Button>

                </form>

            </div>
            <div>
                
                {data && data.length >0 ? data.map((e)=><CardReserve props={e} />) : "no existe"}
                
            </div>
        </div>
    );
}

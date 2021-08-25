import React, { useEffect, useLayoutEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';
import { useDispatch, useSelector } from 'react-redux';
import { deleteRegister, editRegister, findRestaurant, findRestaurantForName } from '../store/restaurantRegistration/Registration.action';
import { TextField } from '@material-ui/core';
// import { Grid } from '@material-ui/core';
import UploadImage from '../firebase/UploadImage';

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

export default function EditForm () {
    const classes = useStyles();
    const [restaurantEdit, setRestaurantEdit] = React.useState('none');
    const [open, setOpen] = React.useState(false);
    
  const [datos, setDatos]= React.useState({
    name:'',
    description:'',
    image:'',
    city:'',
    address:'',

})

    const dispatch = useDispatch()

    useLayoutEffect(() => {
        dispatch(findRestaurant())
    }, [])


    let data = useSelector(state => state.restaurantReducer.restaurants ? state.restaurantReducer.restaurants : 0)

        
   
   
    const filterData =data ? data.filter(e => { return e.name ==`${restaurantEdit}`})[0] : "no existe"
    let image = useSelector(state => state.restaurantReducer.restaurantImg)

    


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
            [event.target.name] : event.target.value
        })
        
    }

    const handleDelete = ()=>{
        const data2 = filterData._id
        dispatch(deleteRegister(data2))
        dispatch(findRestaurant())
        alert('elemento eliminado')
        setRestaurantEdit('none')
        
    }

    function handelSubmit(e){
        e.preventDefault()
        let {name,description,city,address}= datos
        let _id = filterData._id
        alert( `se ha modificado exitosamente ${_id}`)
        dispatch(editRegister({_id,name,city,description,address,image}))
        
        
        
  
    }


    return (
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
                    { data.map(e => <MenuItem key={e._id} value={e.name}>{e.name}</MenuItem>) }
                </Select>
            </FormControl>
            <form onSubmit={handelSubmit}>
                <TextField
          id="outlined-helperText"
          name="name"
          label="name"
          helperText="Edit property"
          variant="outlined"
          value={data.name}
          onChange={handleInputChange}
        />
             <TextField
          id="outlined-helperText"
          name="description"
          label="description"
          helperText="Edit property"
          variant="outlined"
          value={data.description}
          onChange={handleInputChange}
        />
             <TextField
          id="outlined-helperText"
          name="city"
          label="city"
          helperText="Edit property"
          variant="outlined"
          value={data.city}
          onChange={handleInputChange}
        />
             <TextField
          id="outlined-helperText"
          name="address"
          label="address"
          helperText="Edit property"
          variant="outlined"
          value={data.address}
          onChange={handleInputChange}
        />
        <UploadImage/>
        <Button
                    variant="contained"
                    color="primary"
                    type="submit"
                  >
                    Submit
                  </Button>
               
            </form>

            <Button
                    variant="contained"
                    color="primary"
                    onClick={handleDelete}
                  >
                    Borarr
                  </Button>
        </div>
    );
}

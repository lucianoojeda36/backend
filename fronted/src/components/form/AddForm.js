import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import UploadImage from '../../firebase/UploadImage';
import { useDispatch,useSelector } from 'react-redux';
import { Button } from '@material-ui/core';
import { register } from '../../store/restaurantRegistration/Registration.action';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

export default function AddForm () {
  const classes = useStyles();

  


  const [datos, setDatos]= useState({
      name:'',
      description:'',
      image:'',
      city:'',
      address:'',

  })

  let image = useSelector(state => state.restaurantReducer.restaurantImg)
    

  const dispatch = useDispatch()

  const handleInputChange = (event) => {

    setDatos({
        ...datos,
        [event.target.name] : event.target.value
    })
    
}

 function handelSubmit(e){
      e.preventDefault()
      let {name,description,city,address}=datos

      dispatch(register({name,city,description,address,image}))
      alert('se a guardado ')

  }


  return (
    <form className={classes.root} noValidate autoComplete="off" onSubmit={handelSubmit}>
      <TextField id="standard-basic" name="name" label="name" value={datos.name} variant="outlined" onChange={handleInputChange}/>
      <TextField id="filled-basic" name="description" label="description" value={datos.description} variant="outlined" onChange={handleInputChange} />
      <TextField id="outlined-basic" name="city" label="city" variant="outlined" value={datos.city} onChange={handleInputChange}/>
      <TextField id="outlined-basic" name="address" label="address" variant="outlined" value={datos.address} onChange={handleInputChange}/>
      <UploadImage/>
      <Button
                    variant="contained"
                    color="primary"
                    type="submit"
                  >
                    Submit
                  </Button>
    </form>
  );
}
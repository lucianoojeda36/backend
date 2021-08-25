import axios from "axios";
export const GET_RESTAURANTS = "GET_ALL_ORDERS";
export const SET_PRODUCT_IMG = "SET_PRODUCT_IMG";
export const POST_RESTAURANTS = "POST_RESTAURANTS";
export const PUT_RESTAURANTS = "PUT_RESTAURANTS";
export const GET_RESTAURANTS_FOR_NAME = "GET_RESTAURANTS_FOR_NAME";
export const DELETE_RESTAURANTS = "DELETE_RESTAURANTS";
export const GET_RESTAURANTS_FOR_CITY = "GET_RESTAURANTS_FOR_CITY";
export const POST_RESERVE = "POST_RESERVE";





export const findRestaurant = () => {
  return (dispatch) => {
    axios.get(`http://localhost:3001/bookings-data`).then((res) => { 
      dispatch({ type: GET_RESTAURANTS , payload: res.data })
    })
    .catch((err)=>console.log(err))
  };
};



export const findRestaurantForName = (name) => {
  return (dispatch) => {
    axios.get(`http://localhost:3001/bookings-data-name/${name}`).then((res) => {
      dispatch({ type: GET_RESTAURANTS_FOR_NAME , payload: res.data })
    });
  };
};

export const findRestaurantForCity = (city) => {
  console.log("fronted",city)
  return (dispatch) => {
    axios.get(`http://localhost:3001/bookings-data-city/${city}`).then((res) => {
      dispatch({ type: GET_RESTAURANTS_FOR_CITY , payload: res.data })
    });
  };
};


export const register = (data) => {
  return (dispatch) => {
    axios.post(`http://localhost:3001/bookings`,data).then((res) => {
      dispatch({ type: POST_RESTAURANTS , payload: res.data })
    });
  };
};

export const editRegister = (data) => {
  // console.log("esto es data barbie",data)
  return (dispatch) => {
    axios.put(`http://localhost:3001/bookings-data-edit`,data).then((res) => { 
      dispatch({ type: PUT_RESTAURANTS , payload: res.data })
      dispatch(findRestaurant())
    });
  };
};

export const confirmReserve = ({ client, date, table, cancellation, _id }) => {
  return (dispatch) => {
    axios.post(`http://localhost:3001/bookings-reserve`,{ client, date, table, cancellation, _id}).then((res) => { 
      dispatch({ type: POST_RESERVE , payload: res.data })
      dispatch(findRestaurant())
    });
  };
};


export const deleteRegister = (data) => {
  console.log("esto es data barbie",data)
  return (dispatch) => {
    axios.delete(`http://localhost:3001/bookings-data-delete`,{ data: { data }, headers: { "Authorization": "***" }}).then((res) => {
      dispatch({ type: DELETE_RESTAURANTS , payload: res.data })
      
    });
  };
};



export const setImgUrl = (imgUrl) => {
  console.log("=========>",imgUrl)
  return {
    type: SET_PRODUCT_IMG,
    payload: imgUrl,
  };
};

import {
  GET_RESTAURANTS, SET_PRODUCT_IMG, POST_RESTAURANTS, PUT_RESTAURANTS, GET_RESTAURANTS_FOR_NAME, DELETE_RESTAURANTS, GET_RESTAURANTS_FOR_CITY, POST_RESERVE
} from "./Registration.action";

var initialState = {
  restaurants: [],
  restaurant: [],
  dataReserve:[],
  mesagges:'',
  restaurantImg: "no tiene",
};

const restaurantReducer = (state = initialState, action) => {
  switch (action.type) {

    case GET_RESTAURANTS:
      return {
        ...state,
        restaurants: action.payload,
      };
    case SET_PRODUCT_IMG:
      return {
        ...state,
        restaurantImg: action.payload,
      };
    case POST_RESTAURANTS:
      return {
        ...state,
        restaurants: action.payload,
      };
    case PUT_RESTAURANTS:
      return {
        ...state,
        mesagges: action.payload,
      };
    case GET_RESTAURANTS_FOR_NAME:
      return {
        ...state,
        restaurants: action.payload,
      };
      case GET_RESTAURANTS_FOR_CITY:
        return {
          ...state,
          restaurants: action.payload,
        };
      case  DELETE_RESTAURANTS:
        return {
          ...state,
          mesagges: action.payload,
        };
        case  POST_RESERVE:
        return {
          ...state,
          dataReserve: action.payload,
        };

    default:
      return state;
  }
};

export default restaurantReducer;

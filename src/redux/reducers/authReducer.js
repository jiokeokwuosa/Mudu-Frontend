import {
  INPUT_CHANGE,
  REGISTER_SUCCESS,
  REGISTER_FAILURE,
  CLEAR_FORM,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  AUTH_SUCCESS 
 } from "../actions/types";

import {storeData} from './../../../assets/js/storage';

const initialState = {
  isAuthenticated: false,
  user:{},
  isLoading:false
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case INPUT_CHANGE:
      return {
        ...state,
        [action.payload.name]: action.payload.value,
      };
      case REGISTER_SUCCESS:  
      case AUTH_SUCCESS:  
      case LOGIN_SUCCESS: 
          storeData('token', action.payload.token)    
          storeData('isAuthenticated', 'true')
          return{
            ...state, 
            user: action.payload, 
            token: action.payload.token,
            isAuthenticated:true                                             
        }
    default:
      return state;
  }
};
export default authReducer;

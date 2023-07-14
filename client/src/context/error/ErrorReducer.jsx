import { trusted } from "mongoose";
import { ERROR, LOGIN_ERROR, LOGIN_SUCCESS, LOGIN_USER, REGISTER_USER, SUCCESS } from "../actions";

export function errorReducer(state, action) {
  if (action.type === "SHOW_ERROR") {
    return {
      ...state,
      showError: true,
      errorType: "danger",
      errorMessage: "Please enter all required fields!!",
    };
  }
  if (action.type === "CLEAR_ERROR") {
    return {
      ...state,
      showError: false,
      errorType: "",
      errorMessage: "",
    };
  }

  if(action.type === REGISTER_USER){
    return {
      ...state,
      isLoading:true
    }
  }

  if(action.type === SUCCESS){
    return{
      ...state,
      user: action.payload.user,
      token: action.payload.token,
      isLoading:false,
      errorType:'success',
      showError: true,
      errorMessage:'user created successfully, redirecting...'
    }
  }

  if(action.type === ERROR){
    return{
      ...state,
      isLoading:false,
      showError:true,
      errorType:'danger',
      errorMessage: action.payload.message
    }
  }

  if(action.type === LOGIN_USER){
    return{
      ...state,
      isLoading:true,
    }
  }

  if(action.type === LOGIN_SUCCESS){
    return{
      ...state,
      user: action.payload.user,
      token: action.payload.token,
      isLoading:false,
      errorMessage: 'login successful, redirecting to dashboard...',
      errorType: 'success',
      showError: true
    }
  }

  if(action.type === LOGIN_ERROR){
    return {
      ...state,
      showError:true,
      errorType: 'danger',
      errorMessage: action.payload.message,
      isLoading: false
    }
  }
  return state;
}

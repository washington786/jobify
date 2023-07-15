import React, { createContext, useContext, useReducer } from "react";
import { errorReducer } from "./ErrorReducer";
import {
  ERROR,
  LOGIN_ERROR,
  LOGIN_SUCCESS,
  LOGIN_USER,
  LOGOUT_USER,
  REGISTER_USER,
  SUCCESS,
} from "../actions";
import axios from "axios";

const errorContext = createContext();

const user = localStorage.getItem("user");
const token = localStorage.getItem("token");

const initial = {
  isLoading: false,
  showError: false,
  errorType: "",
  errorMessage: "",
  user: user ? JSON.parse(user) : null,
  token: token || null,
};

// persist user into local storage
function addUserToLocalStorage({ user, token }) {
  localStorage.setItem("user", JSON.stringify(user));
  localStorage.setItem("token", token);
}
//remove out of local storage
function removeUserInLocalStorage() {
  localStorage.removeItem("user");
  localStorage.removeItem("token");
}

const ErrorProvider = ({ children }) => {
  const [state, dispatch] = useReducer(errorReducer, initial);

  function displayError() {
    dispatch({ type: "SHOW_ERROR" });
  }

  function clearError() {
    dispatch({ type: "CLEAR_ERROR" });
  }

  async function registerUser(currentUser) {
    dispatch({ type: REGISTER_USER });

    try {
      const response = await axios.post(
        "http://localhost:9090/auth/register",
        currentUser
      );

      console.log(response);
      const { user, token } = response.data;

      addUserToLocalStorage({ user, token });

      dispatch({
        type: SUCCESS,
        payload: {
          user,
          token,
        },
      });
    } catch (error) {
      console.log(error.response);
      dispatch({
        type: ERROR,
        payload: {
          message: error.response.data.message,
        },
      });
      setTimeout(() => {
        clearError();
      }, 5000);
    }
  }

  async function loginUser(currentUser) {
    dispatch({ type: LOGIN_USER });
    try {
      const response = await axios.post(
        "http://localhost:9090/auth/login",
        currentUser
      );
      const { token, message, user } = response.data;

      dispatch({ type: LOGIN_SUCCESS, payload: { token, message, user } });

      addUserToLocalStorage({ user, token });
    } catch (error) {
      dispatch({
        type: LOGIN_ERROR,
        payload: {
          message: error.response.data.message,
        },
      });
      setTimeout(() => {
        clearError();
      }, 5000);
    }
  }

  function logoutUser() {
    dispatch({ type: LOGOUT_USER });
    removeUserInLocalStorage();
  }

  const values = {
    state,
    displayError,
    clearError,
    registerUser,
    loginUser,
    logoutUser,
  };
  return (
    <errorContext.Provider value={values}>{children}</errorContext.Provider>
  );
};

export const useErrorContext = () => {
  return useContext(errorContext);
};

export { ErrorProvider };

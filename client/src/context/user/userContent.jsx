import axios from "axios";
import { log } from "console";
import { createContext, useReducer } from "react";

const userContext = createContext();

const initialState = {
  user: null,
  token: null,
};

const Context = ({ children }) => {
  const [state, setState] = useReducer(initialState);

  // first
  axios.defaults.headers.common["Authorization"] = "Bearer " + state.token;

  // second
  const setAxiosGlobals = axios.create({
    baseURL: "/api/v1",
    headers: {
      Authorization: `Bearer ${state.token}`,
    },
  });

  const updateUser = async (currentUser) => {
    try {
      const { data } = await setAxiosGlobals.patch("", currentUser);
      console.log(data);
    } catch (error) {
      console.log(error.message);
    }
  };

  const values = { state,updateUser };

  return <userContext.Provider value={values}>{children}</userContext.Provider>;
};

export default Context;

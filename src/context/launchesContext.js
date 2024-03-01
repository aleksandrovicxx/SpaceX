import { createContext, useReducer } from "react";
// import {initialState}  from "../reducer/launchesReducer"
import launchesReducer from '../reducer/launchesReducer'
// import { initialState } from "../reducer/launchesReducer";

const initialState = {
    launches: [],
    loading: false,
    error: null,
  };

export const LaunchesContext = createContext()

const LaunchesContextProvider = ({children}) => {

    const [state, dispatch] = useReducer(launchesReducer, initialState)

    return (
    <LaunchesContext.Provider value={{state, dispatch}}>
        {children}
    </LaunchesContext.Provider>
    )
    }
export default LaunchesContextProvider;
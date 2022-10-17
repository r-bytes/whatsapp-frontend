import { createContext, useContext, useReducer } from "react";

export const Context = createContext()

export const ReduceProvider = ({ reducer, initialState, children }) => {
    return (
        <Context.Provider value={
            useReducer(reducer, initialState)
        }>
            {children}
        </Context.Provider>
    )
}

export const useReduceContext = () => useContext(Context)
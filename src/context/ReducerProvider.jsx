import { createContext, useContext, useReducer } from "react";

export const Context = createContext()

export const ReducerProvider = ({ reducer, initialState, children }) => {
    return (
        <Context.Provider value={
            useReducer(reducer, initialState)
        }>
            {children}
        </Context.Provider>
    )
}

export const useReducerContext = () => useContext(Context)
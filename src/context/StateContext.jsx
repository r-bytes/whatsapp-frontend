import { createContext, useContext, useState } from "react";

const Context = createContext()

export const StateContext = ({ children }) => {
    const [messages, setMessages] = useState([])
    const [groups, setGroups] = useState([]);
    
    return (
        <Context.Provider value={{
            messages,
            setMessages,
            groups,
            setGroups
        }}>
            {children}
        </Context.Provider>
    )
}

export const useStateContext = () => useContext(Context)
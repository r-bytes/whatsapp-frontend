import { createContext, useContext, useEffect, useState } from "react";
import Pusher from "pusher-js"
import axios from "../axios.js"

const Context = createContext()

export const StateContext = ({children}) => {
    const [messages, setMessages] = useState([])
    
    useEffect(() => {
        axios.get("/api/v1/messages/sync")
            .then( response => {
                setMessages(response.data)
        })

    }, []);

    
    useEffect(() => {
        const pusher = new Pusher('2dc9c34e35fd049b26e7', {
            cluster: 'eu'
        });
        
        const channel = pusher.subscribe('messages');
        channel.bind('inserted', (newMessage) => {
            setMessages([...messages, newMessage])
        });
        
        return () => {
            channel.unbind()
            channel.unsubscribe()
        }
    }, [messages]);

    return (
        <Context.Provider value={{
            messages,
            setMessages
        }}>
            {children}
        </Context.Provider>
    )
}

export const useStateContext = () => useContext(Context)
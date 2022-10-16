import { createContext, useContext, useEffect, useReducer, useState } from "react";
import Pusher from "pusher-js"
import axios from "../axios.js"

const Context = createContext()

export const StateProvider = ({ reducer, initialState, children }) => {
    const [messages, setMessages] = useState([])
    const [groups, setGroups] = useState([]);
    const [user, setUser] = useState({
        user: null
    })
    
    useEffect(() => {
        axios.get("/api/v1/messages/sync")
          .then( response => {
            setMessages(response.data)
        })
    }, []);

    useEffect(() => {
        axios.get("/api/v1/groups/sync")
          .then(response => {
            setGroups(response.data)
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

    useEffect(() => {
        const pusher = new Pusher('2dc9c34e35fd049b26e7', {
            cluster: 'eu'
        });
        
        const channel = pusher.subscribe('messages');
        channel.bind('inserted', (newGroup) => {
            setGroups([...groups, newGroup])
        });
        
        return () => {
            channel.unbind()
            channel.unsubscribe()
        }
    }, [groups]);

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
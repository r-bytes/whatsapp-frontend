import { createContext, useContext, useEffect, useState } from "react";
import Pusher from "pusher-js"
import axios from "../axios.js"

const Context = createContext()

export const PusherProvider = ({ children }) => {
    const [messages, setMessages] = useState([])
    const [groups, setGroups] = useState([]);
    
    // get all messages
    useEffect(() => {
        axios.get("/api/v1/messages/sync")
          .then( response => {
            setMessages(response.data)
        })
    }, []);

    // get all groups
    useEffect(() => {
        axios.get("/api/v1/groups/sync")
          .then(response => {
            setGroups(response.data)
        })
    }, []);
    
    // trigger pusher for messages
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
    
    // trigger pusher for groups
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

export const usePusherContext = () => useContext(Context)
import { useEffect, useState } from "react";
import Chat from "./components/Chat";
import Sidebar from "./components/Sidebar";
import { Wrapper, AppContainer } from "./styles/AppStyles"
import Pusher from "pusher-js"
import axios from "./axios.js"


function App() {
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
    
    console.log(messages)
    
    
    return (
        <Wrapper>
            <AppContainer>
                <Sidebar />
                <Chat messages={messages} />
            </AppContainer>
        </Wrapper>
    );
}

export default App;
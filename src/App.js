import { useEffect } from "react";
import Chat from "./components/Chat";
import Sidebar from "./components/Sidebar";
import { Wrapper, AppContainer } from "./styles/AppStyles"
import Pusher from "pusher-js"


function App() {

    useEffect(() => {
        const pusher = new Pusher('2dc9c34e35fd049b26e7', {
            cluster: 'eu'
          });
      
          const channel = pusher.subscribe('messages');
          channel.bind('inserted', (data) => {
            alert(JSON.stringify(data));
          });
    }, []);
    return (
        <Wrapper>
            <AppContainer>
                <Sidebar />
                <Chat />
            </AppContainer>
        </Wrapper>
    );
}

export default App;
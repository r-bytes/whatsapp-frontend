// import { useEffect, useState } from "react";
import Chat from "./components/Chat";
import Sidebar from "./components/Sidebar";
import { Wrapper, AppContainer } from "./styles/AppStyles"
import { useStateContext } from "./context/StateContext"


function App() {
    const { messages } = useStateContext()

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
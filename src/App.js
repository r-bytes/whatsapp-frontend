// import { useEffect, useState } from "react";
import Chat from "./components/Chat";
import Sidebar from "./components/Sidebar";
import { Wrapper, AppContainer } from "./styles/AppStyles"
import { useStateContext } from "./context/StateContext"
import { Routes, Route } from "react-router-dom"


function App() {
    const { messages } = useStateContext()

    return (
        <Wrapper>
            <AppContainer>
                <Sidebar />
                <Routes>
                    <Route
                        path="/"
                        element={
                            <Chat messages={messages} />
                        }
                    />
                    <Route
                        path="/groups/:groupId"
                        element={
                            <Chat messages={messages} />
                        }
                    />
                </Routes>
                
                {/* <Chat  /> */}
            </AppContainer>
        </Wrapper>
    );
}

export default App;
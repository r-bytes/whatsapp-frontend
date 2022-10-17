// import { useEffect, useState } from "react";
import { Chat, Sidebar, Login } from "./components";
import { Wrapper, AppContainer } from "./styles/AppStyles"
import { Routes, Route } from "react-router-dom"
import { useState } from "react";
import { usePusherContext } from "./context/PusherProvider"
import { AuthContextProvider } from "./context/AuthContext"
import { BrowserRouter as Router } from "react-router-dom"

function App() {
    const { messages } = usePusherContext()
    const [user, setUser] = useState("false");

    return (
        <Wrapper>
            <AuthContextProvider>
                {!user ? (
                    <Login />
                ) : (
                    <AppContainer>
                        <Router>
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
                        </Router>
                    </AppContainer>
                )}
            </AuthContextProvider>
        </Wrapper>
    );
}

export default App;
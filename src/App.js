// import { useEffect, useState } from "react";
import { Chat, Sidebar, Login } from "./components";
import { Wrapper, AppContainer } from "./styles/AppStyles"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { usePusherContext } from "./context/PusherProvider"
import { AuthContextProvider } from "./context/AuthContext"
import { useReducerContext } from "./context/ReducerProvider"

function App() {
    const { messages } = usePusherContext()
    const [{user}, dispatch] = useReducerContext()

    return (
        <Wrapper>
            <AuthContextProvider>
                {user ? (
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
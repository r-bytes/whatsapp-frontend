import Chat from "./components/Chat";
import Sidebar from "./components/Sidebar";
import { Wrapper, AppContainer } from "./styles/AppStyles"


function App() {
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
import Chat from "./components/Chat";
import Sidebar from "./components/Sidebar";
import styled from "styled-components";

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

const Wrapper = styled.div`
    display: grid;
    place-items: center;
    height: 100vh;
    background-color: #dadbd3;
`
const AppContainer = styled.div`
    display: flex;
    background-color: #ededed;
    margin-top: -50px;
    height: 90vh;
    width: 90vw;
    box-shadow: -1px 4px 20px -6px rgba(0, 0, 0, .75);
`

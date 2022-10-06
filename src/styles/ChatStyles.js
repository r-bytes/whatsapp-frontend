import styled from "styled-components"

export const ChatContainer = styled.div`
    display: flex;
    flex-direction: column;
    flex: .65;
`
export const ChatHeader = styled.div`
    display: flex;
    align-items: center;
    padding: 16.5px;
    border-bottom: 1px solid lightgray;
`
export const ChatHeaderInfo = styled.div`
    flex: 1;
    padding-left: 20px;

    & p {
        font-size: 12px;
        margin-left: 3px;
        color: gray;
        padding-bottom: 0;
    }

    & h3 {
        font-weight: 500;
        margin-bottom: 3px;
    }
`
export const ChatHeaderRight = styled.div`

`
export const ChatBody = styled.div`
    flex: 1;
    background-image: url("https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png");
    background-repeat: repeat;
    background-position: center;
    padding: 30px;
    overflow: scroll;
`
export const ChatMessage = styled.p`
    position: relative;
    font-size: 16px;
    padding: 10px;
    width: fit-content;
    border-radius: 10px;
    background-color: #ffffff;
    margin-bottom: 30px;
`
export const ChatName = styled.span`
    position: absolute;
    top: -15px;
    font-weight: 800;
    font-size: xx-small;
`

export const ChatTimestamp = styled.span`
    margin-left: 10px;
    font-size: xx-small;
`

export const ChatReceiver = styled(ChatMessage)`
    margin-left: auto;
    background-color: #dcf8c6;
`

export const ChatFooter = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 62px;
    border-top: 1px solid lightgray;

    & .MuiSvgIcon-root {
        padding: 10px;
        color: gray;
    }

`
export const MessageForm = styled.form`
    flex: 1;
    display: flex;
    outline-width: 0;

    & input {
        flex: 1;
        border-radius: 30px;
        padding: 10px;
        border: none;
        outline: none;
    }

    & button {
        display: none;
    }
`
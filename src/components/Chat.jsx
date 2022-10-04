import { Avatar, IconButton } from "@material-ui/core"
import React from 'react'
import styled from "styled-components"
import { AttachFile, MoreVert, Search } from "@material-ui/icons"

const Chat = () => {
    return (
        <ChatContainer>
            <ChatHeader>
                <Avatar src="/images/jedi.png" />
                <ChatHeaderInfo>
                    <h3> Group name </h3>
                    <p> Last seen at... </p>
                </ChatHeaderInfo>
                <ChatHeaderRight>
                    <IconButton>
                        <AttachFile />
                    </IconButton>
                    <IconButton>
                        <MoreVert />
                    </IconButton>
                    <IconButton>
                        <Search />
                    </IconButton>
                </ChatHeaderRight>
            </ChatHeader>

            <ChatBody>
                <ChatMessage>
                        <ChatName> Ray </ChatName>
                        This is a message
                    
                    <ChatTimestamp>
                        {new Date().toUTCString()}
                    </ChatTimestamp>
                </ChatMessage>
                <ChatReceiver>
                        <ChatName> Elon </ChatName>
                        This is a message
                    
                    <ChatTimestamp>
                        {new Date().toUTCString()}
                    </ChatTimestamp>
                </ChatReceiver>
            </ChatBody>
        </ChatContainer>
    )
}

export default Chat

const ChatContainer = styled.div`
    display: flex;
    flex-direction: column;
    flex: .65;
`
const ChatHeader = styled.div`
    display: flex;
    align-items: center;
    padding: 16.5px;
    border-bottom: 1px solid lightgray;
`
const ChatHeaderInfo = styled.div`
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
const ChatHeaderRight = styled.div`

`
const ChatBody = styled.div`
    flex: 1;
    background-image: url("https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png");
    background-repeat: repeat;
    background-position: center;
    padding: 30px;
    overflow: scroll;
`
const ChatMessage = styled.p`
    position: relative;
    font-size: 16px;
    padding: 10px;
    width: fit-content;
    border-radius: 10px;
    background-color: #ffffff;
    margin-bottom: 30px;
`
const ChatName = styled.span`
    position: absolute;
    top: -15px;
    font-weight: 800;
    font-size: xx-small;
`

const ChatTimestamp = styled.span`
    margin-left: 10px;
    font-size: xx-small;
`

const ChatReceiver = styled(ChatMessage)`
    margin-left: auto;
    background-color: #dcf8c6;
`
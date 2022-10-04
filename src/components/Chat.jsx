import React, { useState } from 'react'
import { Avatar, IconButton } from "@material-ui/core"
import { AttachFile, InsertEmoticon, MicOutlined, MoreVert, Search } from "@material-ui/icons"
import { ChatContainer, ChatHeader, ChatHeaderInfo, ChatHeaderRight, ChatBody, ChatMessage, ChatName, ChatTimestamp, ChatReceiver, ChatFooter, MessageForm } from "../styles/ChatStyles"

const Chat = () => {
    const [input, setInput] = useState([]);
    
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

            <ChatFooter>
                <InsertEmoticon />
                <MessageForm>
                    <input
                        type="text"
                        value={input}
                        placeholder={"Type a message"}
                        onChange={(e) => setInput(e.target.value)}
                    />
                    <button
                        type="submit"
                        // onClick={"sendMessage"}
                    >
                        Send Message
                    </button>
                </MessageForm>
                <MicOutlined />
            </ChatFooter>
        </ChatContainer>
    )
}

export default Chat
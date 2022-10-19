import React, { useEffect, useState } from 'react'
import { Avatar, IconButton } from "@material-ui/core"
import { AttachFile, InsertEmoticon, MicOutlined, MoreVert, Search } from "@material-ui/icons"
import { ChatContainer, ChatHeader, ChatHeaderInfo, ChatHeaderRight, ChatBody, ChatMessage, ChatName, ChatTimestamp, ChatReceiver, ChatFooter, MessageForm } from "../styles/ChatStyles"
import axios from "../axios.js"
import { useParams } from "react-router-dom"
import { doc, onSnapshot } from "firebase/firestore"
import { db } from "../firebase"

const Chat = ({messages}) => {
    const [input, setInput] = useState([]);
    const [groupName, setGroupName] = useState("");
    const [avatar, setAvatar] = useState("");
    const { groupId } = useParams()

    useEffect(() => {
        if (groupId) {
            const unsubscribe = onSnapshot(doc(db, "groups", groupId), snapshot => {
                // setGroupName(snapshot.data.name)
                setGroupName(snapshot?.data().name)
            })
            setAvatar(`https://avatars.dicebear.com/api/human/${groupId}.svg`)
    
            return () => {
                unsubscribe()
            }
        }
    }, [groupId]);

    const sendMessage = async (e) => {
        e.preventDefault()
        
        await axios.post("/api/v1/messages/new", {
            "message": input,
            "name": "Elon",
            "timestamp": "2022-10-06",
            "received": true
        })
        setInput("")
    }
    
    return (
        <ChatContainer>
            <ChatHeader>
                <Avatar src={avatar} />
                <ChatHeaderInfo>
                    <h3> {groupName} </h3>
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
                {messages.map((message, index) => (
                    message.received === false ? (
                        <ChatMessage key={index}>
                            <ChatName>
                                {message.name}
                            </ChatName>
                            {message.message}
                    
                            <ChatTimestamp>
                                {message.timestamp}
                            </ChatTimestamp>
                        </ChatMessage>
                    ) :
                    (
                        <ChatReceiver key={index}>
                            <ChatName>
                                {message.name}
                            </ChatName>
                            {message.message}
                        
                            <ChatTimestamp>
                                {message.timestamp}
                            </ChatTimestamp>
                        </ChatReceiver>
                    )
                )
            )}
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
                        onClick={sendMessage}
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
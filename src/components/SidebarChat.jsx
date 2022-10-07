import { Avatar } from "@material-ui/core"
import React, { useEffect, useState } from 'react'
import { SidebarChatContainer, SidebarChatInfo } from "../styles/SidebarChatStyles"

const SidebarChat = ({addNewChat}) => {
    const [seed, setSeed] = useState("");

    useEffect(() => {
        setSeed(Math.floor(Math.random() * 5000))
    }, []);

    const createChat = () => {
        const groupName = prompt("Please enter a name for the chat")

        if (groupName) {
            // do something
        }
    }

    return !addNewChat ? (
        <SidebarChatContainer>
            <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} />
            <SidebarChatInfo>
                <h2> Group name </h2>
                <p> This is the last message </p>
            </SidebarChatInfo>
        </SidebarChatContainer>
    ) : (
        <SidebarChatContainer onClick={createChat}>
            <h3> Add new chat </h3>
        </SidebarChatContainer>
    )
}

export default SidebarChat
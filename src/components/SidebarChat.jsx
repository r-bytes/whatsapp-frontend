import { Avatar } from "@material-ui/core"
import React from 'react'
import { SidebarChatContainer, SidebarChatInfo } from "../styles/SidebarChatStyles"

const SidebarChat = () => {
    return (
        <SidebarChatContainer>
            <Avatar src="/images/jedi.png" />
            <SidebarChatInfo>
                <h2> Group name </h2>
                <p> This is the last message </p>
            </SidebarChatInfo>
        </SidebarChatContainer>
    )
}

export default SidebarChat
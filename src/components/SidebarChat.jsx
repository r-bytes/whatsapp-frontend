import { Avatar } from "@material-ui/core"
import React from 'react'
import styled from "styled-components"

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

const SidebarChatContainer = styled.div`
    display: flex;
    padding: 20px;
    cursor: pointer;
    border-bottom: 1px solid #f6f6f6;

    &:hover {
        background-color: #ebebeb;
    }
`
const SidebarChatInfo = styled.div`
    margin-left: 14px;
    
    & h2 {
        font-size: 16px;
        margin-bottom: 8px;
    }

    & p {
        font-size: 12px;
    }
`
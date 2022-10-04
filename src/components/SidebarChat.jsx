import { Avatar } from "@material-ui/core"
import React from 'react'
import styled from "styled-components"

const SidebarChat = () => {
  return (
    <SidebarChatContainer>
        <Avatar src="/images/jedi.png" />
    </SidebarChatContainer>
  )
}

export default SidebarChat

const SidebarChatContainer = styled.div`
    
`
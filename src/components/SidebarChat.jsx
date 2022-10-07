import { Avatar } from "@material-ui/core"
import React, { useEffect, useState } from 'react'
import { SidebarChatContainer, SidebarChatInfo } from "../styles/SidebarChatStyles"
import { useStateContext } from "../context/StateContext"
import axios from "../axios.js"

const SidebarChat = ({addNewChat}) => {
    // const [seed, setSeed] = useState("")
    const { groups, setGroups } = useStateContext()

    const createChat = () => {
        const groupName = prompt("Please enter a name for the chat")

        if (groupName) {
            axios.post("/api/v1/group/new", {
                name: groupName
            })
              .then( response => {
                setGroups([...groups, {_id: response.data._id, name: response.data.name}])
            })
        }
    }

    return !addNewChat ? (
        groups.map(group => (
            <SidebarChatContainer key={group._id}>
                <Avatar src={`https://avatars.dicebear.com/api/human/${group.name}.svg`} />
                <SidebarChatInfo>
                    <h2> {group.name} </h2>
                    <p> This is the last message </p>
                </SidebarChatInfo>
            </SidebarChatContainer>
        ))
    ) : (
        <SidebarChatContainer onClick={createChat}>
            <h3> Add new chat </h3>
        </SidebarChatContainer>
    )
}

export default SidebarChat
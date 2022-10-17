import { Avatar } from "@material-ui/core"
import React from 'react'
import { SidebarChatContainer, SidebarChatInfo } from "../styles/SidebarChatStyles"
import { usePusherContext } from "../context/PusherProvider"
import axios from "../axios.js"
import { Link } from "react-router-dom"

const SidebarChat = ({addNewChat}) => {
    const { groups, setGroups } = usePusherContext()

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
            <Link to={`/groups/${group._id}`} key={group._id}>
                <SidebarChatContainer>
                    <Avatar src={`https://avatars.dicebear.com/api/human/${group.name}.svg`} />
                    <SidebarChatInfo>
                        <h2> {group.name} </h2>
                        <p> This is the last message </p>
                    </SidebarChatInfo>
                </SidebarChatContainer>
            </Link>
        ))
    ) : (
        <SidebarChatContainer onClick={createChat}>
            <h3> Add new chat </h3>
        </SidebarChatContainer>
    )
}

export default SidebarChat
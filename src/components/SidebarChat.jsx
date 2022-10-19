import { Avatar } from "@material-ui/core"
import React, { useEffect, useState } from 'react'
import { SidebarChatContainer, SidebarChatInfo } from "../styles/SidebarChatStyles"
// import { usePusherContext } from "../context/PusherProvider"
import { Link } from "react-router-dom"
import { db } from "../firebase"
import { collection, doc, getDocs, onSnapshot, setDoc } from "firebase/firestore";
import { nanoid } from "nanoid"


const SidebarChat = ({ addNewChat }) => {
    const [groups, setGroups] = useState([]);

    useEffect(() => {
        const unsubscribe = onSnapshot(collection(db, "groups"), snapshot => {
            setGroups(snapshot.docs.map(doc => ({
                id: doc.id,
                data: doc.data()
            })))
        })

        return () => {
            unsubscribe()
        }
    }, []);

    const createChat = async () => {
        const groupName = prompt("Please enter a name for the chat")

        // add group to firestore db
        if (groupName) {
            await setDoc(doc(db, "groups", nanoid()), {
                name: groupName,
            })
        }
    }

    return !addNewChat ? (
        groups.map(group => (
            <Link to={`/groups/${group.id}`} key={group.id}>
                <SidebarChatContainer>
                    <Avatar src={`https://avatars.dicebear.com/api/human/${group.id}.svg`} />
                    <SidebarChatInfo>
                        <h2> {group.data.name} </h2>
                        <p> last message... </p>
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
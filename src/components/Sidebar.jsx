import React from 'react';
import ChatIcon from '@mui/icons-material/Chat';
import DonutLargeIcon from '@mui/icons-material/DonutLarge';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Avatar, IconButton } from "@material-ui/core";
import SearchIcon from '@mui/icons-material/Search';
import SidebarChat from "./SidebarChat"
import { SidebarContainer, SidebarHeader, SidebarHeaderRight, SidebarHeaderLeft, SidebarSearch, SidebarSearchContainer, SidebarChats } from "../styles/SidebarStyles"
import { useReducerContext } from "../context/ReducerProvider"

const Sidebar = () => {
    const [{user}, dispatch] = useReducerContext()

    return (
        <SidebarContainer>
            <SidebarHeader>
                <SidebarHeaderLeft>
                    <Avatar src={user?.photoURL} referrerPolicy="no-referrer" />
                </SidebarHeaderLeft>
                
                <SidebarHeaderRight>
                    <IconButton>
                        <DonutLargeIcon style={{margin: ".1vw", fontSize: "24px !important"}}/>
                    </IconButton>
                    <IconButton>
                        <ChatIcon style={{margin: ".1vw", fontSize: "24px !important"}}/>
                    </IconButton>
                    <IconButton>
                        <MoreVertIcon style={{margin: ".1vw", fontSize: "24px !important"}}/>
                    </IconButton>
                </SidebarHeaderRight>

            </SidebarHeader>
            <SidebarSearch>
                <SidebarSearchContainer>
                <label htmlFor="search">
                    <SearchIcon style={{color: "gray", padding: "10px"}} />
                </label>
                    <input id="search" type="text" placeholder="Search or start new chat" style={{border: "none", outline: "0", width: "100%"}} />
                </SidebarSearchContainer>
            </SidebarSearch>

            <SidebarChats>
                <SidebarChat addNewChat />
                <SidebarChat />
            </SidebarChats>
        </SidebarContainer>
    )
}

export default Sidebar
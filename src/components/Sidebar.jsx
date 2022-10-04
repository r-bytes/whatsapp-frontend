import React from 'react';
import styled from "styled-components";
import ChatIcon from '@mui/icons-material/Chat';
import DonutLargeIcon from '@mui/icons-material/DonutLarge';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Avatar, IconButton } from "@material-ui/core";
import SearchIcon from '@mui/icons-material/Search';

const Sidebar = (props) => {
    console.log(props)
    return (
        <SidebarContainer>
            <SidebarHeader>
                <SidebarHeaderLeft>
                    <Avatar src="/images/jedi.png" />
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
        </SidebarContainer>
    )
}

export default Sidebar

const SidebarContainer =  styled.div`
    display: flex;
    flex-direction: column;
    flex: .35;
`
const SidebarHeader =  styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
    border-right: 1px solid lightgray;
    min-width: 10vw;

    @media ${props => props.theme.breakpoints.md} {
        display: flex;
        flex-direction: row;
    }

`
const SidebarHeaderRight =  styled.div`
    display: flex;
`
const SidebarHeaderLeft =  styled.div`

`
const SidebarSearch =  styled.div`
    display: flex;
    align-items: center;
    background-color: #f6f6f6;
    height: 40px;
    padding: 10px;
`
const SidebarSearchContainer =  styled.div`
    display: flex;
    align-items: center;
    background-color: white;
    width: 100%;
    height: 35px;
    border-radius: 20px;
`
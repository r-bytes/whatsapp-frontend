import styled from "styled-components"

export const SidebarContainer =  styled.div`
    display: flex;
    flex-direction: column;
    flex: .35;
`
export const SidebarHeader =  styled.div`
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
export const SidebarHeaderRight =  styled.div`
    display: flex;
`
export const SidebarHeaderLeft =  styled.div`

`
export const SidebarSearch =  styled.div`
    display: flex;
    align-items: center;
    background-color: #f6f6f6;
    height: 40px;
    padding: 10px;
`
export const SidebarSearchContainer =  styled.div`
    display: flex;
    align-items: center;
    background-color: white;
    width: 100%;
    height: 35px;
    border-radius: 20px;
`
export const SidebarChats =  styled.div`
    flex: 1;
    background-color: white;
    overflow: scroll;
`
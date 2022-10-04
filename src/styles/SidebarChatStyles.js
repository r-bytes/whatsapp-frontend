import styled from "styled-components"

export const SidebarChatContainer = styled.div`
    display: flex;
    padding: 20px;
    cursor: pointer;
    border-bottom: 1px solid #f6f6f6;

    &:hover {
        background-color: #ebebeb;
    }
`
export const SidebarChatInfo = styled.div`
    margin-left: 14px;
    
    & h2 {
        font-size: 16px;
        margin-bottom: 8px;
    }

    & p {
        font-size: 12px;
    }
`
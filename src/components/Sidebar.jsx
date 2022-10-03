import React from 'react'
import styled from "styled-components"

const Sidebar = () => {
  return (
    <SidebarContainer>
        <h2>Sidebar</h2>
        <SidebarHeader>
            <SidebarHeaderLeft>

            </SidebarHeaderLeft>
            <SidebarHeaderRight>
                
            </SidebarHeaderRight>
        </SidebarHeader>
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

`
const SidebarHeaderRight =  styled.div`

`
const SidebarHeaderLeft =  styled.div`

`
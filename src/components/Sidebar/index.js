import React from 'react'
import { 
    SidebarContainer, 
    Icon,
    CloseIcon,
    SidebarWrapper,
    SidebarMenu,
    SidebarLink,
    SideBntWrap,
    SidebarRoute
} from './SidebarElements';


const Sidebar = ({ isOpen, toggle }) => {
    return (
        <>
            <SidebarContainer isOpen={isOpen} onClick={toggle}>
                <Icon onClick={toggle}>
                    <CloseIcon />
                </Icon>
                <SidebarWrapper>
                    <SidebarMenu>
                        <SidebarLink to="projects2" onClick={toggle} >Past Projects</SidebarLink>
                        <SidebarLink to="projects" onClick={toggle} >GitHub</SidebarLink>
                        <SidebarLink to="frameworks" onClick={toggle} >My Background</SidebarLink>
                        <SidebarLink to="about" onClick={toggle} >About Me</SidebarLink>
                    </SidebarMenu>
                    <SideBntWrap>
                        <SidebarRoute to="/contactMe">Contact Me</SidebarRoute>
                    </SideBntWrap>
                </SidebarWrapper>
            </SidebarContainer>
        </>
    )
}

export default Sidebar

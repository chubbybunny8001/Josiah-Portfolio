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
                        <SidebarLink to="about" onClick={toggle} >About Me</SidebarLink>
                        <SidebarLink to="frameworks" onClick={toggle} >What I Know</SidebarLink>
                        <SidebarLink to="projects" onClick={toggle} >Projects</SidebarLink>
                        <SidebarLink to="projects2" onClick={toggle} >Projects Cont.</SidebarLink>
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

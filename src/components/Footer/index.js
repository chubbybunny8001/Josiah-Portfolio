import React from 'react';
import { animateScroll as scroll } from "react-scroll";
import {  
    FooterContainer,
    FooterWrap,
    FooterLinksContainer,
    FooterLinksWrapper,
    FooterLinkItems,
    FooterLinkTitle,
    FooterLink,
    FooterSocialLink,
    SocialMedia,
    SocialMediaWrap,
    SocialLogo,
    WebsiteRights,
    SocialIcons,
    SocialIconLink
} from "./FooterElements";
import {FaFacebook, FaInstagram, FaLinkedin} from 'react-icons/fa';

const Footer = () => {

    const toggleHome = () => {
        scroll.scrollToTop();
    };

    return (
        <>
            <FooterContainer id="socials">
                <FooterWrap>
                    <FooterLinksContainer>
                        <FooterLinksWrapper>
                            <FooterLinkItems>
                                <FooterLinkTitle>Social Media</FooterLinkTitle>
                                    <FooterSocialLink href="https://www.instagram.com/chubbybunny801/" target="_blank">Instagram</FooterSocialLink>
                                    <FooterSocialLink href="https://www.facebook.com/josiah.sanchez.338" target="_blank">Facebook</FooterSocialLink>
                                    <FooterSocialLink href="https://www.linkedin.com/in/josiah-sanchez-7671a1192/" target="_blank">LinkedIn</FooterSocialLink>
                            </FooterLinkItems>
                            <FooterLinkItems>
                                <FooterLinkTitle>Github and Email</FooterLinkTitle>
                                    <FooterSocialLink href="https://github.com/chubbybunny8001" target="_blank">Github</FooterSocialLink>
                                    <FooterLink to='/contactMe' >Contact Me</FooterLink>
                            </FooterLinkItems>
                            <FooterLinkItems>
                                <FooterLinkTitle>Resume</FooterLinkTitle>
                                    <FooterSocialLink href="https://docs.google.com/document/d/e/2PACX-1vTH7-oFprM1opfNUgYI2yP4-nr4TpCoMeVo_NjPPxhwGK5eAEzziHgCZ0aW8DUFMQ/pub" target="_blank">Chronological Resume</FooterSocialLink>
                                    <FooterSocialLink href="https://docs.google.com/document/d/e/2PACX-1vT8qXOukCb5xzDIK8q5dwfa5EUqTlwZOdCGULHFUOMTyMOrySFO7gRXeqRxGN3kQ-04zCuYmiMWWv74/pub" target="_blank">Angular Deveoper</FooterSocialLink>
                                    <FooterSocialLink href="https://docs.google.com/document/d/e/2PACX-1vTdbYYi7hxLnLiTWMuagkT_QQ64hkJUP4SlCWAC-4n4SJAETFWfv7q_ZsJArOlrPVU6g1mrihTMwpWT/pub" target="_blank">JavaScript Developer</FooterSocialLink>
                                    {/* <FooterSocialLink href="https://www.facebook.com/josiah.sanchez.338" target="_blank">C</FooterSocialLink>
                                    <FooterSocialLink href="https://www.linkedin.com/in/josiah-sanchez-7671a1192/" target="_blank">LinkedIn</FooterSocialLink> 
                                    FOR MY OTHER RESUMES WHEN I GET TO MAKE THEM...
                                    */}
                            </FooterLinkItems>  
                        </FooterLinksWrapper>
                    </FooterLinksContainer>
                    <SocialMedia>
                        <SocialMediaWrap>
                            <SocialLogo to="/" onClick={toggleHome}>
                                Josiah Sanchez
                            </SocialLogo>
                            <WebsiteRights>Josiah Sanchez © {new Date().getFullYear()} All rights reserved</WebsiteRights>
                            <SocialIcons>
                                <SocialIconLink href="https://www.instagram.com/chubbybunny801/" target="_blank" aria-label="Facebook"><FaInstagram /></SocialIconLink>
                                <SocialIconLink href="https://www.facebook.com/josiah.sanchez.338" target="_blank" aria-label="Instagram"><FaFacebook /></SocialIconLink>
                                <SocialIconLink href="https://www.linkedin.com/in/josiah-sanchez-7671a1192/" target="_blank" aria-label="Linkedin"><FaLinkedin /></SocialIconLink>
                            </SocialIcons>
                        </SocialMediaWrap>
                    </SocialMedia>
                </FooterWrap>
            </FooterContainer>
        </>
    )
}

export default Footer

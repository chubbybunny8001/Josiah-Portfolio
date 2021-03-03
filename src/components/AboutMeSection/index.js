import React, {useState} from 'react'
import Video from '../../videos/video2.mp4';
import {ButtonR as Button} from '../ButtonElements';
import {
    AboutContainer,
    AboutBg,
    VideoBg,
    AboutContent,
    AboutH1,
    AboutP,
    AboutBtnWrapper,
    ArrowFoward,
    ArrowRight
} from './AboutMeElements';

const AboutMeSection = () => {
    const [hover, setHover] = useState(false);

    const onHover = () => {
        setHover(!hover)
    }


    return (
        <>
            <AboutContainer 
                id="home"
                shadow=""
                //switch shadow="" to make the background light
                >
                <AboutBg>
                    <VideoBg autoPlay loop muted src={Video} type='video/mp4' />
                </AboutBg>
                <AboutContent>
                    <AboutH1>Josiah R. A. Campbell Sanchez</AboutH1>
                    <AboutP>Full Stack Web Designer Portfolio using React!</AboutP>
                    <AboutBtnWrapper>
                        <Button to="/contactMe" onMouseEnter={onHover} onMouseLeave={onHover}
                            primary="true"
                            dark="true" 
                            //Using this dark primary, and shadow properties
                            //we could make a dark mode and a light mode.
                        >
                            Have a project for me? {hover ? <ArrowFoward /> : <ArrowRight/>}
                        </Button>
                    </AboutBtnWrapper>
                </AboutContent>
            </AboutContainer>
        </>
    )
}

export default AboutMeSection

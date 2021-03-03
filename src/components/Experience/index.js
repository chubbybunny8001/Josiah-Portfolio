import React from 'react';
import Icon1 from '../../images/me.jpg';
import Icon2 from '../../images/me.jpg';
import Icon3 from '../../images/me.jpg';
import { 
    ExperienceContainer,
    ExperienceH1,
    ExperienceWrapper,
    ExperienceCard,
    ExperienceIcon,
    ExperienceH2,
    ExperienceP
} from "./ExperienceElements";

const Experience = () => {
    return (
        <>
            <ExperienceContainer id='projects2'>
                <ExperienceH1>Projects Continued...</ExperienceH1>
                <ExperienceWrapper>
                    <ExperienceCard>
                        <ExperienceIcon src={Icon1}/>
                        <ExperienceH2>OpenMic (Not Deployed)</ExperienceH2>
                        <ExperienceP>Social Media platform with a realtime chatroom.</ExperienceP>
                    </ExperienceCard>
                    <ExperienceCard>
                        <ExperienceIcon src={Icon2}/>
                        <ExperienceH2>Project 2</ExperienceH2>
                        <ExperienceP>Some random project i worked on...</ExperienceP>
                    </ExperienceCard>
                    <ExperienceCard>
                        <ExperienceIcon src={Icon3}/>
                        <ExperienceH2>Project 3</ExperienceH2>
                        <ExperienceP>Something else ive worked on, are more words needed...</ExperienceP>
                    </ExperienceCard>
                </ExperienceWrapper>
            </ExperienceContainer>
        </>
    )
}

export default Experience

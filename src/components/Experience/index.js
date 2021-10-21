import React, {useState} from 'react';
import reactDom from 'react-dom';
import Icon1 from '../../images/openMic.png';
import Icon2 from '../../images/CompView.png';
import Icon3 from '../../images/Mobile.png';
import { 
    ExperienceContainer,
    ExperienceH1,
    ExperienceWrapper,
    ExperienceCard,
    ExperienceIcon,
    ExperienceH2,
    ExperienceP
} from "./ExperienceElements";
import Modal from "./modal"
import {cont1, cont2, cont3, hiddenCont}  from './ExperienceContent';

const Experience = () => {
    const[cont, setCont] = useState(hiddenCont);
    const [modalShown, toggleModal] = React.useState(false);
    return (
        <>
            <ExperienceContainer id='projects2'>
                <ExperienceH1>Most Recent Projec<button onClick={() => {setCont(hiddenCont); toggleModal(!modalShown); }}>t</button></ExperienceH1>
                <ExperienceWrapper>
                    <button onClick={() => {                        
                        setCont(cont1);
                        toggleModal(!modalShown); 
                    }}>
                    <ExperienceCard>
                        <ExperienceIcon src={Icon1}/>
                        <ExperienceH2>Home Page</ExperienceH2>
                        <ExperienceP>Social Media platform with a realtime chatroom. Checkout my Github for more details!.</ExperienceP>
                    </ExperienceCard>
                    </button>
                    <button onClick={() => {                        
                        setCont(cont2);
                        toggleModal(!modalShown);
                        }}>
                    <ExperienceCard>
                        <ExperienceIcon src={Icon2}/>
                        <ExperienceH2>Wireframe 1</ExperienceH2>
                        <ExperienceP>This was the wireframe I made to mimic the way the application would work on a desktop/laptop.</ExperienceP>
                        
                    </ExperienceCard>
                    </button>
                    <button onClick={() => {
                        setCont(cont3);
                        toggleModal(!modalShown); 
                    }}>
                    <ExperienceCard>
                        <ExperienceIcon src={Icon3}/>
                        <ExperienceH2>Wireframe 2</ExperienceH2>
                        <ExperienceP>This is the mobile wireframe. I made to help the team visualize the mobile version of the app.</ExperienceP>
                    </ExperienceCard>
                    </button>
                </ExperienceWrapper>
                <Modal shown={modalShown} close={() => {toggleModal(false);}}>
                    <h1>{cont.head}</h1>
                    <p>{cont.body}</p>
                    <img src={cont.picture} alt="text" />
                </Modal>
            </ExperienceContainer>
        </>
    )
}

export default Experience

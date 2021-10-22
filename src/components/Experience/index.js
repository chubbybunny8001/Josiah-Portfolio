import React, {useState} from 'react';
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
import Modal from "../Modal/modal"
import { ModalButton, ModalHead, ModalBody, ModalImage, ModalContent, ModalContainer, ModalImageContainer } from '../Modal/ModalElement';
import {cont1, cont2, cont3, hiddenCont}  from './ExperienceContent';

const Experience = () => {
    const[cont, setCont] = useState(hiddenCont);
    const [modalShown, toggleModal] = React.useState(false);
    return (
        <>
            <ExperienceContainer id='projects2'>
                <ExperienceH1>Most Recent Projec<ModalButton onClick={() => {setCont(hiddenCont); toggleModal(!modalShown); }}>t</ModalButton></ExperienceH1>
                <ExperienceWrapper>
                    <ModalButton onClick={() => {                        
                        setCont(cont1);
                        toggleModal(!modalShown); 
                    }}>
                    <ExperienceCard>
                        <ExperienceIcon src={Icon1}/>
                        <ExperienceH2>Home Page</ExperienceH2>
                        <ExperienceP>Social Media platform with a realtime chatroom. Checkout my Github for more details!.</ExperienceP>
                    </ExperienceCard>
                    </ModalButton>
                    <ModalButton onClick={() => {                        
                        setCont(cont2);
                        toggleModal(!modalShown);
                        }}>
                    <ExperienceCard>
                        <ExperienceIcon src={Icon2}/>
                        <ExperienceH2>Wireframe 1</ExperienceH2>
                        <ExperienceP>This was the wireframe I made to mimic the way the application would work on a desktop/laptop.</ExperienceP>
                        
                    </ExperienceCard>
                    </ModalButton>
                    <ModalButton onClick={() => {
                        setCont(cont3);
                        toggleModal(!modalShown); 
                    }}>
                    <ExperienceCard>
                        <ExperienceIcon src={Icon3}/>
                        <ExperienceH2>Wireframe 2</ExperienceH2>
                        <ExperienceP>This is the mobile wireframe. I made to help the team visualize the mobile version of the app.</ExperienceP>
                    </ExperienceCard>
                    </ModalButton>
                </ExperienceWrapper>
                <Modal shown={modalShown} close={() => {toggleModal(false);}}>
                    <ModalContainer>
                        <ModalHead>{cont.head}</ModalHead>
                        <ModalBody>{cont.body}</ModalBody>
                        <ModalImageContainer>
                            <ModalImage src={cont.picture} alt="text" />
                        </ModalImageContainer>
                    </ModalContainer>
                </Modal>
            </ExperienceContainer>
        </>
    )
}

export default Experience

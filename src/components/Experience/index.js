import React from 'react';
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

const Experience = () => {
    const [modalShown, toggleModal] = React.useState(false);
    return (
        <>
            <ExperienceContainer id='projects2'>
                <ExperienceH1>Most Recent Project</ExperienceH1>
                <ExperienceWrapper>
                    <ExperienceCard>
                        <ExperienceIcon src={Icon1}/>
                        <ExperienceH2>Home Page</ExperienceH2>
                        <ExperienceP>Social Media platform with a realtime chatroom. Checkout my Github for more details!.</ExperienceP>
                    </ExperienceCard>
                    <ExperienceCard>
                        <ExperienceIcon src={Icon2}/>
                        <ExperienceH2>Wireframe 1</ExperienceH2>
                        <button onClick={() => {toggleModal(!modalShown);}}>
                        <ExperienceP>This was the wireframe I made to mimic the way the application would work on a desktop/laptop.</ExperienceP>
                        </button>
                    </ExperienceCard>
                    <ExperienceCard>
                        <ExperienceIcon src={Icon3}/>
                        <ExperienceH2>Wireframe 2</ExperienceH2>
                        <ExperienceP>This is the mobile wireframe. I made to help the team visualize the mobile version of the app.</ExperienceP>
                    </ExperienceCard>
                </ExperienceWrapper>
                <Modal
        shown={modalShown}
        close={() => {
          toggleModal(false);
        }}
      >
        <h1>Look! I'm inside the modal!</h1>
      </Modal>
            </ExperienceContainer>
        </>
    )
}

export default Experience

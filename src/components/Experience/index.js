import React, { useState } from "react";
import Icon1 from "../../images/MapOfMiddleEarth.jpg";
import Icon2 from "../../images/CompView.png";
import Icon3 from "../../images/Mobile.png";
import {
  ExperienceContainer,
  ExperienceH1,
  ExperienceWrapper,
  ExperienceCard,
  ExperienceIcon,
  ExperienceH2,
  ExperienceP,
} from "./ExperienceElements";
import Modal from "../Modal/modal";
import {
  ModalButton,
  ModalHead,
  ModalBody,
  ModalImage,
  ModalContainer,
  ModalImageContainer,
} from "../Modal/ModalElement";
import { cont1, cont2, cont3, hiddenCont } from "./ExperienceContent";

const Experience = () => {
  const [cont, setCont] = useState(hiddenCont);
  const [modalShown, toggleModal] = React.useState(false);
  return (
    <>
      <ExperienceContainer id="projects2">
        <ExperienceH1>
          Recent Project
          <ModalButton
            onClick={() => {
              setCont(hiddenCont);
              toggleModal(!modalShown);
            }}
          >
            s
          </ModalButton>
        </ExperienceH1>
        <ExperienceWrapper>
          <ModalButton
            onClick={() => {
              setCont(cont1);
              toggleModal(!modalShown);
            }}
          >
            <ExperienceCard>
              <ExperienceIcon src={Icon1} />
              <ExperienceH2>{cont1.title}</ExperienceH2>
              <ExperienceP>
                An interactive website that allows you to explore the famous
                locations of Lord of the Rings.
              </ExperienceP>
            </ExperienceCard>
          </ModalButton>
          <ModalButton
            onClick={() => {
              setCont(cont2);
              toggleModal(!modalShown);
            }}
          >
            <ExperienceCard>
              <ExperienceIcon src={Icon2} />
              <ExperienceH2>{cont2.title}</ExperienceH2>
              <ExperienceP>
                This was the wireframe I made to mimic the way the application
                would work on a desktop/laptop.
              </ExperienceP>
            </ExperienceCard>
          </ModalButton>
          <ModalButton
            onClick={() => {
              setCont(cont3);
              toggleModal(!modalShown);
            }}
          >
            <ExperienceCard>
              <ExperienceIcon src={Icon3} />
              <ExperienceH2></ExperienceH2>
              <ExperienceP>
                This is the mobile wireframe. I made to help the team visualize
                the mobile version of the app. Have to add another line to even
                this out...
              </ExperienceP>
            </ExperienceCard>
          </ModalButton>
        </ExperienceWrapper>
        <Modal
          shown={modalShown}
          close={() => {
            toggleModal(false);
          }}
        >
          <ModalContainer>
            <ModalHead>{cont.head}</ModalHead>
            <ModalBody>{cont.body}</ModalBody>
            <ModalImageContainer>
              <ModalImage
                src={cont.picture}
                alt="text"
                allowFullScreen
              ></ModalImage>
            </ModalImageContainer>
          </ModalContainer>
        </Modal>
      </ExperienceContainer>
    </>
  );
};

export default Experience;

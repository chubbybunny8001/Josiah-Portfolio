import React, { useState } from "react";
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
  ModalALink,
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
              <ExperienceIcon src={cont1.icon} />
              <ExperienceH2>{cont1.title}</ExperienceH2>
              <ExperienceP>{cont1.description}</ExperienceP>
            </ExperienceCard>
          </ModalButton>
          <ModalButton
            onClick={() => {
              setCont(cont2);
              toggleModal(!modalShown);
            }}
          >
            <ExperienceCard>
              <ExperienceIcon src={cont2.icon} />
              <ExperienceH2>{cont2.title}</ExperienceH2>
              <ExperienceP>{cont2.description}</ExperienceP>
            </ExperienceCard>
          </ModalButton>
          <ModalButton
            onClick={() => {
              setCont(cont3);
              toggleModal(!modalShown);
            }}
          >
            <ExperienceCard>
              <ExperienceIcon src={cont3.icon} />
              <ExperienceH2>{cont3.title}</ExperienceH2>
              <ExperienceP>{cont3.description}</ExperienceP>
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

            <ModalBody>
              {cont.body}
              <ModalALink href={cont.link} target="_blank">
                {cont.linkName}
              </ModalALink>
            </ModalBody>
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

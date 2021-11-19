import styled from "styled-components";

export const ModalBackdrop = styled.div`
  padding-top: 0;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.4);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 77;
`;

export const ModalContent = styled.div`
  width: 80%;
  height: 85%;
  background-color: white;
  padding: 25px;
  border-radius: 10px;
  transition: ease-in-out;
  transition-duration: 1s;
  @media screen and(max-width: 1024px) {
    width: 80%;
  }
  @media screen and (max-width: 786px) {
    width: 85%;
    height: 80%;
  }
  @media screen and (max-width: 480px) {
    width: 90%;
    max-height: 85%;
  }
  @media screen and (max-height: 400px) {
    padding: 5px;
  }
`;

export const ModalButton = styled.button`
  background: none;
  color: inherit;
  border: none;
  padding: 0;
  font: inherit;
  cursor: pointer;
  outline: inherit;
`;

export const ModalContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const ModalHead = styled.h1`
  text-align: center;
  @media screen and (max-height: 400px) {
    font-size: 1.25em;
  }
`;

export const ModalBody = styled.p`
  text-align: center;
  @media screen and (max-height: 400px) {
    font-size: 0.75em;
  }
`;

export const ModalImageContainer = styled.div`
  height: 70%;
  width: auto;
  text-align: center;
`;

export const ModalImage = styled.iframe`
  width: 100%;
  height: 100%;
`;

export const ModalALink = styled.a`
  text-decoration: none;
  display: block;
  margin: 5px 0;
  background-color: #01bf71;
  padding: 8px;
  color: black;
  border-radius: 20px;
  transition: all 0.2s ease-in-out;
  &:hover {
    background-color: #ffffff;
  }
`;

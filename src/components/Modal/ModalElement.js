import styled from "styled-components"

export const ModalBackdrop = styled.div`
    padding-top: 5%;
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.4);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 2;
`;

export const ModalContent = styled.div`
    width: 60%;
    height: 80%;
    background-color: white;
    padding: 25px;
    border-radius: 10px;
    transition: ease-in-out;
    transition-duration: 1s;
    @media screen and(max-width: 1024px){
        width: 80%;
    }
    @media screen and (max-width: 786px){
        width: 85%;
        height: 80%;
    }
    @media screen and (max-width: 480px){
        width: 90%;
        max-height: 85%;
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
    width: 100%;
    height: 100%;
    align-items: center;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr 3fr;
    grid-template-areas: 
    "modhead modbody"
    "modimage modimage"
    "modimage modimage";
    @media screen and (max-width: 786px){
        grid-template-rows: .2fr .5fr 3fr;
        grid-template-areas: 
        "modhead modhead"
        "modbody modbody"
        "modimage modimage";
    }
    
`;

export const ModalHead = styled.h1`
    text-align: center;
    grid-area: modhead;
`;

export const ModalBody = styled.p`
    text-align: center;
    grid-area: modbody;
`;

export const ModalImageContainer = styled.div`
    grid-area: modimage; 
    width: 100%;
    height: 100%;
    text-align: center;
`;

export const ModalImage = styled.iframe`
    width: 100%;
    height: 100%;

    /* @media screen and (max-width: 786px){
        max-width: 80%;
    }

    @media screen and (max-width: 480px){
        max-width: 90%;
    } */
    
`;


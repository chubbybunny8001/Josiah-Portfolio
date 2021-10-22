import React from "react";
import { ModalBackdrop, ModalContent} from './ModalElement';

function Modal({ children, shown, close }) {
    return shown ? (
        <ModalBackdrop onClick={() => {close();}}>
            <ModalContent onClick={e => {e.stopPropagation();}}>
                {children}
            </ModalContent>
    </ModalBackdrop>
    ) : null;
}

export default Modal;
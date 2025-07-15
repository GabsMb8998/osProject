import React, { ReactNode } from "react"

interface ModalProps {
    ContentModal: React.ComponentType<any>
    modalProps?: any,
    overflow?: string
}

function Modal({ContentModal, modalProps, overflow=""}: ModalProps){
    return(
        <div className={`fixed bg-[#0C0C0C] bottom-0 w-screen h-screen flex justify-center z-20 ${overflow}`}>
            <ContentModal/>
        </div>
    )
}

export {Modal}
export default function ModalOficial({ContentModal, modalProps, overflow=""}){
    return(
        <div className={`fixed bg-[#0C0C0C] bottom-0 w-screen h-screen flex justify-center z-20 ${overflow}`}>
            <ContentModal {...modalProps}/>
        </div>
    )
}
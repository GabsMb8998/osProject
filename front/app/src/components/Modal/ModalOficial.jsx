export default function ModalOficial({ContentModal, modalProps}){
    return(
        <div className="fixed bg-[#0C0C0C] bottom-0 w-screen h-screen flex justify-center z-20">
            <ContentModal {...modalProps}/>
        </div>
    )
}
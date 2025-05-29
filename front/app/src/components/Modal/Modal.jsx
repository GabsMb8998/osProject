export default function Modal({ContentModal, modalProps}){
    return(
        <div className="fixed bg-black/60 bottom-0 w-screen h-screen flex justify-center items-center">
            <ContentModal {...modalProps}/>
        </div>
    )
}
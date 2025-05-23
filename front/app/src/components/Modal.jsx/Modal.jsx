export default function Modal({ContentModal, modalProps}){
    return(
        <div className="bg-black/60 absolute bottom-0 w-screen h-screen flex justify-center items-center">
            <ContentModal {...modalProps}/>
        </div>
    )
}
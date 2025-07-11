import uploadIcon from "../../../public/icons/uploadIcon.svg"

interface ButtonUploadFileProps{
    handleFileChange: () => void
}
function ButtonUploadFile({handleFileChange}:ButtonUploadFileProps){
    return (
        <div className="relative w-32 h-10 rounded flex item-center" onChange={handleFileChange}>
            <input type="file" className="w-32 opacity-0 z-20 absolute inset-0" />
            <p className="bg-[#3A3A3A] text-base font-semibold rounded-[6px] absolute z-10 bottom-0 flex items-center justify-center text-[#F4F4F4] inset-0 w-32 pr-14 pl-5">upload</p>
            <img src={uploadIcon} alt="" className="z-10 w-5 absolute right-4 bottom-3"/>
        </div>
    )
}

export {ButtonUploadFile}
export default function ContainerHome({Icon, text, title}){
    return(
        <div className="bg-[#252525] flex flex-col items-center w-[430px] p-10 rounded hover:bg-[#151515] hover:scale-105 duration-100">
            <div className="h-[80px] flex items-center">
                {Icon}
            </div>
            <div className="flex flex-col items-center justify-center mt-4">
                <h5 className="text-[#F8F8F8] font-semibold text-2xl">{title}</h5>
                <p className="text-[#949494] w-[300px] text-center">{text}</p>
            </div>
        
        </div>
    )
}
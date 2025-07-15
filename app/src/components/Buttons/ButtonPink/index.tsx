import Image from "next/image"

interface ButtonPinkProps {
    label: string
    hasIcon: boolean
    icon?: string
    width?: number
    height?: number
    onClick: ()=>void
}
function ButtonPink({label, hasIcon, icon, width=32, height=10, onClick=()=>{}}:ButtonPinkProps){
    return(
        <div>
            {hasIcon ? (
                <div className="relative" onClick={()=>onClick()}>
                    <button className="bg-linear-to-r from-[#BE9CF1] to-[#F8CEFF] text-[#2B2B2B] px-10 text-lg font-bold rounded-[6px] pr-14 pl-5 w-32 h-10">{label}</button>
                    <Image src={icon!} alt="" className="absolute bottom-2 z-10 right-4" />
                </div>
            ):(
                <button onClick={()=>onClick()} className= {`bg-linear-to-r from-[#BE9CF1] to-[#F8CEFF] text-[#2B2B2B] text-center text-lg font-bold rounded-[6px] w-${width} h-${height} `}>{label}</button>
            )
            }
        </div>
            
    )
}

export {ButtonPink}
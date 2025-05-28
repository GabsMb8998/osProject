export default function ButtonCinza({label, hasIcon, icon, onClick, width=32}){
    return(

        <div>
            {hasIcon ? (
                <div className="relative" onClick={()=>onClick()}>
                    <button className="bg-[#3A3A3A] text-[#2B2B2B] px-10 text-lg font-bold rounded-[6px] pr-14 pl-5 w-32 h-10">{label}</button>
                    <img src={icon} alt="" className="absolute bottom-2 z-10 right-4" />
                </div>

            ): (

                <button onClick={()=>onClick()} className= {`bg-[#3A3A3A] to-[#F8CEFF] text-[#F4F4F4] text-center text-lg font-medium rounded-[6px] w-${width} h-10 `}>{label}</button>
                    )
                }
        </div>
    )
}
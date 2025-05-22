    export default function ButtonPink({label, hasIcon, icon}){
        return(

            <div>
                {hasIcon ? (
                    <div className="relative">
                        <button className="bg-linear-to-r from-[#BE9CF1] to-[#F8CEFF] text-[#2B2B2B] px-10 text-lg font-bold rounded-[6px] pr-14 pl-5 w-32 h-10">{label}</button>
                        <img src={icon} alt="" className="absolute bottom-2 z-10 right-4" />
                    </div>
        
                ): (
        
                <button>{label}</button>
                        )
                    }
                    </div>
                
        )
    }
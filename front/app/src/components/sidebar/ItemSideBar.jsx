export default function ItemSideBar({icon, label, selected, onClick}){
    return(
        <div className={`flex gap-x-4`} onClick={()=>onClick()}>
            {icon}

            <p className={`${selected ? 'text-[#9A95BA] font-[24px] ' : 'text-[#F4F4F4]'} text-xl`}>{label}</p>
        </div>

    )
}


export default function ItemSideBar({icon, label, selected, onClick}){
    return(
        <div className={`flex gap-x-4`} onClick={()=>onClick()}>
            {icon}

            <p className={`${selected ? 'text-[#D6BBF6] font-[24px] ' : 'text-[#848484]'} text-xl`}>{label}</p>
        </div>

    )
}


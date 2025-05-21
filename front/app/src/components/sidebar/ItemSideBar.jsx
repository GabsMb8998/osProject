export default function ItemSideBar({icon, label, selected, onClick}){
    return(
        <div className={`flex gap-x-4 items-center`} onClick={()=>onClick()}>
            {icon }

            <p className={`${selected ? 'text-[#D6BBF6] ' : 'text-[#848484]'} text-[22px] ` }>{label}</p>
        </div>

    )
}


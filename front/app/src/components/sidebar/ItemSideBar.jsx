export default function ItemSideBar({icon, label, selected, onClick}){
    return(
        <div className={` ${selected && 'bg-[#282828]'} flex gap-x-4 items-center hover:bg-[#282828] px-6 rounded py-2`} onClick={()=>onClick()}>
            {icon }

            <p className={`${selected ? 'text-[#D6BBF6] font-medium' : 'text-[#848484] font-normal'} text-[20px] ` }>{label}</p>
        </div>

    )
}


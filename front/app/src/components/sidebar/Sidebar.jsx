import { useState } from "react"
import HomeIcon from "../../images/icons/HomeIcon"
import ItemSideBar from "./ItemSideBar"
import '../../index.css'

export default function SideBar(){

    const [open, setOpen] = useState(true)

    const [selected, setSelected] = useState('home')

    function changeSelected(selected){
        setSelected(selected)
    }

    return(
        <aside className={`${open ? ' w-72 ':'w-24'} bg-[#2D2D2D] h-screen`}>

            <div className="mx-10 py-10 flex flex-col gap-y-8">
                <ItemSideBar icon={<HomeIcon selected={selected==='home'} />} selected={selected==='home'} label={'home'} onClick={()=>changeSelected('home')}/>
                <ItemSideBar icon={<HomeIcon selected={selected==='os'} />} selected={selected==='os'} label={'os'} onClick={()=>changeSelected('os')}/>
                <ItemSideBar icon={<HomeIcon selected={selected==='patrimonios'} />} selected={selected==='patrimonios'} label={'patrimonios'} onClick={()=>changeSelected('patrimonios')}/>
                <ItemSideBar icon={<HomeIcon selected={selected==='gerentes'} />} selected={selected==='gerentes'} label={'gerentes'} onClick={()=>changeSelected('gerentes')}/>
                <ItemSideBar icon={<HomeIcon selected={selected==='manutentores'} />} selected={selected==='manutentores'} label={'manutentores'} onClick={()=>changeSelected('manutentores')}/>
                <ItemSideBar icon={<HomeIcon selected={selected==='ambiente'} />} selected={selected==='ambiente'} label={'ambiente'} onClick={()=>changeSelected('ambiente')}/>
                <ItemSideBar icon={<HomeIcon selected={selected==='areas'} />} selected={selected==='areas'} label={'areas'} onClick={()=>changeSelected('areas')}/>
            </div>
        </aside>
    )
}
import { useState } from "react"
import HomeIcon from "../../images/icons/HomeIcon"
import ItemSideBar from "./ItemSideBar"
import '../../index.css'
import OsIcon from "../../images/icons/OsIcon"
import PatrimoniosIcon from "../../images/icons/PatrimoniosIcon"
import GerenteICon from "../../images/icons/GerenteIcon"

export default function SideBar(){

    const [open, setOpen] = useState(true)

    const [selected, setSelected] = useState('home')

    function changeSelected(selected){
        setSelected(selected)
    }

    function xpto (n1, n2){

        while (n1 != n2){
            if (n1 < n2){
                n2 = n2 - n1
            }
            else{
                n1 = n1 - n2
            }
        return n1
    }

    }

    console.log(xpto(50,5),'aaaaa')

    function teste(x){
        if (x<1){
            return 0 ;
        }else {
            return 4+teste(x-1)
        }
    }


    console.log(teste(5))

    // const [teste, setTeste] = useState([1,2,3])
    // console.log(teste.length)
    return(
        <aside className={`${open ? ' w-72 ':'w-24'} h-screen`}>

            <div className="mx-10 py-10 flex flex-col gap-y-8">
                <ItemSideBar icon={<HomeIcon selected={selected==='home'} />} selected={selected==='home'} label={'home'} onClick={()=>changeSelected('home')}/>
                <ItemSideBar icon={<OsIcon selected={selected==='os'} />} selected={selected==='os'} label={'os'} onClick={()=>changeSelected('os')}/>
                <ItemSideBar icon={<PatrimoniosIcon selected={selected==='patrimonios'} />} selected={selected==='patrimonios'} label={'patrimonios'} onClick={()=>changeSelected('patrimonios')}/>
                <ItemSideBar icon={<GerenteICon selected={selected==='gerentes'} />} selected={selected==='gerentes'} label={'gerentes'} onClick={()=>changeSelected('gerentes')}/>
                <ItemSideBar icon={<HomeIcon selected={selected==='manutentores'} />} selected={selected==='manutentores'} label={'manutentores'} onClick={()=>changeSelected('manutentores')}/>
                <ItemSideBar icon={<HomeIcon selected={selected==='ambiente'} />} selected={selected==='ambiente'} label={'ambiente'} onClick={()=>changeSelected('ambiente')}/>
                <ItemSideBar icon={<HomeIcon selected={selected==='areas'} />} selected={selected==='areas'} label={'areas'} onClick={()=>changeSelected('areas')}/>
            </div>
        </aside>
    )
}
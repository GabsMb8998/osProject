
'use client'

import { ContainerHome } from "@/components/ContainerHome"
import Logo from "@/components/Logo"
import { OsIcon } from "../../../public/icons/OsIcon"
import { OsIconHome } from "../../../public/icons/home/OsIconHome"
import { ManagersIconHome } from "../../../public/icons/home/ManagersIconHome"
import { HeritageIconHome } from "../../../public/icons/home/HeritageIconHome"
import { SpacesIconHome } from "../../../public/icons/home/SpacesIconHome"
import { useRouter } from "next/navigation"

function Home (){
    const router = useRouter()

    return(
        <div className="flex flex-col justify-center h-screen bg-[#1C1C1C]">
                    <div className="flex flex-col items-center w-full mb-8">
                        <Logo/>
                        <h1 className="bg-linear-to-r from-[#FFFFFF] to-[#AFAFAF]  bg-clip-text text-transparent font-medium text-5xl">What do you wanna do?</h1>
                    </div>
        
                    <section>
                        <div className="flex gap-x-10 justify-center my-10">
                            <ContainerHome Icon={<OsIconHome/>} title={'service orders'} text={'Create new service orders for heritage items that need to be fixed'} onClick={()=>{router.push('/orderservices')}}/>
                            <ContainerHome Icon={<ManagersIconHome/>}title={'employees'} text={'Manage all the managers: create, update, view, and delete them.'} onClick={()=>router.push('/funcionarios')}/>
                            <ContainerHome Icon={<HeritageIconHome/>}title={'heritage'} text={'Manage all the assets: create, update, view, and delete'} onClick={()=>router.push('/patrimonios')}/>
                        </div>

                        <div className="flex gap-x-10 justify-center">
                            <ContainerHome Icon={<SpacesIconHome/>}title={'spaces'} text={'Manage all the spaces: create, update, view, and delete.'} onClick={()=>router.push('/ambientes')}/>
                            <ContainerHome Icon={<OsIconHome/>}title={'areas'} text={'Manage all the managers: create, update, view, and delete them.'} onClick={()=>router.push('/areas')}/>
                        </div>
                    </section>
                </div>
    )
}

export default Home
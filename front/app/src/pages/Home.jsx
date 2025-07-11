import ContainerHome from "../components/Home/ContainerHome";
import Logo from "../components/Logo";
import SideBar from "../components/sidebar/Sidebar";
import HeritageIconHome from "../images/icons/home/HeritageIconHome";
import ManagersIconHome from "../images/icons/home/ManagersIconHome";
import OsIconHome from "../images/icons/home/OsIconHome";
import SpacesIconHome from "../images/icons/home/SpacesIconHome";
import OsIcon from "../images/icons/OsIcon";
import {useNavigate } from 'react-router-dom'

export default function Home(){
    const navigate = useNavigate()

    return(
        <div className="flex flex-col justify-center h-screen bg-[#1C1C1C]">
            <div className="flex flex-col items-center w-full mb-8">
                <Logo/>
                <h1 className="bg-linear-to-r from-[#FFFFFF] to-[#AFAFAF]  bg-clip-text text-transparent font-medium text-5xl">What do you wanna do?</h1>
            </div>

            <section>
                <div className="flex gap-x-10 justify-center my-10">
                    <ContainerHome Icon={<OsIconHome/>} title={'service orders'} text={'Create new service orders for heritage items that need to be fixed'} onClick={()=>navigate('/orderServices')}/>
                    <ContainerHome Icon={<ManagersIconHome/>}title={'employees'} text={'Manage all the managers: create, update, view, and delete them.'} onClick={()=>navigate('/funcionarios')}/>
                    <ContainerHome Icon={<HeritageIconHome/>}title={'heritage'} text={'Manage all the assets: create, update, view, and delete'} onClick={()=>navigate('/patrimonios')}/>
                </div>
                <div className="flex gap-x-10 justify-center">
                    <ContainerHome Icon={<SpacesIconHome/>}title={'spaces'} text={'Manage all the spaces: create, update, view, and delete.'} onClick={()=>navigate('/ambientes')}/>
                    <ContainerHome Icon={<OsIconHome/>}title={'areas'} text={'Manage all the managers: create, update, view, and delete them.'} onClick={()=>navigate('/areas')}/>

                </div>
            </section>
        </div>
    )
}
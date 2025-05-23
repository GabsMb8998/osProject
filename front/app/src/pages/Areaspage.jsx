import { useEffect, useState } from "react";
import Header from "../components/Header";
import SideBar from "../components/sidebar/Sidebar";
import Titulo from "../components/Titulo";
import ButtonPink from "../components/ButtonPink";
import addIcon from "../images/icons/addIcon.svg"
import iconViewMore from "../images/icons/iconViewMore.svg"
import Modal from "../components/Modal.jsx/Modal";
import ContentModalArea from "../components/Modal.jsx/ContentModalArea";

export default function AreasPage(){

    const [dataAreas, setDataAreas] = useState([])
    const [openModal, setOpenModal] = useState(false)
    const [selectedArea, setSelectedArea] = useState()
    const [onChangeArea, setOnchangeArea ] = useState()

    useEffect(()=>{
        fetch('http://127.0.0.1:8000/api/area/get',).then(response=>{
            if (!response.ok){
                console.error('não foi possivel buscar os dados')
            }
            return response.json()
        }).then(data=>{
            console.log(data)
            setDataAreas(data)
            // console.log(dataAreas.map((area)=>{
            //     area
            // }))
        })
    }, [])

    console.log(onChangeArea, 'changeArea')


    return(
          <div className={`${openModal && 'overflow-hidden'} bg-[#1C1C1C] h-screen`}>
                    <Header/>
                    <div className="flex text-4xl font-medium">
                        <SideBar/>    
        
                        <section className="my-10 mx-96 w-full mr-96">
                            <div className="border-b border-b-[#3B3B3B]">

                                <div className="flex justify-between mb-7 items-end pl-8">
                                    <Titulo label={'areas'}/>
                                    <ButtonPink label={'create'} hasIcon={true} icon={addIcon}/>
                                </div>
                            </div>

                            <div className="mt-10">
                                {dataAreas.map((area, index)=>(
                                    <div key={index} className="bg-[#313131] text-[#C5C5C5] my-4 py-5 text-[22px] px-10 rounded font-normal flex justify-between" 
                                    onClick={()=>{
                                        setSelectedArea(area)
                                        setOpenModal(true)
                                        }}>
                                        <p>{area.nome}</p>
                                        <img src={iconViewMore} alt="" />
                                    </div>
                                ))}
                            </div>
                        </section>
                    </div>

                    {openModal && (
                        <Modal ContentModal={ContentModalArea} modalProps={{name: selectedArea.nome, onClickFechar: ()=>{setOpenModal(false)}, onChangeArea: (e)=>setOnchangeArea(e.target.value) }}/>
                    )}

                </div>
    )
}
"use client"
import { ButtonPink } from "@/components/ButtonPink"
import { ButtonUploadFile } from "@/components/ButtonUploadFile"
import { Header } from "@/components/Header"
import { Title } from "@/components/Title"
import { useAreaStore } from "@/store/areaStore"

import addIcon from "../../../public/icons/addIcon.svg"
import iconViewMore from "../../../public/icons/IconViewMore.svg"
import { useEffect } from "react"

function AreasPage(){
    const {
        areas,
        onChangeArea,
        onChangeCreateArea,
        openModalCreate,
        openModalUpdate,
        selectedArea,
        setOpenModalCreate,
        setOpenModalUpdate,
        setSelectedArea,
        getArea
    } = useAreaStore()

    useEffect(()=>{
        getArea()
    }, [areas])


    return (
        <div className={`${openModalUpdate || openModalCreate && 'overflow-hidden'} bg-[#1C1C1C] min-h-screen`}>
                <Header/>
                <div className="flex text-4xl font-medium">
                    {/* <SideBar/>     */}
    
                    <section className="my-10 mx-96 w-full mr-96">
                        <div className="border-b border-b-[#3B3B3B]">

                            <div className="flex justify-between mb-7 items-end pl-8">
                                <Title label={'areas'}/>
                                <div className="flex items-end gap-x-4">
                                    {/* <ButtonUploadFile handleFileChange={handleFileChange}/> */}
                                    <ButtonPink label={'create'} hasIcon={true} icon={addIcon} onClick={()=>setOpenModalCreate(true)}/>
                                </div>
                            </div>
                        </div>

                        <div className="mt-10">
                            {areas.map((area, index)=>(
                                <div key={index} className="bg-[#313131] text-[#C5C5C5] my-4 py-5 text-[22px] px-10 rounded font-normal flex justify-between" 
                                onClick={()=>{
                                    setSelectedArea(area)
                                    setOpenModalUpdate(true)
                                    }}>
                                    <p>{area.nome}</p>
                                    <img src={iconViewMore} alt="" width={22} />
                                </div>
                            ))}
                        </div>
                    </section>
                </div>

                {/* {openModalUpdate ?(
                    <Modal ContentModal={ContentModalArea} modalProps={{name: selectedArea.nome, onClickFechar: ()=>{setOpenModalUpdate(false)}, onChangeArea: (e)=>setOnchangeArea(e.target.value), onClickAplicar: ()=>changeNameArea(onChangeArea), onClickRemover: ()=>deleteArea() }}/>
                ): openModalCreate && (
                    <Modal ContentModal={ContentModalAreaCreate} modalProps={{onClickFechar: ()=>{setOpenModalCreate(false)}, onChangeCreateArea: (e)=>setOnChangeCreateArea(e.target.value), onClickAplicar: ()=>createArea(onChangeCreateArea)}}/>
                )} */}

            </div>
    )
}

export default AreasPage
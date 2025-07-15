'use client'

import { ButtonPink } from "@/components/Buttons/ButtonPink"
import { ButtonUploadFile } from "@/components/Buttons/ButtonUploadFile"
import { Header } from "@/components/Header"
import { Title } from "@/components/Title"

import addIcon from "../../../public/icons/addIcon.svg"
import { useAmbienteStore } from "@/store/ambientesStore"
import { useEffect } from "react"
import SideBar from "@/components/Sidebar"
import Image from "next/image"

import iconViewMore from "../../../public/icons/IconViewMore.svg"
import { Modal } from "@/components/Modal"
import { ContentModalCreate } from "@/components/Modal/ContentModais/Areas/Post/Index"
import { ContentModalCreateAmbiente } from "@/components/Modal/ContentModais/Ambientes/Post/Index"

function AmbientesPage(){
    const {
        ambientes,
        selected,
        openModalCreate,
        openModalUpdate,
        setSelected,
        setOpenModalCreate,
        setOpenModalUpdate,
        getAllAmbientes
    } = useAmbienteStore()

    useEffect(()=>{
        getAllAmbientes()
    }, [])

    return(
        <div className={`${'overflow-hidden'}  bg-[#1C1C1C] min-h-screen w-full`}>
            <Header/>
            <div className="flex text-4xl font-medium">
                <SideBar/>

                <section className="my-14 mx-96 w-full mr-96">

                        <div className="border-b border-b-[#3B3B3B]">

                            <div className="flex justify-between mb-7 items-end ">

                                <div className="w-full mr-28">
                                    <Title label={'Ambientes'}/>
                                </div>
                        
                                <div className="flex items-end gap-x-4">
                                    {/* <ButtonUploadFile icon={iconUpload} handleFileChange={handleFileChange}/> */}
                                    <ButtonPink label={'create'} hasIcon={true} icon={addIcon} onClick={()=>{setOpenModalCreate(openModalCreate)}}/>
                                </div>
                            </div>
                        </div>

                        <div>
                            {ambientes.map((ambiente, index)=>(
                                <div className="py-9 border-b border-b-[#3B3B3B] flex items-end justify-between" key={index} >

                                    <div className="w-[45%] flex items-end justify-between">
                                        <div className="">
                                            <h4 className="text-[#E6E6E6] font-normal text-2xl">{ambiente.descricao}</h4>

                                            <div className="mt-4 text-[#C9C8C8]">
                                                <p className="text-xl">responsavel: {ambiente.responsavel_nome}</p>
                                                <p className="text-xl">sig: {ambiente.sig}</p>
                                                
                                            </div>
                                        </div>

                                        <div>
                                        <Image src={iconViewMore} alt="" width={24} onClick={()=>{
                                            setOpenModalUpdate(openModalUpdate)
                                            setSelected(ambiente)
                                            }}/>
                                        </div>

                                    </div>

                                </div>
                                ))}
    
                        </div>
                </section>
            </div>

            {openModalUpdate ? (
                <div></div>
                // <Modal ContentModal={ContentModalUpdateAmbiente} />
            ): openModalCreate && (
                <Modal ContentModal={ContentModalCreateAmbiente}/>
            )}
            
      
        </div>
    )
}

export default AmbientesPage
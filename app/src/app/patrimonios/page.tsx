'use client'

import { Header } from "@/components/Header"
import { ModalOficial } from "@/components/Modal"
import SideBar from "@/components/Sidebar"
import { Title } from "@/components/Title"
import { UsePatrimonioStore } from "@/store/patrimoniosStore"
import iconViewMore from "../../../public/icons/IconViewMore.svg"
import addIcon from "../../../public/icons/addIcon.svg"
import { useEffect } from "react"
import { ButtonPink } from "@/components/Buttons/ButtonPink"

function Patrimonios (){

    const {
        patrimonios,
        openModalCreate,
        openModalUpdate,
        selected,
        setSelected,
        setOpenModalCreate,
        setOpenModalUpdate,
        getPatrimonios
    } = UsePatrimonioStore()

    useEffect(()=>{
        getPatrimonios()
    }, [])


    return (
         <div className={`${openModalUpdate || openModalCreate && 'overflow-hidden'}  bg-[#1C1C1C] min-h-screen w-full`}>
            <Header/>
            <div className="flex text-4xl font-medium">
                <SideBar/>

                <section className="my-14 mx-96 w-full mr-96">

                        <div className="border-b border-b-[#3B3B3B]">

                            <div className="flex justify-between mb-7 items-end ">

                                <div className="w-full mr-28">
                                    <Title label={'Patrimônios'}/>
                                    {/* <InputPesquisa onChangeSearch={(e)=>setOnchangeSearch(e.target.value)} getFiltros={()=>getFiltrosFuncionario()}/> */}
                                </div>
                        
                                <div className="flex items-end gap-x-4">
                                    {/* <ButtonUploadFile icon={iconUpload} handleFileChange={handleFileChange}/> */}
                                    <ButtonPink label={'create'} hasIcon={true} icon={addIcon} onClick={()=>setOpenModalCreate(openModalCreate)}/>
                                </div>
                            </div>
                        </div>

                        <div>
                            {patrimonios.map((patrimonio, index)=>(
                                <div className=" py-9 border-b border-b-[#3B3B3B]" key={index}>
                                    <div className="w-[60%]">
                                        <h4 className="text-[#E6E6E6] font-normal text-2xl">{patrimonio.descricao}</h4>
                                        <div className="mt-4 text-[#C9C8C8]">

                                            <p className="text-xl">localização: {patrimonio.localizacao_nome}</p>

                                            <div className="flex justify-between items-center" >
                                                <p className=" text-xl">ni: {patrimonio.ni}</p>
                                                <img src={iconViewMore} alt="" width={24} onClick={()=>{
                                                    setSelected(patrimonio)
                                                    setOpenModalUpdate(openModalUpdate)
                                                }

                                                    }/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                </section>
            </div>
{/*             
            {openModalUpdate ? (
                <ModalOficial ContentModal={ContentModalUpdatePatrimonio} modalProps={{onClickFechar: ()=>setOpenModalUpdatePatrimonio(false), patrimonioSelected:selectedPatrimonio, getPatrimonios:()=>getPatrimonios()} }/>
            ) : openModalCreate &&(
                    <ModalOficial ContentModal={ContentModalCreatePatrimonio} modalProps={{onClickFechar: ()=>setOpenModalCreatePatrimonio(false), getPatrimonios:()=>getPatrimonios()} }/>
            )
            
            // : openModalUpdateFuncionario ? (
            //     <div>
            //     <ModalOficial ContentModal={ContentModalFuncionarioUpdate} 
            //     modalProps={{
            //         onClickFechar: ()=>setOpenModalUpdateFuncionario(false),
            //         selectedFuncionario:selectedFuncionario, 
            //         onClickRemover: ()=> deleteFuncionario(), 
            //         onClickAtualizar: ()=> atualizarFuncionario(),
            //         onChangeNome: (e)=>setOnchangeNome(e.target.value),
            //         onChangeEmail: (e)=>setOnchangeEmail(e.target.value),
            //         onChangeArea: (e)=>setOnchangeArea(e.target.value),
            //         onChangeCargo: (e)=>setOnchangeCargo(e.target.value),
            //         onChangeSn: (e)=>setOnchangeSn(e.target.value)
                    
            //         }}/>
            //     </div>
            // ): openModalUpdatePatrimonio && (
            //     // <ModalOficial ContentModal={ContentModalFuncionarioCreate} modalProps={{onClickFechar: ()=>setOpenModalCreateFuncionario(false)}}/>
            // )}
        } */}
        </div>
    )
}

export default Patrimonios
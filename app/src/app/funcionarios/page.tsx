'use client'
import { ButtonPink } from "@/components/Buttons/ButtonPink"
import { ButtonUploadFile } from "@/components/Buttons/ButtonUploadFile"
import { Header } from "@/components/Header"
import SideBar from "@/components/Sidebar"
import { Title } from "@/components/Title"
import { UseFuncionarioStore } from "@/store/funcionariosStore"
import { useEffect } from "react"
import iconViewMore from "../../../public/icons/IconViewMore.svg"
import addIcon from "../../../public/icons/addIcon.svg"
import { Modal } from "@/components/Modal"
import ContentModalFuncionarioGet from "@/components/Modal/ContentModais/Funcionarios/Get"

function Funcionarios () {

    const {
        funcionarios,
        selected,
        openModalCreate,
        openModalGet,
        openModalUpdate,
        setSelected,
        setOpenModalCreate,
        setOpenModalGet,
        setOpenModalUpdate,
        getAllFuncionarios,
        postFuncionarios,
        patchFuncionarios,
        deleteFuncionarios,
    } = UseFuncionarioStore()

    useEffect (()=> {
        getAllFuncionarios()
    }, [])


    return (
       
        <div className={`${openModalGet || openModalUpdate && 'overflow-hidden'}  bg-[#1C1C1C] min-h-screen w-full`}>
            <Header/>
            <div className="flex text-4xl font-medium">
                <SideBar/>
                <section className="my-14 mx-96 w-full mr-96">
                        <div className="border-b border-b-[#3B3B3B]">
                            <div className="flex justify-between mb-7 items-end ">
                                <div className="w-full mr-28">
                                    <Title label={'Funcionários'}/>
                                    {/* <InputPesquisa onChangeSearch={(e)=>setOnchangeSearch(e.target.value)} getFiltros={()=>getFiltrosFuncionario()}/> */}
                                </div>
                    
                                <div className="flex items-end gap-x-4">
                                    {/* <ButtonUploadFile icon={iconUpload} handleFileChange={handleFileChange}/> */}
                                    <ButtonPink label={'create'} hasIcon={true} icon={addIcon} onClick={()=>setOpenModalCreate(openModalCreate)}/>
                                </div>
                            </div>
                        </div>

                        <div>
                            {funcionarios.map((funcionario, index)=>(
                                <div className=" py-9 border-b border-b-[#3B3B3B]" onClick={
                                    ()=>{setOpenModalGet(openModalGet)
                                        setSelected(funcionario) }} key={index}>
                                    <div className="w-[60%]">
                                        <h4 className="text-[#E6E6E6] font-normal text-3xl">{funcionario.nome}</h4>
                                        <div className="mt-4 text-[#C9C8C8]">
                                            <p className="text-xl">email: {funcionario.email}</p>
                                            <div className="flex justify-between items-center" >
                                                <p className=" text-xl">area: {funcionario.area_nome}</p>
                                                <img src={iconViewMore} alt="" width={24} onClick={()=>{
                                                    setOpenModalUpdate(openModalUpdate)
                                                }}/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                </section>
            </div>
            
            {openModalGet ? (
                <Modal ContentModal={ContentModalFuncionarioGet} modalProps={{onClickFechar: ()=>setOpenModalGet(openModalGet), selectedFuncionario:selected} }/>
            ): openModalUpdate ? (
                <div>
                {/* <ModalOficial ContentModal={ContentModalFuncionarioUpdate} 
                modalProps={{
                    onClickFechar: ()=>setOpenModalUpdate(openModalUpdate),
                    selectedFuncionario:selected, 
                    onClickRemover: ()=> deleteFuncionarios(selected?.id!), 
                    onClickAtualizar: ()=> patchFuncionarios(selected),
                    onChangeNome: (e)=>setOnchangeNome(e.target.value),
                    onChangeEmail: (e)=>setOnchangeEmail(e.target.value),
                    onChangeArea: (e)=>setOnchangeArea(e.target.value),
                    onChangeCargo: (e)=>setOnchangeCargo(e.target.value),
                    onChangeSn: (e)=>setOnchangeSn(e.target.value)
                    
                    }}/> */}
                </div>
            ) : openModalCreate && (
                <div>
                    
                </div>
                // <ModalOficial ContentModal={ContentModalFuncionarioCreate} modalProps={{onClickFechar: ()=>setOpenModalCreate(openModalCreate)}}/>
            )}
        
        </div>
    )
}

export default Funcionarios
import { ButtonCinza } from "@/components/Buttons/ButtonCinza"
import { ButtonPink } from "@/components/Buttons/ButtonPink"
import Image from "next/image"

import closeIcon from "../../../../../../public/icons/closeIcon.svg"
import { useAmbienteStore } from "@/store/ambientesStore"
import { useEffect, useState } from "react"
import { UseFuncionarioStore } from "@/store/funcionariosStore"
import { InputModal } from "@/components/Modal/ItemsModal/InputModal"


function ContentModalCreateAmbiente (){

    const [name, setName] = useState('')
    const [sig, setSig] = useState('')
    const [responsavel, setResponsavel] = useState('')


    const {
        ambientes,
        openModalCreate,
        setOpenModalCreate,
        getPostAmbientes,
        
    } = useAmbienteStore()

    const {
        funcionarios,
        getAllFuncionarios
    } = UseFuncionarioStore()

    useEffect(()=>{
        getAllFuncionarios()
    }, [])
    
    return (
        <div className="w-full flex justify-center">
        
            <div className="w-[45%] mt-24">

                <div className="flex items-start border-b-[1px] border-b-[#3a3a3a] py-6 justify-between">
                    <div>
                        <h1 className="text-white text-4xl">Atualizar Ambiente</h1>
                        {/* <h4 className="text-[#C5C5C5] text-2xl">{}</h4> */}
                    </div>
                    <Image src={closeIcon} alt="" onClick={()=>setOpenModalCreate(openModalCreate)} className="w-6 mt-3" />
                </div>

                {/* Informações  */}
                <div className="text-[#D5D5D5] text-xl flex flex-col gap-y-3 font-normal">

                    <div className="flex justify-between items-center border-b-[1px] border-b-[#3a3a3a] py-6">
                        <InputModal selected={""} label={'nome'} onChange={(e)=>setName(e.target.value)}/>
                    </div>
                    <div className="flex justify-between items-center border-b-[1px] border-b-[#3a3a3a] py-6">
                        <InputModal selected={""} label={'sig'} onChange={(e)=>setSig(e.target.value)}/>
                    </div>

                    <div className="flex justify-between items-center border-b-[1px] border-b-[#3a3a3a] py-6">

                        <p>responsável:</p>
                        <select name="" id="" value={responsavel} onChange={(e)=>setResponsavel(e.target.value)} className="w-[60%] border-[1px] border-[#4E4E4E] px-6 py-3 rounded">
                            <option value="" disabled className="bg-[#1C1C1C border-[1px] border-[#3a3a3a]">selecione uma opção</option>
                            {funcionarios.map((responsavel, index)=>(
                                <option key={index} value={responsavel.id} className="bg-[#1C1C1C] border-[1px] border-[#3a3a3a]">{responsavel.nome}</option>
                            ))}
                        </select>
                    </div>
                </div>

                <div className="flex justify-end gap-x-6 mt-5">
                    <ButtonCinza label={'cancelar'} onClick={()=>setOpenModalCreate(openModalCreate)} />
                    <ButtonPink label={'criar'} hasIcon={false} onClick={()=>{
                        getPostAmbientes(Number(sig), name, Number(responsavel))
                        setOpenModalCreate(openModalCreate)
                        }} />
                </div>
    
            </div>
        
        </div>
    )
}

export {ContentModalCreateAmbiente}
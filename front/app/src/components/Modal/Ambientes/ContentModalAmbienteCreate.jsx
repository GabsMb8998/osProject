import { use, useEffect, useState } from "react";
import ButtonCinza from "../../Botoes/ButtonCinza";
import ButtonPink from "../../ButtonPink";
import InputModal from "../Funcionario/InputModal";
import closeIcon from "../../../images/icons/closeIcon.svg"

export default function ContentModalCreateAmbiente({onClickFechar, getAmbientes}){


     const [onChangeNameAmbiente, setOnChangeNameAmbiente] = useState('')
     const [onChangeSigAmbiente, setOnChangeSigAmbiente] = useState('')
     const [onChangeResponsavel, setOnChangeResponsavel] = useState('')

     const [responsaveis, setResponsaveis] = useState([])

     function getFuncionarios(){
        fetch('http://127.0.0.1:8000/api/funcionario/get')
        .then(response=>{
            if (!response.ok){
                console.log('deu erro')
            }
            console.log('deu certo')
            return response.json()
        }).then(data=>setResponsaveis(data))
     }

     useEffect(()=>{
        getFuncionarios()
     }, [])

    function createAmbiente(){


        fetch(`http://127.0.0.1:8000/api/ambientes/post`, {
            method: "POST",
            headers: {"Content-type": "application/json"},
            body: JSON.stringify({
                descricao: onChangeNameAmbiente,
                sig: onChangeSigAmbiente,
                responsavel: onChangeResponsavel
            })
            
        }).then(response=>{
            if(!response.ok){
                console.log('deu erroooo')
            }
            console.log('deu certo')
            getAmbientes()
            onClickFechar()
        })
    }

     

    return(
          <div className="w-full flex justify-center">
        
                <div className="w-[45%] mt-24">
    
                    <div className="flex items-start border-b-[1px] border-b-[#3a3a3a] py-6 justify-between">
                        <div>
                            <h1 className="text-white text-4xl">Atualizar Ambiente</h1>
                            {/* <h4 className="text-[#C5C5C5] text-2xl">{}</h4> */}
                        </div>
                        <img src={closeIcon} alt="" onClick={()=>onClickFechar()} className="w-6 mt-3" />
                    </div>
    
                    {/* Informações  */}
                    <div className="text-[#D5D5D5] text-xl flex flex-col gap-y-3 font-normal">

                        <div className="flex justify-between items-center border-b-[1px] border-b-[#3a3a3a] py-6">
                            <InputModal selected={""} label={'nome'} onChange={(e)=>setOnChangeNameAmbiente(e.target.value)}/>
                        </div>
                        <div className="flex justify-between items-center border-b-[1px] border-b-[#3a3a3a] py-6">
                            <InputModal selected={""} label={'sig'} onChange={(e)=>setOnChangeSigAmbiente(e.target.value)}/>
                        </div>

                        <div className="flex justify-between items-center border-b-[1px] border-b-[#3a3a3a] py-6">

                            <p>responsável:</p>
                            <select name="" id="" value={onChangeResponsavel} onChange={(e)=>setOnChangeResponsavel(e.target.value)} className="w-[60%] border-[1px] border-[#4E4E4E] px-6 py-3 rounded">
                                <option value="" disabled className="bg-[#1C1C1C border-[1px] border-[#3a3a3a]">selecione uma opção</option>
                                {responsaveis.map((responsavel, index)=>(
                                    <option key={index} value={responsavel.id} className="bg-[#1C1C1C] border-[1px] border-[#3a3a3a]">{responsavel.nome}</option>
                                ))}
                            </select>
                        </div>
                    </div>

                    <div className="flex justify-end gap-x-6 mt-5">
                        <ButtonCinza label={'cancelar'} onClick={()=>onClickFechar()} />
                        <ButtonPink label={'criar'} hasIcon={false} onClick={()=>createAmbiente()} />
                    </div>
        
                </div>
            
        </div>
        
    )
}
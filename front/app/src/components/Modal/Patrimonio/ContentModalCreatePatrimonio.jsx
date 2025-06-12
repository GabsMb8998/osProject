import { use, useEffect, useState } from "react";
import ButtonCinza from "../../Botoes/ButtonCinza";
import ButtonPink from "../../ButtonPink";
import InputModal from "../Funcionario/InputModal";
import closeIcon from "../../../images/icons/closeIcon.svg"

export default function ContentModalCreatePatrimonio({onClickFechar, getPatrimonios}){


     const [onChangeNamePatrimonio, setOnChangeNamePatrimonio] = useState('')
     const [onChangeNiPatrimonio, setOnChangeNiPatrimonio] = useState('')
     const [onChangeLocalizacaoPatrimonio, setOnChangeLocalizacaoPatrimonio] = useState('')

     const [localizacoes, setLocalizacoes] = useState([])

     function getAmbientes(){
        fetch('http://127.0.0.1:8000/api/ambientes/get')
        .then(response=>{
            if (!response.ok){
                console.log('deu erro')
            }
            console.log('deu certo')
            return response.json()
        }).then(data=>{
            setLocalizacoes(data)
            console.log(data.descricao, 'data')
        })
     }

     useEffect(()=>{
        getAmbientes()
     }, [])

    function createPatrimonio(){


        fetch(`http://127.0.0.1:8000/api/patrimonios/post`, {
            method: "POST",
            headers: {"Content-type": "application/json"},
            body: JSON.stringify({
                descricao: onChangeNamePatrimonio,
                ni: onChangeNiPatrimonio,
                localizacao: onChangeLocalizacaoPatrimonio
            })
            
        }).then(response=>{
            if(!response.ok){
                console.log('deu erroooo')
            }
            console.log('deu certo')
            getPatrimonios()
            onClickFechar()
        })
    } 

    return(
          <div className="w-full flex justify-center">
        
                <div className="w-[45%] mt-24">
    
                    <div className="flex items-start border-b-[1px] border-b-[#3a3a3a] py-6 justify-between">
                        <div>
                            <h1 className="text-white text-4xl">Adicionar Patrimônio</h1>
                            {/* <h4 className="text-[#C5C5C5] text-2xl">{}</h4> */}
                        </div>
                        <img src={closeIcon} alt="" onClick={()=>onClickFechar()} className="w-6 mt-3" />
                    </div>
    
                    {/* Informações  */}
                    <div className="text-[#D5D5D5] text-xl flex flex-col gap-y-3 font-normal">

                        <div className="flex justify-between items-center border-b-[1px] border-b-[#3a3a3a] py-6">
                            <InputModal selected={""} label={'nome'} onChange={(e)=>setOnChangeNamePatrimonio(e.target.value)}/>
                        </div>
                        <div className="flex justify-between items-center border-b-[1px] border-b-[#3a3a3a] py-6">
                            <InputModal selected={""} label={'sig'} onChange={(e)=>setOnChangeNiPatrimonio(e.target.value)}/>
                        </div>

                        <div className="flex justify-between items-center border-b-[1px] border-b-[#3a3a3a] py-6">

                            <p>localizacao:</p>
                            <select name="" id="" value={onChangeLocalizacaoPatrimonio} onChange={(e)=>setOnChangeLocalizacaoPatrimonio(e.target.value)} className="w-[60%] border-[1px] border-[#4E4E4E] px-6 py-3 rounded">
                                <option value="" disabled className="bg-[#1C1C1C border-[1px] border-[#3a3a3a]">selecione uma opção</option>
                                {localizacoes.map((localizacao, index)=>(
                                    <option key={index} value={localizacao.id} className="bg-[#1C1C1C] border-[1px] border-[#3a3a3a]">{localizacao.descricao}</option>
                                ))}
                            </select>
                        </div>
                    </div>

                    <div className="flex justify-end gap-x-6 mt-5">
                        <ButtonCinza label={'cancelar'} onClick={()=>onClickFechar()} />
                        <ButtonPink label={'criar'} hasIcon={false} onClick={()=>createPatrimonio()} />
                    </div>
        
                </div>
            
        </div>
        
    )
}
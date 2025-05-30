import { useEffect, useState } from "react"
import closeIcon from "../../../images/icons/closeIcon.svg"
import ButtonCinza from "../../Botoes/ButtonCinza"
import ButtonPink from "../../ButtonPink"
import InputModal from "./InputModal"

export default function ContentModalFuncionarioCreate({onClickFechar,}){
     
    const [onChangeNomeCreate, setOnchangeNomeCreate] = useState('')
    const [onChangeEmailCreate, setOnchangeEmailCreate] = useState('')
    const [onChangeAreaCreate, setOnchangeAreaCreate] = useState('')
    const [onChangeCargoCreate, setOnchangeCargoCreate] = useState('')
    const [onChangeSnCreate, setOnchangeSnCreate] = useState('')

    const [areasData, setAreasData] = useState([])


    function createFuncionario(){
        fetch('http://127.0.0.1:8000/api/funcionario/post', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify({
                nome: onChangeNomeCreate,
                email: onChangeEmailCreate,
                cargo: onChangeCargoCreate,
                sn: onChangeSnCreate,
                area: onChangeAreaCreate,
            })
        }).then(response=>{
            if(!response.ok){
                console.log('deu ruimmm')
            }
            console.log('deu certoo')
        })
    }

    useEffect(()=>{
        fetch('http://127.0.0.1:8000/api/area/get')
        .then(response=>{
            if(!response.ok){
                console.log('errp ao buscar areas')
            }
            return response.json()
        }).then(data=>{
            setAreasData(data)
            console.log(data)
        })
    }, [])

    
    return (
            <div className="w-full flex justify-center">
    
                <div className="w-[45%] mt-24">
    
                    <div className="flex items-start border-b-[1px] border-b-[#3a3a3a] py-6 justify-between">
                        <div>
                            <h1 className="text-white text-4xl">Criação Funcionário</h1>
                            {/* <h4 className="text-[#C5C5C5] text-2xl">{}</h4> */}
                        </div>
                        <img src={closeIcon} alt="" onClick={()=>onClickFechar()} className="w-6 mt-3" />
                    </div>
    
                    {/* Informações  */}
                    <div className="text-[#D5D5D5] text-xl flex flex-col gap-y-3 font-normal">

                        <div className="flex justify-between items-center border-b-[1px] border-b-[#3a3a3a] py-6">
                            <InputModal selectedFuncionario={''} label={'nome'} onChange={(e)=>setOnchangeNomeCreate(e.target.value)}/>
                        </div>

                        <div className="flex justify-between items-center border-b-[1px] border-b-[#3a3a3a] py-6">
                            <InputModal selectedFuncionario={''} label={'email'} onChange={(e)=>setOnchangeEmailCreate(e.target.value)}/>
                        </div>

                        <div className="flex justify-between items-center border-b-[1px] border-b-[#3a3a3a] py-6">

                            <p>area</p>
                            <select name="" id="" value={onChangeAreaCreate} onChange={(e)=>setOnchangeAreaCreate(e.target.value)} className="w-[60%]">
                                <option value="" disabled className="bg-[#1C1C1C border-[1px] border-[#3a3a3a]">selecione uma opção</option>
                                {areasData.map(area=>(
                                    <option key={area.id} value={area.id} className="bg-[#1C1C1C] border-[1px] border-[#3a3a3a]">{area.nome}</option>
                                ))}
                            </select>
                        </div>

                        <div className="flex justify-between items-center border-b-[1px] border-b-[#3a3a3a] py-6">
                            <InputModal selectedFuncionario={''} label={'cargo'} onChange={(e)=>setOnchangeCargoCreate(e.target.value)}/>
                        </div>

                        <div className="flex justify-between items-center py-6">
                            <InputModal selectedFuncionario={''} label={'sn'} onChange={(e)=>setOnchangeSnCreate(e.target.value)}/>
                        </div>
                    </div>

                    <div className="flex justify-end gap-x-6 mt-5">
                        <ButtonCinza label={'fechar'} onClick={()=>onClickFechar()} />
                        <ButtonPink label={'aplicar'} hasIcon={false} onClick={()=>createFuncionario()} />
                    </div>
      
                </div>
    
                </div>

     )
}
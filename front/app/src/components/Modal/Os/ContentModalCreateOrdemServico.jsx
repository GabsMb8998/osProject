import { use, useEffect, useState } from "react";
import ButtonCinza from "../../Botoes/ButtonCinza";
import ButtonPink from "../../ButtonPink";
import InputModal from "../Funcionario/InputModal";
import closeIcon from "../../../images/icons/closeIcon.svg"

export default function ContentModalCreateOrdemServico({onClickFechar}){


     const [onChangeTituloOrdemServico, setOnChangeTituloOrdemServico] = useState('')
     const [onChangeDescricaoOrdemServico, setOnChangeDescricaoOrdemServico] = useState('')
     const [onChangePatrimonioOrdemServico, setOnChangePatrimonioOrdemServico] = useState('')
     const [onChangeAmbienteOrdemServico, setOnChangeAmbienteOrdemServico] = useState('')
     const [onChangeFuncionarioOrdemServico, setOnChangeFuncionarioOrdemServico] = useState('')
     const [onChangeManuentorOrdemServico, setOnChangeManuentorOrdemServico] = useState('')
     const [onChangeExecutorOrdemServico, setOnChangeExecutorOrdemServico] = useState('')
     const [onChangePrioridadeOrdemServico, setOnChangePrioridadeOrdemServico] = useState('')

     const [ambientes, setAmbientes] = useState([])
     const [funcionarios, setFuncionarios] = useState([])
     const [manutentores, setManutentores] = useState([])
     const [executores, setExecutores] = useState([])
     const [patrimonios, setPatrimonios] = useState([])

     function getAmbientes(){
        fetch('http://127.0.0.1:8000/api/ambientes/get')
        .then(response=>{
            if (!response.ok){
                console.log('deu erro')
            }
            console.log('deu certo')
            return response.json()
        }).then(data=>{
            setAmbientes(data)
            console.log(data.descricao, 'data')
        })
     }
     function getPatrimonio(){
        fetch('http://127.0.0.1:8000/api/patrimonios/get')
        .then(response=>{
            if (!response.ok){
                console.log('deu erro')
            }
            console.log('deu certo')
            return response.json()
        }).then(data=>{
            setPatrimonios(data)
            console.log(data, 'data patrimonio')
        })
     }

     function getFuncionarios(){
              fetch('http://127.0.0.1:8000/api/funcionario/get')
        .then(response=>{
            if (!response.ok){
                console.log('deu erro')
            }
            console.log('deu certo')
            return response.json()
        }).then(data=>{
            const manutentoresData = data.filter(funcionario => funcionario.cargo?.toLowerCase() !== 'professor');
            const professoresData = data.filter(funcionario => funcionario.cargo?.toLowerCase() == 'professor');
            setManutentores(manutentoresData)
            setExecutores(professoresData)
            setFuncionarios(data)
        })
     }

     useEffect(()=>{
        getAmbientes()
        getFuncionarios()
        getPatrimonio()
     }, [])

    function createPatrimonio(){


        fetch(`http://127.0.0.1:8000/api/patrimonios/post`, {
            method: "POST",
            headers: {"Content-type": "application/json"},
            body: JSON.stringify({
                titulo: onChangeTituloOrdemServico,
                descricao: onChangeDescricaoOrdemServico,
                status: 'pendente',
                patrimonios: onChangePatrimonioOrdemServico,
                ambientes: onChangeAmbienteOrdemServico,
                prioridade: onChangePrioridadeOrdemServico,
                requisitante: onChangeFuncionarioOrdemServico,
                manutentor: onChangeManuentorOrdemServico,
                executor: onChangeExecutorOrdemServico,
                abertura: new Date().toISOString() 
        
            })
            
        }).then(response=>{
            if(!response.ok){
                console.log('deu erroooo')
            }
            console.log('deu certo')
            // getOrdermServicos()
            onClickFechar()
        })
    } 

    return(
          <div className="w-full flex justify-center">
        
                <div className="w-[45%] my-10">
    
                    <div className="flex items-start border-b-[1px] border-b-[#3a3a3a] py-6 justify-between">
                        <div>
                            <h1 className="text-white text-4xl">Criação de Ordem de Serviço</h1>
                            {/* <h4 className="text-[#C5C5C5] text-2xl">{}</h4> */}
                        </div>
                        <img src={closeIcon} alt="" onClick={()=>onClickFechar()} className="w-6 mt-3" />
                    </div>
    
                    {/* Informações  */}
                    <div className="text-[#D5D5D5] text-xl flex flex-col gap-y-3 font-normal">

                        <div className="flex justify-between items-center border-b-[1px] border-b-[#3a3a3a] py-6">
                            <InputModal selected={""} label={'Titulo'} onChange={(e)=>setOnChangeTituloOrdemServico(e.target.value)}/>
                        </div>
                        <div className="flex justify-between items-center border-b-[1px] border-b-[#3a3a3a] py-6">
                            <InputModal selected={""} label={'Descricao'} onChange={(e)=>setOnChangeDescricaoOrdemServico(e.target.value)}/>
                        </div>

                        <div className="flex justify-between items-center border-b-[1px] border-b-[#3a3a3a] py-6">

                            <p>ambiente:</p>
                            <select name="" id="" value={onChangeAmbienteOrdemServico} onChange={(e)=>setOnChangeAmbienteOrdemServico(e.target.value)} className="w-[60%] border-[1px] border-[#4E4E4E] px-6 py-3 rounded">
                                <option value="" disabled className="bg-[#1C1C1C border-[1px] border-[#3a3a3a]">selecione uma opção</option>
                                {ambientes.map((localizacao, index)=>(
                                    <option key={index} value={localizacao.id} className="bg-[#1C1C1C] border-[1px] border-[#3a3a3a]">{localizacao.descricao}</option>
                                ))}
                            </select>
                        </div>

                        <div className="flex justify-between items-center border-b-[1px] border-b-[#3a3a3a] py-6">

                            <p>patrimonio:</p>
                            <select name="" id="" value={onChangeAmbienteOrdemServico} onChange={(e)=>setOnChangeAmbienteOrdemServico(e.target.value)} className="w-[60%] border-[1px] border-[#4E4E4E] px-6 py-3 rounded">
                                <option value="" disabled className="bg-[#1C1C1C border-[1px] border-[#3a3a3a]">selecione uma opção</option>
                                {patrimonios.map((patrimonio, index)=>(
                                    <option key={index} value={patrimonio.id} className="bg-[#1C1C1C] border-[1px] border-[#3a3a3a]">{patrimonio.descricao}</option>
                                ))}
                            </select>
                        </div>

                        <div className="flex justify-between items-center border-b-[1px] border-b-[#3a3a3a] py-6">

                            <p>funcionário:</p>
                            <select name="" id="" value={onChangeFuncionarioOrdemServico} onChange={(e)=>setOnChangeFuncionarioOrdemServico(e.target.value)} className="w-[60%] border-[1px] border-[#4E4E4E] px-6 py-3 rounded">
                                <option value="" disabled className="bg-[#1C1C1C border-[1px] border-[#3a3a3a]">selecione uma opção</option>
                                {funcionarios.map((funcionario, index)=>(
                                    <option key={index} value={funcionario.id} className="bg-[#1C1C1C] border-[1px] border-[#3a3a3a]">{funcionario.nome}</option>
                                ))}
                            </select>
                        </div>

                        <div className="flex justify-between items-center border-b-[1px] border-b-[#3a3a3a] py-6">

                            <p>manutentor:</p>
                            <select name="" id="" value={onChangeManuentorOrdemServico} onChange={(e)=>setOnChangeManuentorOrdemServico(e.target.value)} className="w-[60%] border-[1px] border-[#4E4E4E] px-6 py-3 rounded">
                                <option value="" disabled className="bg-[#1C1C1C border-[1px] border-[#3a3a3a]">selecione uma opção</option>
                                {manutentores.map((manutentor, index)=>(
                                    <option key={index} value={manutentor.id} className="bg-[#1C1C1C] border-[1px] border-[#3a3a3a]">{manutentor.nome}</option>
                                ))}
                            </select>
                        </div>

                        <div className="flex justify-between items-center border-b-[1px] border-b-[#3a3a3a] py-6">

                            <p>executor:</p>
                            <select name="" id="" value={onChangeExecutorOrdemServico} onChange={(e)=>setOnChangeExecutorOrdemServico(e.target.value)} className="w-[60%] border-[1px] border-[#4E4E4E] px-6 py-3 rounded">
                                <option value="" disabled className="bg-[#1C1C1C border-[1px] border-[#3a3a3a]">selecione uma opção</option>
                                {executores.map((executor, index)=>(
                                    <option key={index} value={executor.id} className="bg-[#1C1C1C] border-[1px] border-[#3a3a3a]">{executor.nome}</option>
                                ))}
                            </select>
                        </div>

                        <div className="flex justify-between items-center border-b-[1px] border-b-[#3a3a3a] py-6">

                            <p>prioridade:</p>
                            <select name="" id="" value={onChangePrioridadeOrdemServico} onChange={(e)=>setOnChangePrioridadeOrdemServico(e.target.value)} className="w-[60%] border-[1px] border-[#4E4E4E] px-6 py-3 rounded">
                                <option value="" disabled className="bg-[#1C1C1C border-[1px] border-[#3a3a3a]">selecione uma opção</option>
                                <option value="baixa">baixa</option>
                                <option value="media">média</option>
                                <option value="alta">alta</option>
                            </select>
                        </div>
                    </div>

                    <div className="flex justify-end gap-x-6 mt-5 mb-10">
                        <ButtonCinza label={'cancelar'} onClick={()=>onClickFechar()} />
                        <ButtonPink label={'criar'} hasIcon={false} onClick={()=>createPatrimonio()} />
                    </div>
        
                </div>
            
        </div>
        
    )
}
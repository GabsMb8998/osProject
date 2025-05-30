import closeIcon from "../../../images/icons/closeIcon.svg"
import ButtonCinza from "../../Botoes/ButtonCinza"
import ButtonPink from "../../ButtonPink"
import InputModal from "./InputModal"

export default function ContentModalFuncionarioUpdate({onClickFechar, selectedFuncionario, onClickRemover, onClickAtualizar, onChangeNome, onChangeEmail, onChangeArea, onChangeCargo, onChangeSn}){
     return (
            <div className="w-full flex justify-center">
    
                <div className="w-[45%] mt-24">
    
                    <div className="flex items-start border-b-[1px] border-b-[#3a3a3a] py-6 justify-between">
                        <div>
                            <h1 className="text-white text-4xl">Alteração Funcionário</h1>
                            <h4 className="text-[#C5C5C5] text-2xl">{selectedFuncionario.nome}</h4>
                        </div>
                        <img src={closeIcon} alt="" onClick={()=>onClickFechar()} className="w-6 mt-3" />
                    </div>
    
                    {/* Informações  */}
                    <div className="text-[#D5D5D5] text-xl flex flex-col gap-y-3 font-normal">

                        <div className="flex justify-between items-center border-b-[1px] border-b-[#3a3a3a] py-6">
                            <InputModal selectedFuncionario={selectedFuncionario.nome} label={'nome'} onChange={onChangeNome}/>
                        </div>

                        <div className="flex justify-between items-center border-b-[1px] border-b-[#3a3a3a] py-6">
                            <InputModal selectedFuncionario={selectedFuncionario.email} label={'email'} onChange={onChangeEmail}/>
                        </div>

                        <div className="flex justify-between items-center border-b-[1px] border-b-[#3a3a3a] py-6">
                            <InputModal selectedFuncionario={selectedFuncionario.area_nome} label={'area'} onChange={onChangeArea}/>
                        </div>

                        <div className="flex justify-between items-center border-b-[1px] border-b-[#3a3a3a] py-6">
                            <InputModal selectedFuncionario={selectedFuncionario.cargo} label={'cargo'} onChange={onChangeCargo}/>
                        </div>

                        <div className="flex justify-between items-center py-6">
                            <InputModal selectedFuncionario={selectedFuncionario.sn} label={'sn'} onChange={onChangeSn}/>
                        </div>
                    </div>

                    <div className="flex justify-end gap-x-6 mt-5">
                        <ButtonCinza label={'remover'} onClick={()=>onClickRemover()} />
                        <ButtonPink label={'aplicar'} hasIcon={false} onClick={()=>onClickAtualizar()} />
                    </div>
      
                </div>
    
                </div>

     )
}
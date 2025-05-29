import closeIcon from "../../../images/icons/closeIcon.svg"

export default function ContentModalFuncionarioGet({onClickFechar, selectedFuncionario}){

    console.log(selectedFuncionario, 'printt')
    return (
        <div className="">

            <div className="flex items-start">
                <div>
                    <h1 className="text-white text-4xl">Informações Funcionário</h1>
                    <h4 className="text-[#C5C5C5] text-3xl">{selectedFuncionario.nome}</h4>
                </div>
                <img src={closeIcon} alt="" onClick={()=>onClickFechar()} className="w-6" />

            </div>
        </div>
    )
}
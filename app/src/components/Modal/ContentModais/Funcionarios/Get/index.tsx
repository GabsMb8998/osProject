import { FuncionarioState } from "@/store/funcionariosStore"
import closeIcon from "../../../../../../public/icons/closeIcon.svg"
import Image from "next/image"

interface ModalGetFuncionarioProps {
    onClickFechar: () => void
    selectedFuncionario: FuncionarioState
}

export default function ContentModalFuncionarioGet({onClickFechar, selectedFuncionario}: ModalGetFuncionarioProps){

    console.log(selectedFuncionario, 'printt')
    return (
        <div className="w-full flex justify-center">

            <div className="w-[45%] mt-36">

                <div className="flex items-start border-b-[1px] border-b-[#616161] py-6 justify-between">
                    <div>
                        <h1 className="text-white text-4xl">Informações Funcionário</h1>
                        <h4 className="text-[#C5C5C5] text-2xl">{selectedFuncionario.nome}</h4>
                    </div>
                    <Image src={closeIcon} alt="" onClick={()=>onClickFechar()} className="w-6 mt-3" />
                </div>

                {/* Informações  */}
                <div className="text-[#D5D5D5] text-xl flex flex-col gap-y-3 my-6 font-normal">
                    <p className="">email: {selectedFuncionario.email}</p>
                    <p className="">area: {selectedFuncionario.area_nome}</p>
                    <p className="">cargo: {selectedFuncionario.cargo}</p>
                    <p className="">sn: {selectedFuncionario.sn}</p>
                </div>

            </div>


        </div>
    )
}
import ButtonPink from "../ButtonPink";
import closeIcon from "../../images/icons/closeIcon.svg"

export default function ContentModalArea({name, onClickAplicar, onClickRemover, onClickFechar, onChangeArea}){
    return(
        <div className="w-[50%] h-[45%] bg-[#242424] border border-[#474747] rounded-xl">
            <div className="border border-[#3B3B3B]">
                <div className="my-6 mx-10 flex justify-between items-center">
                    <p className="text-[#D3D3D3] font-medium text-2xl">{name}</p>

                    <img src={closeIcon} alt="" onClick={()=>onClickFechar()} className="w-6" />
                </div>
            </div>

            <div className="mx-10 mr-24">
                <div className="flex flex-col my-12 gap-y-5">
                    <label className="text-[#C4C4C4] text-2xl">Alterar nome</label>
                    <input type="text" className="bg-[#3A3A3A] py-4 rounded px-3 text-lg text-[#C4C4C4] font-medium" onChange={onChangeArea}/>
                </div>

                <div className=" flex justify-end">
                    <ButtonPink label={'aplicar'} hasIcon={false} />
                </div>
            </div>

        </div>
    )
}
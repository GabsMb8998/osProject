
import Image from 'next/image'
import closeIcon from '../../../../../../public/icons/closeIcon.svg'
import { ButtonCinza } from '@/components/Buttons/ButtonCinza'
import { ButtonPink } from '@/components/Buttons/ButtonPink'
import { useAreaStore } from '@/store/areaStore'
import { useState } from 'react'

function ContentModalCreate(){

    const [name, setName] = useState('')

    const {
        openModalCreate,
        postArea,
        setOpenModalCreate
    } = useAreaStore()

    return (
         <div className="w-[50%] h-[36%] bg-[#242424] border border-[#474747] rounded-xl">
            <div className="border border-[#3B3B3B]">
                <div className="my-6 mx-10 flex justify-between items-center">
                    <p className="text-[#D3D3D3] font-medium text-2xl">Criar nova area</p>
                    <Image src={closeIcon} alt="" onClick={()=>setOpenModalCreate(openModalCreate)} className="w-6" />
                </div>
            </div>

            <div className="mx-10 mr-24">
                <div className="flex flex-col my-12 gap-y-5">
                    <label className="text-[#C4C4C4] text-2xl">name:</label>
                    <input type="text" className="bg-[#3A3A3A] py-4 rounded px-3 text-lg text-[#C4C4C4] font-medium" onChange={(e)=>setName(e.target.value)}/>
                </div>

                <div className=" flex justify-end gap-x-5">
                    <ButtonCinza label={'cancelar'} onClick={()=>setOpenModalCreate(openModalCreate)} />
                    <ButtonPink label={'criar'} hasIcon={false} onClick={()=>{
                        postArea(name)
                        setOpenModalCreate(openModalCreate)
                    }} />
                </div>
            </div>

        </div>
    )
}

export {ContentModalCreate}
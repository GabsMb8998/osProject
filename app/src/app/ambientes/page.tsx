import { ButtonPink } from "@/components/ButtonPink"
import { ButtonUploadFile } from "@/components/ButtonUploadFile"
import { Header } from "@/components/Header"
import { Title } from "@/components/Title"

import addIcon from "../../../public/icons/addIcon.svg"
import { useAmbienteStore } from "@/store/ambientesStore"
function AmbientesPage(){

    const {
        
    } = useAmbienteStore

    return(
        <div className={`${'overflow-hidden'}  bg-[#1C1C1C] min-h-screen w-full`}>
            <Header/>
            <div className="flex text-4xl font-medium">
                {/* <SideBar/> */}

                <section className="my-14 mx-96 w-full mr-96">

                        <div className="border-b border-b-[#3B3B3B]">

                            <div className="flex justify-between mb-7 items-end ">

                                <div className="w-full mr-28">
                                    <Title label={'Ambientes'}/>
                                </div>
                        
                                <div className="flex items-end gap-x-4">
                                    {/* <ButtonUploadFile icon={iconUpload} handleFileChange={handleFileChange}/> */}
                                    <ButtonPink label={'create'} hasIcon={true} icon={addIcon} onClick={()=>{setOpenModalCreateAmbiente(true)}}/>
                                </div>
                            </div>
                        </div>

                        <div>
                            {
                                ambientesData.map((ambiente, index)=>(
                                    <div className="py-9 border-b border-b-[#3B3B3B] flex items-end justify-between" key={index} >

                                        <div className="w-[45%] flex items-end justify-between">
                                            <div className="">
                                                <h4 className="text-[#E6E6E6] font-normal text-2xl">{ambiente.descricao}</h4>

                                                <div className="mt-4 text-[#C9C8C8]">
                                                    <p className="text-xl">responsavel: {ambiente.responsavel_nome}</p>
                                                    <p className="text-xl">sig: {ambiente.sig}</p>
                                                    
                                                </div>
                                            </div>

                                            <div>
                                            <img src={iconViewMore} alt="" width={24} onClick={()=>{
                                                setOpenModalUpdateAmbiente(true)
                                                setSelectedAmbiente(ambiente)
                                                }}/>
                                            </div>

                                        </div>

                                    </div>
                                    ))
                            }
    
                        </div>
                </section>
            </div>

            {openModalUpdateAmbiente ? (
                <ModalOficial ContentModal={ContentModalUpdateAmbiente} modalProps={{onClickFechar: ()=>setOpenModalUpdateAmbiente(false), ambienteSelected: selectedAmbiente, getAmbientes: ()=>getAmbientes()}}/>
            ): openModalCreateAmbiente && (
                    <ModalOficial ContentModal={ContentModalCreateAmbiente} modalProps={{onClickFechar: ()=>setOpenModalCreateAmbiente(false), getAmbientes: ()=>getAmbientes()}}/>
            )}
            
      
        </div>
    )
}

export default AmbientesPage
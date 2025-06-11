import ButtonPink from "../components/ButtonPink";
import ButtonUploadFile from "../components/ButtonUploadFile";
import Header from "../components/Header";
import InputPesquisa from "../components/InputPesquisa";
import SideBar from "../components/sidebar/Sidebar";
import Titulo from "../components/Titulo";

// images 
import iconUpload from "../images/icons/uploadIcon.svg"
import addIcon from "../images/icons/addIcon.svg"
import { useEffect, useState } from "react";
import iconViewMore from "../images/icons/iconViewMore.svg"
import Modal from "../components/Modal/Modal";
import ContentModalUpdateAmbiente from "../components/Modal/Ambientes/ContentModalAmbienteUpdate";
import ModalOficial from "../components/Modal/ModalOficial";
import ContentModalCreateAmbiente from "../components/Modal/Ambientes/ContentModalAmbienteCreate";


export default function AmbientePage(){

    const [ambientesData, setAmbientesData] = useState([])

    const [openModalUpdateAmbiente, setOpenModalUpdateAmbiente] = useState(false)
    const [openModalCreateAmbiente, setOpenModalCreateAmbiente] = useState(false)

    const [selectedAmbiente, setSelectedAmbiente] = useState([])

     const  handleFileChange = (e) =>{
        setFile(e.target.files[0])
    }

    function getAmbientes(){
        fetch('http://127.0.0.1:8000/api/ambientes/get')
        .then(response=>{
            if(!response.ok){
                console.log('deu erroooo')
            }
            return response.json()
        }).then(data=>{
            setAmbientesData(data)
            console.log(data)
        })
    }

    useEffect(()=>{

        getAmbientes()

    },[])

        function uploadExcel(){
        
        const formData = new FormData()
        
        formData.append("file", file)
        formData.append("table", "area")
        
        fetch('http://127.0.0.1:8000/api/upload/areas', {
            method: "POST", 
            body: formData
        }).then(response=>{
            if(!response.ok){
                throw new Error('Não foi fazer o upload do arquivo' + response.statusText);
            }
            console.log("upload realizado com sucesso")
            getAreas()
        })
        
    }


    
    return(
         <div className={`${'overflow-hidden'}  bg-[#1C1C1C] min-h-screen w-full`}>
                    <Header/>
                    <div className="flex text-4xl font-medium">
                        <SideBar/>
        
                        <section className="my-14 mx-96 w-full mr-96">
        
                               <div className="border-b border-b-[#3B3B3B]">
        
                                    <div className="flex justify-between mb-7 items-end ">
        
                                        <div className="w-full mr-28">
                                            <Titulo label={'Ambientes'}/>
                                        </div>
                                
                                        <div className="flex items-end gap-x-4">
                                            <ButtonUploadFile icon={iconUpload} handleFileChange={handleFileChange}/>
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
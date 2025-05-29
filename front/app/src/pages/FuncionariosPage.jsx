// images 
import iconUpload from "../images/icons/uploadIcon.svg"
import addIcon from "../images/icons/addIcon.svg"
import iconViewMore from "../images/icons/iconViewMore.svg"

import Header from "../components/Header";
import SideBar from "../components/sidebar/Sidebar";
import Titulo from "../components/Titulo";
import ButtonPink from "../components/ButtonPink";
import ButtonUploadFile from "../components/ButtonUploadFile";
import { useEffect, useState } from "react";
import InputPesquisa from "../components/InputPesquisa";
import ModalOficial from "../components/Modal/ModalOficial";
import ContentModalFuncionarioGet from "../components/Modal/Funcionario/ContentModalFuncionarioGet";

export default function FuncionariosPage(){

    const [funcionariosData, setFuncionariosData] = useState([])
    const [onChangeSearch, setOnchangeSearch] = useState('')

    const [openModalGetFuncionario, setOpenModalGetFuncionario] = useState('')
    const [openModalUpdateFuncionario, setOpenModalUpdateFuncionario] = useState('')

    const [selectedFuncionario, setSelectedFuncionario] = useState([])

    
    useEffect(() => {
        if (openModalGetFuncionario || openModalUpdateFuncionario) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }

        }, [openModalGetFuncionario, openModalUpdateFuncionario])

    function getFiltrosFuncionario(){
        const verifyHasNumber= /\d/.test(onChangeSearch)

        fetch(`http://127.0.0.1:8000/api/filtros/funcionario/?${verifyHasNumber ? `sn=${onChangeSearch}`: `nome=${onChangeSearch}`}`)
        .then(response=>{
            if(!response.ok){
                console.log('errooo')
            }
            return response.json()
        }).then(data=>{
            console.log(data)
        })
    }

    function getFuncionarios(){
        fetch('http://127.0.0.1:8000/api/funcionario/get')
        .then(response=>{
            if(!response.ok){
                console.log('errroooo')
            }
            return response.json()
        }).then(data=>{
            setFuncionariosData(data)
        })
    }

    console.log(funcionariosData.map(funcionario=>{
        console.log(funcionario)
    }))

    useEffect(()=>{
        getFuncionarios()
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
    
    const  handleFileChange = (e) =>{
        setFile(e.target.files[0])
    }


    return (
        <div className={`${openModalGetFuncionario || openModalUpdateFuncionario && 'overflow-hidden'}  bg-[#1C1C1C] min-h-screen w-full`}>
            <Header/>
            <div className="flex text-4xl font-medium">
                <SideBar/>

                <section className="my-14 mx-96 w-full mr-96">

                       <div className="border-b border-b-[#3B3B3B]">

                            <div className="flex justify-between mb-7 items-end ">

                                <div className="w-full mr-28">
                                    <Titulo label={'Funcionários'}/>
                                    <InputPesquisa onChangeSearch={(e)=>setOnchangeSearch(e.target.value)} getFiltros={()=>getFiltrosFuncionario()}/>

                                </div>
                        
                                <div className="flex items-end gap-x-4">
                                    <ButtonUploadFile icon={iconUpload} handleFileChange={handleFileChange}/>
                                    <ButtonPink label={'create'} hasIcon={true} icon={addIcon} onClick={()=>setOpenModalCreate(true)}/>
                                </div>
                            </div>
                        </div>

                        <div>
                            {funcionariosData.map((funcionario, index)=>(
                                <div className=" py-9 border-b border-b-[#3B3B3B]" onClick={
                                    ()=>{
                                        setOpenModalGetFuncionario(true)
                                        setSelectedFuncionario(funcionario)
                                    }
                                    
                                    } key={index}>

                                    <div className="w-[60%]">
                                        <h4 className="text-[#E6E6E6] font-normal text-3xl">{funcionario.nome}</h4>
                                        <div className="mt-4 text-[#C9C8C8]">

                                            <p className="text-xl">email: {funcionario.email}</p>

                                            <div className="flex justify-between items-center" >
                                                <p className=" text-xl">area: {funcionario.area_nome}</p>
                                                <img src={iconViewMore} alt="" width={24} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                </section>
            </div>
            
            {openModalGetFuncionario ? (
                <ModalOficial ContentModal={ContentModalFuncionarioGet} modalProps={{onClickFechar: ()=>setOpenModalGetFuncionario(false), selectedFuncionario:selectedFuncionario} }/>
            ): openModalUpdateFuncionario && (
                <div>

                </div>
            )}

        </div>
    )
}
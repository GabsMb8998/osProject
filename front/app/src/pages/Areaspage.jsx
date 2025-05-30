import { useEffect, useState } from "react";

// images 
import addIcon from "../images/icons/addIcon.svg"
import iconViewMore from "../images/icons/iconViewMore.svg"
import iconUpload from "../images/icons/uploadIcon.svg"


// componentes 
import Header from "../components/Header";
import SideBar from "../components/sidebar/Sidebar";
import Titulo from "../components/Titulo";
import ButtonPink from "../components/ButtonPink";
import Modal from "../components/Modal/Modal";
import ContentModalArea from "../components/Modal/ContentModalAreaUpdate";
import ButtonCinza from "../components/Botoes/ButtonCinza";
import ButtonUploadFile from "../components/ButtonUploadFile";
import ContentModalAreaCreate from "../components/Modal/ContentModalAreaCreate";

export default function AreasPage(){

    const [dataAreas, setDataAreas] = useState([])

    const [openModalUpdate, setOpenModalUpdate] = useState(false)
    const [openModalCreate, setOpenModalCreate] = useState(false)

    const [selectedArea, setSelectedArea] = useState()

    const [onChangeArea, setOnchangeArea ] = useState()
    const [onChangeCreateArea, setOnChangeCreateArea ] = useState()

    const [file, setFile ] = useState()

    useEffect(() => {
        if (openModalCreate || openModalUpdate) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }

}, [openModalCreate, openModalUpdate])

    function getAreas(){
        fetch('http://127.0.0.1:8000/api/area/get',).then(response=>{
            if (!response.ok){
                console.error('não foi possivel buscar os dados')
            }
            return response.json()
        }).then(data=>{
            console.log(data)
            setDataAreas(data)
            // console.log(dataAreas.map((area)=>{
            //     area
            // }))
        })
    }
    useEffect(()=>{
        getAreas()
    }, [])
    

    function createArea(nameNewArea){
        if(nameNewArea != ""){
            fetch('http://127.0.0.1:8000/api/area/post', {
                method: 'POST',
                headers: {
                    "Content-Type" : "application/json"
                },
                body: JSON.stringify({
                    nome: nameNewArea
                })
    
            }).then(response=>{
                if(!response.ok){
                    console.log('errooooo')
                }
            })
        }
    }


    function changeNameArea(newName){
        if (newName != ""){
            fetch(`http://127.0.0.1:8000/api/area/patch/${selectedArea.id}`, {
                method: 'PATCH',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    nome: newName,
             
                })
            }).then(response=>{
                if(!response.ok){
                    // notifyError('Esse usuário já existe')
                    throw new Error('Não foi possivel atualizar o nome da area: ' + response.statusText);
                }
                console.log("mudança feita com sucesso")
                getAreas()
                setOpenModalUpdate(false)
                // notifySuccess()
                // navigate('/')
                // return response.json()
            })
        }
    }

    function deleteArea(){
        fetch(`http://127.0.0.1:8000/api/area/delete/${selectedArea.id}`, {
            method: 'DELETE'
        }).then(response=>{
              if(!response.ok){
                    // notifyError('Esse usuário já existe')
                    throw new Error('Não foi possivel deletar a area' + response.statusText);
                }
                console.log("area deletada com sucesso!")
                getAreas()
                setOpenModalUpdate(false)
        })
    }
    console.log(file, 'file')

    function uploadExcel(){
    
        const formData = new FormData()

        formData.append("file", file)
        formData.append("table", "area")

        fetch('http://127.0.0.1:8000/api/upload', {
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

    useEffect(()=>{
        if (file){
        uploadExcel()
            
        }
    }, [file])


    return(
          <div className={`${openModalUpdate || openModalCreate && 'overflow-hidden'} bg-[#1C1C1C] min-h-screen`}>
                    <Header/>
                    <div className="flex text-4xl font-medium">
                        <SideBar/>    
        
                        <section className="my-10 mx-96 w-full mr-96">
                            <div className="border-b border-b-[#3B3B3B]">

                                <div className="flex justify-between mb-7 items-end pl-8">
                                    <Titulo label={'areas'}/>

                                    <div className="flex items-end gap-x-4">
                                        <ButtonUploadFile icon={iconUpload} handleFileChange={handleFileChange}/>
                                        <ButtonPink label={'create'} hasIcon={true} icon={addIcon} onClick={()=>setOpenModalCreate(true)}/>

                                    </div>
                                </div>
                            </div>

                            <div className="mt-10">
                                {dataAreas.map((area, index)=>(
                                    <div key={index} className="bg-[#313131] text-[#C5C5C5] my-4 py-5 text-[22px] px-10 rounded font-normal flex justify-between" 
                                    onClick={()=>{
                                        setSelectedArea(area)
                                        setOpenModalUpdate(true)
                                        }}>
                                        <p>{area.nome}</p>
                                        <img src={iconViewMore} alt="" width={22} />
                                    </div>
                                ))}
                            </div>
                        </section>
                    </div>

                    {openModalUpdate ?(
                        <Modal ContentModal={ContentModalArea} modalProps={{name: selectedArea.nome, onClickFechar: ()=>{setOpenModalUpdate(false)}, onChangeArea: (e)=>setOnchangeArea(e.target.value), onClickAplicar: ()=>changeNameArea(onChangeArea), onClickRemover: ()=>deleteArea() }}/>
                    ): openModalCreate && (
                        <Modal ContentModal={ContentModalAreaCreate} modalProps={{onClickFechar: ()=>{setOpenModalCreate(false)}, onChangeCreateArea: (e)=>setOnChangeCreateArea(e.target.value), onClickAplicar: ()=>createArea(onChangeCreateArea)}}/>
                    )}

                </div>
    )
}
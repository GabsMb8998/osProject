import ButtonPink from "../components/ButtonPink";
import ButtonUploadFile from "../components/ButtonUploadFile";
import Header from "../components/Header";
import InputPesquisa from "../components/InputPesquisa";
import SideBar from "../components/sidebar/Sidebar";
import Titulo from "../components/Titulo";

// images 
import iconUpload from "../images/icons/uploadIcon.svg"
import addIcon from "../images/icons/addIcon.svg"

export default function AmbientePage(){

     const  handleFileChange = (e) =>{
        setFile(e.target.files[0])
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
                                            <ButtonPink label={'create'} hasIcon={true} icon={addIcon} onClick={()=>{}}/>
                                        </div>
                                    </div>
                                </div>
        
                                <div>
                                    {/* {funcionariosData.map((funcionario, index)=>(
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
                                                        <img src={iconViewMore} alt="" width={24} onClick={()=>{
                                                            setOpenModalUpdateFuncionario(true)
                
                                                        }
        
                                                            }/>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))} */}
                                </div>
                        </section>
                    </div>
                    
                    {/* {openModalGetFuncionario ? (
                        <ModalOficial ContentModal={ContentModalFuncionarioGet} modalProps={{onClickFechar: ()=>setOpenModalGetFuncionario(false), selectedFuncionario:selectedFuncionario} }/>
                    ): openModalUpdateFuncionario ? (
                        <div>
                        <ModalOficial ContentModal={ContentModalFuncionarioUpdate} 
                        modalProps={{
                            onClickFechar: ()=>setOpenModalUpdateFuncionario(false),
                            selectedFuncionario:selectedFuncionario, 
                            onClickRemover: ()=> deleteFuncionario(), 
                            onClickAtualizar: ()=> atualizarFuncionario(),
                            onChangeNome: (e)=>setOnchangeNome(e.target.value),
                            onChangeEmail: (e)=>setOnchangeEmail(e.target.value),
                            onChangeArea: (e)=>setOnchangeArea(e.target.value),
                            onChangeCargo: (e)=>setOnchangeCargo(e.target.value),
                            onChangeSn: (e)=>setOnchangeSn(e.target.value)
                            
                            }}/>
                        </div>
                    ): openModalCreateFuncionario && (
                        <ModalOficial ContentModal={ContentModalFuncionarioCreate} modalProps={{onClickFechar: ()=>setOpenModalCreateFuncionario(false)}}/>
                    )} */}
        
                </div>
    )
}
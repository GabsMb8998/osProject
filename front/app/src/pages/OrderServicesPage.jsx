import ButtonUploadFile from "../components/ButtonUploadFile";
import Button from "../components/ButtonUploadFile";
import Header from "../components/Header";
import SideBar from "../components/sidebar/Sidebar";
import ButtonPink from "../components/ButtonPink";

// images 
import addIcon from "../images/icons/addIcon.svg"
import searchIcon from "../images/icons/searchIcon.svg"
import uploadIcon from "../images/icons/uploadIcon.svg"
import expandedIcon from "../images/icons/expandedIcon.svg"
import Titulo from "../components/Titulo";



export default function OrderServicesPage({}){
    return(

        <div className="bg-[#1C1C1C] h-screen">
            <Header/>
            <div className="flex text-4xl font-medium">
                <SideBar/>    

                <section className="my-10 mx-96 w-full mr-96">
                    <div className="border-b border-b-[#3B3B3B]">
                        <Titulo label={'Orders Services'}/>

                        <div className="flex items-end my-7 mb-12 gap-x-6 ">
                            {/* barra de pesquisa  */}
                            <div className="w-[55%]  relative">
                                <input type="text" placeholder="search for a order services" className="bg-[#2B2B2B] rounded text-xl py-4 px-5 w-full placeholder:text-[#7E7E7E] placeholder:font-normal text-white" />
                                <img src={searchIcon} alt="" className="absolute bottom-[17px] right-6 w-6" />   
                            </div>

                            {/* botoes upload e criar os  */}
                            <div className="flex items-end gap-x-4">   
                                <ButtonUploadFile icon={uploadIcon}/>
                                <ButtonPink label="create" hasIcon={true} icon={addIcon}/>
                            </div>
                        </div>
                    </div>


                    <div className="w-full border-b border-b-[#3B3B3B] py-6">

                        <div className="w-[54%]">
                            <div>
                                <h4 className="text-4xl text-white">Formatação de Computador</h4>
                            </div>

                            <div className="my-8 text-xl text-[#9D9D9D] font-normal">
                                <p>ambiente: A105</p>
                                <p>manutentor: Lindomar Batistão</p>
                            </div>

                            <div className="flex items-center justify-between ">

                                <div className="flex gap-x-6 items-center">
                                    <div>
                                        <p className="bg-[#2D9AFF] flex justify-center items-center text-[#1C1C1C] w-40  text-xl py-2 rounded font-semibold">pendente</p> 
                                    </div>

                                    <div>
                                        <p className="text-xl text-[#D0D0D0] font-semibold">aberto em: 08/05/2025</p>
                                    </div>
                                </div>

                                <div>
                                    <img src={expandedIcon} alt="" width={28} />
                                </div>
                            </div>

                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}


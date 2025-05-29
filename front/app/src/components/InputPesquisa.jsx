import searchIcon from "../images/icons/searchIcon.svg"

export default function InputPesquisa({onChangeSearch, getFiltros}){

    const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      getFiltros();
    }
  };


    return(

        <div className="relative">
            <input onKeyDown={handleKeyDown} onChange={onChangeSearch} type="text" placeholder="search for a order services" className="bg-[#2B2B2B] placeholder:text-[#7E7E7E] text-[#BDBDBD] py-4 px-5 rounded text-2xl w-full font-normal mt-4" />
            <img src={searchIcon} alt="" className="absolute bottom-4 right-6"/>
        </div>
    )
}
export default function InputModal({selectedFuncionario, label, onChange}){
    return(
        <>
            <p className="">{label}:</p>
            <input onChange={onChange} type="text" placeholder={selectedFuncionario} className="placeholder:text-[#BABABA] border-[1px] border-[#4E4E4E] w-[60%] px-6 py-3 rounded text-base "/>  
    
        </>

    )
}
import userImage from "../images/user.png"
import notificacaoIcon from "../images/icons/iconNotificacao.svg"


export default function Header({username, img}){
    return(
        <header className="flex justify-end border border-[1px] border-[#3B3B3B] items-center gap-x-5 py-3 px-52">
            <div className="flex items-center gap-x-4">
                <p className="text-[#FFFFFF] text-lg font-light">Gabriela Montagner</p>
                <img src={userImage} alt="" className="w-14" />
            </div>

            <div>
                <img src={notificacaoIcon} alt="" className="w-6" />
            </div>
        </header>
    )
}
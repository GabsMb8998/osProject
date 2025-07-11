import Image from "next/image"
import userImage from "../../../public/icons/user.png"
import notificacaoIcon from "../../../public/icons/iconNotificacao.svg"

interface HeaderProps {
    username?: string,
}

function Header({username}:HeaderProps){
    return(
        <header className="flex justify-end border-[1px] border-[#3B3B3B] items-center gap-x-5 py-3 px-52">
            <div className="flex items-center gap-x-4">
                <p className="text-[#FFFFFF] text-lg font-light">Gabriela Montagner</p>
                <Image
                    src={userImage}
                    alt={''}
                    className="w-14"
                />
                {/* <img src={userImage} alt="" className="w-14" /> */}
            </div>

            <div>
                  <Image
                    src={notificacaoIcon}
                    alt={''}
                    className="w-6"
                />
                {/* <img src={notificacaoIcon} alt="" className="w-6" /> */}
            </div>
        </header>
    )
}

export {Header}
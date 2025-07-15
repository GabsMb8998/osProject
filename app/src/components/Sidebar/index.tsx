
import { HomeIcon } from "../../../public/icons/HomeIcon";
import { PatrimoniosIcon } from "../../../public/icons/PatrimoniosIcon";
import { OsIcon } from "../../../public/icons/OsIcon";
import { ItemSideBar } from "./SidebarItem";
import { useRouter } from "next/navigation";


export default function SideBar() {


    // const [open, setOpen] = useState(true);
    const itemSelected = localStorage.getItem('selectedSideBar')
    const router = useRouter()

    function changeSelected(selected: string){
        localStorage.setItem('selectedSideBar', `${selected}`)
        router.push(`${selected}`)
    }


    return (
        <aside className={`w-[330px] h-screen fixed`}>
            <div className="mx-10 py-8 flex flex-col gap-y-6">
                <ItemSideBar
                    icon={<HomeIcon width={22} selected={itemSelected === 'home'} />}
                    selected={itemSelected === 'home'}
                    label="home"
                    onClick={() =>changeSelected('home')}
                />
                <ItemSideBar
                    icon={<OsIcon selected={itemSelected === 'irderServices'} />}
                    selected={itemSelected == 'orderServices'}
                    label="os"
                    onClick={() => changeSelected('orderServices')}
                />
                <ItemSideBar
                    icon={<PatrimoniosIcon width={26} selected={itemSelected === 'patrimonios'} />}
                    selected={itemSelected === 'patrimonios'}
                    label="patrimonios"
                    onClick={() => changeSelected('patrimonios')}
                />
                <ItemSideBar
                    icon={<HomeIcon selected={itemSelected === "funcionarios"} />}
                    selected={itemSelected === 'funcionarios'}
                    label="funcionarios"
                    onClick={() => changeSelected('funcionarios')}
                />
                <ItemSideBar
                    icon={<HomeIcon selected={itemSelected == "ambientes"} />}
                    selected={itemSelected === 'ambientes'}
                    label="ambientes"
                    onClick={() => changeSelected('ambientes')}
                />
                <ItemSideBar
                    icon={<HomeIcon selected={itemSelected == 'areas'} />}
                    selected={itemSelected === 'areas'}
                    label="areas"
                    onClick={() => changeSelected('areas')}
                />
            </div>
        </aside>
    );
}

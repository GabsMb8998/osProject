import { useRouter } from "next/navigation";
import { HomeIcon } from "../../../public/icons/HomeIcon";
import { PatrimoniosIcon } from "../../../public/icons/PatrimoniosIcon";
import { OsIcon } from "../../../public/icons/OsIcon";
import { ItemSideBar } from "./SidebarItem";


export default function SideBar() {


    // const [open, setOpen] = useState(true);
    const itemSelected = localStorage.getItem('selectedSideBar')
    const router = useRouter()  
    

    function isSelected(path: string) {
        return  localStorage.setItem('selectedSideBar', path);
    }

    return (
        <aside className={`w-[330px] h-screen fixed`}>
            <div className="mx-10 py-8 flex flex-col gap-y-6">
                <ItemSideBar
                    icon={<HomeIcon width={22} selected={itemSelected === isSelected('/home')} />}
                    selected={isSelected('/home')}
                    label="home"
                    onClick={() => router.push('/home')}
                />
                <ItemSideBar
                    icon={<OsIcon selected={isSelected('/orderServices')} />}
                    selected={isSelected('/orderServices')}
                    label="os"
                    onClick={() => router.push('/orderServices')}
                />
                <ItemSideBar
                    icon={<PatrimoniosIcon width={26} selected={isSelected('/patrimonios')} />}
                    selected={isSelected('/patrimonios')}
                    label="patrimonios"
                    onClick={() => router.push('/patrimonios')}
                />
                <ItemSideBar
                    icon={<HomeIcon selected={isSelected('/funcionarios')} />}
                    selected={isSelected('/funcionarios')}
                    label="funcionarios"
                    onClick={() => router.push('/funcionarios')}
                />
                <ItemSideBar
                    icon={<HomeIcon selected={isSelected('/ambientes')} />}
                    selected={isSelected('/ambientes')}
                    label="ambientes"
                    onClick={() => router.push('/ambientes')}
                />
                <ItemSideBar
                    icon={<HomeIcon selected={isSelected('/areas')} />}
                    selected={isSelected('/areas')}
                    label="areas"
                    onClick={() => router.push('/areas')}
                />
            </div>
        </aside>
    );
}

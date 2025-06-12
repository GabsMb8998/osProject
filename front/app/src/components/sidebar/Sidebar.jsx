import { useLocation, useNavigate } from 'react-router-dom';
import HomeIcon from "../../images/icons/HomeIcon";
import ItemSideBar from "./ItemSideBar";
import OsIcon from "../../images/icons/OsIcon";
import PatrimoniosIcon from "../../images/icons/PatrimoniosIcon";
import GerenteICon from "../../images/icons/GerenteIcon";
import '../../index.css';
import { useState } from 'react';

export default function SideBar() {
    const [open, setOpen] = useState(true);
    const location = useLocation();
    const navigate = useNavigate();

    function isSelected(path) {
        return location.pathname === path;
    }

    return (
        <aside className={`${open ? 'w-[330px]' : 'w-24'} h-screen fixed`}>
            <div className="mx-10 py-8 flex flex-col gap-y-6">
                <ItemSideBar
                    icon={<HomeIcon width={22} selected={isSelected('/home')} />}
                    selected={isSelected('/home')}
                    label="home"
                    onClick={() => navigate('/home')}
                />
                <ItemSideBar
                    icon={<OsIcon selected={isSelected('/orderServices')} />}
                    selected={isSelected('/orderServices')}
                    label="os"
                    onClick={() => navigate('/orderServices')}
                />
                <ItemSideBar
                    icon={<PatrimoniosIcon width={26} selected={isSelected('/patrimonios')} />}
                    selected={isSelected('/patrimonios')}
                    label="patrimonios"
                    onClick={() => navigate('/patrimonios')}
                />
                <ItemSideBar
                    icon={<HomeIcon selected={isSelected('/funcionarios')} />}
                    selected={isSelected('/funcionarios')}
                    label="funcionarios"
                    onClick={() => navigate('/funcionarios')}
                />
                <ItemSideBar
                    icon={<HomeIcon selected={isSelected('/ambientes')} />}
                    selected={isSelected('/ambientes')}
                    label="ambientes"
                    onClick={() => navigate('/ambientes')}
                />
                <ItemSideBar
                    icon={<HomeIcon selected={isSelected('/areas')} />}
                    selected={isSelected('/areas')}
                    label="areas"
                    onClick={() => navigate('/areas')}
                />
            </div>
        </aside>
    );
}

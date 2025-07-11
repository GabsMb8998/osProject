import {create} from 'zustand'
import { fetchGetAreas } from '../../services/areaService'

type AreaState = {
    id : number
    nome : string
}

interface AreaStore {
    areas: AreaState[]
    openModalCreate: boolean
    openModalUpdate: boolean
    selectedArea: AreaState | null
    onChangeArea: string
    onChangeCreateArea: string
    getArea: ()=>void
}

const useAreaStore = create<AreaStore>((set)=>({
    areas: [],
    openModalCreate: false,
    openModalUpdate: false,
    selectedArea: null,
    onChangeArea: '',
    onChangeCreateArea: '',
    getArea: async ()=>{
        set({    });
        try {
            const response = await fetchGetAreas();
            set({areas: response})
        }catch (error){
            console.error('erro ao fazer requisição', error)
        }
    }
}))

export {useAreaStore}



import { fetchDeleteAreas, fetchGetAreas, fetchPostAreas } from '@/services/areaService'
import {create} from 'zustand'

export type AreaState = {
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
    // file: File
    setSelectedArea: (newArea:AreaState) => void
    setOpenModalCreate: (changeModal: boolean) => void
    setOpenModalUpdate: (changeModal: boolean) => void
    getArea: () => void
    postArea: ( sig: string, descricao: string, responsavel: string ) => void
    deleteArea: (id: number) => void
    updateArea: () => void
}

const useAreaStore = create<AreaStore>((set)=>({
    areas: [],
    openModalCreate: false,
    openModalUpdate: false,
    selectedArea: null,
    onChangeArea: '',
    onChangeCreateArea: '',

    getArea: async ()=>{
        try {
            const response = await fetchGetAreas();
            set({areas: response})
        }catch (error){
            console.error('erro ao fazer requisição', error)
        }
    },

    postArea:async (sig, descricao, responsavel) => {
        try {
            const response = await fetchPostAreas(sig, descricao, responsavel)
            return response;
        }catch (error: any){
            throw new Error (error)
        }
    },
    updateArea() {
        
    },

    deleteArea: async (id) => {
        try {
            const response = await fetchDeleteAreas(id)
            return response;
        }catch (error: any) {
            throw new Error (error)
        }
    },
    setSelectedArea: (newArea)=>{
        set({selectedArea: newArea})
    },
    setOpenModalCreate(changeModal) {
        set({openModalCreate: changeModal})
    },
    setOpenModalUpdate(changeModal) {
        set({openModalUpdate: changeModal})
    },
}))

export {useAreaStore}



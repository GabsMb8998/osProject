import { fetchDeleteAreas, fetchGetAreas, fetchPatchAreas, fetchPostAreas } from '@/services/areaService'
import {create} from 'zustand'

export type AreaState = {
    id? : number
    nome : string
}

interface AreaStore {
    areas: AreaState[]
    area: AreaState | null
    selected: AreaState | null
    openModalCreate: boolean
    openModalUpdate: boolean
    onChangeArea: string
    onChangeCreateArea: string
    // file: File
    setSelected: (newArea:AreaState) => void
    setOpenModalCreate: (changeModal: boolean) => void
    setArea: (nome: string) => void
    setOpenModalUpdate: (changeModal: boolean) => void
    getArea: () => void
    postArea: ( nome: string ) => void
    deleteArea: (id: number) => void
    updateArea: (area: AreaState) => void
}

const useAreaStore = create<AreaStore>((set)=>({
    areas: [],
    area: null,
    openModalCreate: false,
    openModalUpdate: false,
    selectedArea: null,
    onChangeArea: '',
    onChangeCreateArea: '',
    selected: null,

    getArea: async ()=>{
        try {
            const response = await fetchGetAreas();
            set({areas: response})
        }catch (error){
            console.error('erro ao fazer requisição', error)
        }
    },

    postArea:async (nome) => {
        try {
            const response = await fetchPostAreas(nome)
            return response;
        }catch (error: any){
            throw new Error (error)
        }
    },

    updateArea: async (data) => {
        try {
            const response = await fetchPatchAreas(data)
            return response;
        }catch (error: any){
            throw new Error (error)
        }
    },

    deleteArea: async (id) => {
        try {
            const response = await fetchDeleteAreas(id)
            return response;
        }catch (error: any) {
            throw new Error (error)
        }
    },
    setSelected: (newArea)=>{
        set({selected: newArea})
    },

    setArea(nome) {
        set({area: {nome:nome}})
    },
    setOpenModalCreate(changeModal) {
        set({openModalCreate: !changeModal})
    },
    setOpenModalUpdate(changeModal) {
        set({openModalUpdate: !changeModal})
    },
}))

export {useAreaStore}



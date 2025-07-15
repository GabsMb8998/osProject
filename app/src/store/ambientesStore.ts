import { fetchDeleteAmbientes, fetchGetAmbientes, fetchPostAmbientes } from "@/services/ambientesService"
import { create } from "zustand"

type AmbienteState = {
    id?: number
    sig: number
    descricao: string
    responsavel: number
    responsavel_nome?: string
}

interface AmbienteStore {
    ambientes: AmbienteState[]
    selected: AmbienteState | null
    openModalCreate: boolean
    openModalUpdate: boolean
    setSelected: (selected: AmbienteState) => void
    setOpenModalCreate: (openModalCreate: boolean) => void
    setOpenModalUpdate: (openModalUpdate: boolean) => void
    getAllAmbientes: () => void
    getPostAmbientes: (sig: number, descricao: string, responsavel: number) => void
    getPatchAmbientes: (data: any) => void
    getDeleteAmbientes: (id: number) => void
}

const useAmbienteStore = create<AmbienteStore> ((set)=>({
    ambientes: [],
    selected: null,
    openModalCreate: false,
    openModalUpdate: false,

    setSelected(selected) {
        set({selected: selected})
    },
    setOpenModalCreate(openModalCreate) {
        set({openModalCreate: !openModalCreate})
    },
    setOpenModalUpdate(openModalUpdate) {
        set({openModalUpdate: !openModalUpdate})
    },
    getAllAmbientes: async () => {
        try {
            const response = await fetchGetAmbientes()
            set({ambientes: response})
            return response
        }catch(error: any){
            throw new Error(error)
        }
    },

    getPostAmbientes: async (sig, descricao, responsavel) => {
        try {   
            const response = await fetchPostAmbientes(sig, descricao, responsavel)
            return response
        } catch(error : any){
            throw new Error (error)
        }
    },
    getDeleteAmbientes: async (id) => {
        try {   
            const response = await fetchDeleteAmbientes(id)
            return response

        } catch(error : any){
            throw new Error (error)
        }
    },
    getPatchAmbientes: async (data) => {
        try {   
            const response = await fetchDeleteAmbientes(data)
            return response

        } catch(error : any){
            throw new Error (error)
        }
    },
}))

export {useAmbienteStore}
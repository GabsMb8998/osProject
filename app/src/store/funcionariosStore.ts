import { fetchDeleteFuncionarios, fetchGetFuncionarios, fetchPatchFuncionarios, fetchPostFuncionarios } from "@/services/funcionariosService"
import { create } from "zustand"

export type FuncionarioState = {
    id: number
    area_nome: string
    sn: string
    nome: string
    email : string
    cargo: string
    area: number
}

interface FuncionarioStore {
    funcionarios: FuncionarioState[]
    selected: FuncionarioState | null
    openModalGet: boolean
    openModalCreate: boolean
    openModalUpdate: boolean
    setSelected : (selected: FuncionarioState)=> void
    setOpenModalGet: (openModalGet: boolean) => void
    setOpenModalCreate: (openModalCreate: boolean) => void
    setOpenModalUpdate: (openModalUpdate: boolean) => void
    getAllFuncionarios : () => void
    postFuncionarios : (data: FuncionarioState) => void
    patchFuncionarios: (data: any) => void
    deleteFuncionarios: (id: number) => void
}

const UseFuncionarioStore = create<FuncionarioStore> ((set)=> ({
    funcionarios: [],
    openModalGet: false,
    openModalCreate: false,
    openModalUpdate: false,
    selected: null,
    setSelected: (selected) => {
        set({selected: selected})
    },
    setOpenModalGet:(openModalGet) =>{
        set({openModalGet: !openModalGet})
    },
    setOpenModalCreate(openModalCreate) {
        set({openModalCreate: !openModalCreate})
    },
    setOpenModalUpdate(openModalUpdate) {
        set({openModalUpdate: !openModalUpdate})
    },

    getAllFuncionarios: async () => {
        try {
            const response = await fetchGetFuncionarios()
            set({funcionarios: response})
            return response

        } catch (error: any) {
            throw new Error(error)
        }
    },

    postFuncionarios: async (data) => {
        try {
            const response = await fetchPostFuncionarios(data)
            return response

        } catch (error: any) {
            throw new Error(error)
        }
    },
    patchFuncionarios: async (data) => {
        try {
            const response = await fetchPatchFuncionarios(data)
            return response

        } catch (error: any) {
            throw new Error(error)
        }
    },
    deleteFuncionarios: async (id) => {
        try {
            const response = await fetchDeleteFuncionarios(id)
            return response

        } catch (error: any) {
            throw new Error(error)
        }
    },
}))


export {UseFuncionarioStore}
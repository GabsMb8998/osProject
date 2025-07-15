import { fetchGetPatrimonios } from "@/services/patrimoniosService"
import { create } from "zustand"

type PatrimonioState = {
    id : number
    localizacao_nome: string
    ni: string
    descricao: string
    localizacao: number
}

interface PatrimonioStore {
    patrimonios: PatrimonioState[]
    openModalCreate: boolean,
    openModalUpdate: boolean,
    selected: PatrimonioState | null,
    setSelected: (selected: PatrimonioState)=> void,
    setOpenModalCreate: (openModalCreate: boolean) => void
    setOpenModalUpdate: (openModalUpdate: boolean) => void
    getPatrimonios: () => void
}

const UsePatrimonioStore = create<PatrimonioStore> ((set)=>({
    patrimonios: [],
    openModalCreate: false,
    openModalUpdate: false,
    selected: null,
    setSelected(selected) {
        set({selected:selected})
    },
    setOpenModalCreate(openModalCreate) {
        set({openModalCreate: !openModalCreate})
    },
    setOpenModalUpdate(openModalUpdate) {
        set({openModalUpdate: !openModalUpdate})
    },
    getPatrimonios: async () => {
        try {
            const response = await fetchGetPatrimonios()
            set ({patrimonios: response})
            return response
        }catch(error: any) {
            throw new Error(error)
        }
    },
}))

export {UsePatrimonioStore}
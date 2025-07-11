import { create } from "zustand"

type AmbienteState = {
    id: number
    sig: string
    descricao: string
    responsavel: string
}

interface AmbienteStore {
    ambientes: AmbienteState[]
}

const useAmbienteStore = create<AmbienteStore> ((set)=>({
    ambientes: []
}))

export {useAmbienteStore}
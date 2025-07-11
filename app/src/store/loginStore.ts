import { fetchGetToken } from "@/services/loginService"
import { create } from "zustand"

interface LoginState {
    username: string
    password: string
    token: string
    setUsername: (e:string) => void
    setPassword: (e:string) => void
    getToken: (username: string, password: string) => void
}

const useLoginStore= create<LoginState> ((set)=>({
    username: '',
    password: '',
    token: '',
    getToken: async (username, password) => {
        try{
            const response = await fetchGetToken(username, password)
            set ({token: response})
            return;
        }catch (error){
            throw new Error(JSON.stringify(error));
        }
    },

    setUsername: (e)=>{
        set({username: e})
    },
    setPassword(e) {
        set({password: e})
    },
}))


export {useLoginStore}
import axios from 'axios'
export const fetchGetAmbientes= async ()=>{
    try {
        const response = await axios.get('http://127.0.0.1:8000/api/ambientes/get')
        return response.data
    }catch (error: any){
        throw new Error (
            `ERRP: ${error.response.data.message || error.message || 'erro ao tentar pegar areas'} `
        )
    }

}

export const fetchPostAmbientes= async (sig: number, descricao: string, responsavel: number) => {
    try {
        // console.log(data, 'data post ambientes dentro do service')
        const response = await axios.post('http://127.0.0.1:8000/api/ambientes/post', {
            sig: sig,
            descricao: descricao,
            responsavel: responsavel
        })
        return response
    }catch (error: any) {
        throw new Error(error)
    }
}

export const fetchPatchAmbientes =  async (data: any)=>{
    try {
        const response = await axios.patch(`http://127.0.0.1:8000/api/ambientes/patch/${data.id}`, {data})
        return response;
    } catch (error: any){
        throw new Error (error)
    }
}

export const fetchDeleteAmbientes = async (id: number) => {
    try {
        const response = await axios.delete(`http://127.0.0.1:8000/api/ambientes/patch/${id}`)
        return response
    } catch (error: any){
        throw new Error (error)
    }
}
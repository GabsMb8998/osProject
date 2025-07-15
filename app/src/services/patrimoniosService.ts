import axios from 'axios'
export const fetchGetPatrimonios = async ()=>{
    try {
        const response = await axios.get('http://127.0.0.1:8000/api/patrimonios/get')
        return response.data

    }catch (error: any){
        throw new Error (
            `ERRO: ${error.response.data.message || error.message || 'erro ao tentar pegar funcionario'} `
        )
    }
}

export const fetchPostPatrimonios = async (data: any ) => {
    try {
        const response = await axios.post('http://127.0.0.1:8000/api/patrimonios/post', { data })
        return response

    } catch (error: any) {
        throw new Error(error)
    }
}

export const fetchPatchPatrimonios =  async (data: any)=>{
    try {
        const response = await axios.patch(`http://127.0.0.1:8000/api/patrimonios/patch/${data.id}`, {data})
        return response;
        
    } catch (error: any){
        throw new Error (error)
    }
}

export const fetchDeletePatrimonios = async (id: number) => {
    try {
        const response = await axios.delete(`http://127.0.0.1:8000/api/patrimonios/patch/${id}`)
        return response

    } catch (error: any){
        throw new Error (error)
    }
}
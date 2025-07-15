import axios from 'axios'
export const fetchGetFuncionarios = async ()=>{
    try {
        const response = await axios.get('http://127.0.0.1:8000/api/funcionario/get')
        return response.data

    }catch (error: any){
        throw new Error (
            `ERRP: ${error.response.data.message || error.message || 'erro ao tentar pegar funcionario'} `
        )
    }

}

export const fetchPostFuncionarios = async (data: any ) => {
    try {
        const response = await axios.post('http://127.0.0.1:8000/api/funcionario/post', { data })
        return response

    } catch (error: any) {
        throw new Error(error)
    }
}

export const fetchPatchFuncionarios =  async (data: any)=>{
    try {
        const response = await axios.patch(`http://127.0.0.1:8000/api/funcionario/patch/${data.id}`, {data})
        return response;
        
    } catch (error: any){
        throw new Error (error)
    }
}

export const fetchDeleteFuncionarios = async (id: number) => {
    try {
        const response = await axios.delete(`http://127.0.0.1:8000/api/funcionario/patch/${id}`)
        return response

    } catch (error: any){
        throw new Error (error)
    }
}
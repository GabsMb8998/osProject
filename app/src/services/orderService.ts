import axios from 'axios'

export const fetchGetOrderServices = async ()=>{
    try {
        const response = await axios.get('http://127.0.0.1:8000/api/ordemServico/get')
        return response.data

    }catch (error: any){
        throw new Error (
            `ERRP: ${error.response.data.message || error.message || 'erro ao tentar pegar funcionario'} `
        )
    }

}

export const fetchPostOrderServices = async (data: any ) => {
    try {
        const response = await axios.post('http://127.0.0.1:8000/api/ordemServico/post', { data })
        return response

    } catch (error: any) {
        throw new Error(error)
    }
}

export const fetchPatchOrderServices  =  async (data: any)=>{
    try {
        const response = await axios.patch(`http://127.0.0.1:8000/api/ordemServico/patch/${data.id}`, {data})
        return response;
        
    } catch (error: any){
        throw new Error (error)
    }
}

export const fetchDeleteOrderServices  = async (id: number) => {
    try {
        const response = await axios.delete(`http://127.0.0.1:8000/api/ordemServico/patch/${id}`)
        return response

    } catch (error: any){
        throw new Error (error)
    }
}
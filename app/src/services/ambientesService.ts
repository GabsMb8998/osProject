import axios from 'axios'
export const fetchGetAmbientes= async ()=>{
    try {
        const response = await axios.get('http://127.0.0.1:8000/api/ambiente/get')
        return response.data
    }catch (error: any){
        throw new Error (
            `ERRP: ${error.response.data.message || error.message || 'erro ao tentar pegar areas'} `
        )
    }

}

export const fetchPostAmbientes= async (data: any) => {
    try {
        const response = await axios.post('http://127.0.0.1:8000/api/ambiente/post', {data})
        return response
    }catch (error: any) {
        throw new Error(error)
    }
}

export const fetchPatchAmbientes =  async (data: any)=>{
    try {
        const response = await axios.patch(`http://127.0.0.1:8000/api/ambiente/patch/${data.id}`, {data})
        return response;
    } catch (error: any){
        throw new Error (error)
    }
}

export const fetchDeleteAmbientes = async (id: number) => {
    try {
        const response = await axios.delete(`http://127.0.0.1:8000/api/ambiente/patch/${id}`)
        return response
    } catch (error: any){
        throw new Error (error)
    }
}
import axios from 'axios'
export const fetchGetAreas = async ()=>{
    try {
        const response = await axios.get('http://127.0.0.1:8000/api/area/get')
        return response.data
    }catch (error: any){
        throw new Error (
            `ERRP: ${error.response.data.message || error.message || 'erro ao tentar pegar areas'} `
        )
    }

}

export const fetchPostAreas = async (nome: string) => {
    try {
        const response = await axios.post('http://127.0.0.1:8000/api/area/post', {
            nome: nome
        })
        return response
    }catch (error: any) {
        throw new Error(error)
    }
}

export const fetchPatchAreas =  async (data: any)=>{
    try {
        console.log(data, 'teste')
        const response = await axios.patch(`http://127.0.0.1:8000/api/area/patch/${data.id}`, {nome: data.nome})
        return response;
    } catch (error: any){
        throw new Error (error)
    }
}

export const fetchDeleteAreas = async (id: number) => {
    try {
        const response = await axios.delete(`http://127.0.0.1:8000/api/area/delete/${id}`)
        return response
    } catch (error: any){
        throw new Error (error)
    }
}
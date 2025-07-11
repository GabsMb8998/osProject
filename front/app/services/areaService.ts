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
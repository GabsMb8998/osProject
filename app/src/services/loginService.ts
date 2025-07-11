import axios from "axios"

export const fetchGetToken = async (username : string, password: string) => {
    try {
        const response = await axios.post('http://127.0.0.1:8000/api/token/', {
            username: username,
            password: password
        })
        return response.data.access
    } catch (error: any) {
        console.log(error)
        throw new Error('Não foi possível buscar o token')
    }
}
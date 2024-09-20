import axios from 'axios'

const rootURL = "http://localhost:8000/api/v1"

const applicationFormAPI = `${rootURL}/form`

export const postfrom = async (userData)=>{
    console.log(userData)
    try {
        const {data} = await axios.post(`${applicationFormAPI}`, userData)
        return data
        
    } catch (error) {
        console.log("Eroor posting new form", error)
        return {
            status:"error",
            message:error.message
        }
        
    }
}

export const getfrom = async ()=>{
    try {
        const {data} = await axios.get(`${applicationFormAPI}`)
        return data
        
    } catch (error) {
        console.log("Eroor posting new form", error)
        
    }
}

export const deletfrom = async (_ids)=>{
    try {
        const {data} = await axios.delete(`${applicationFormAPI}`, _ids)
        return data
        
    } catch (error) {
        console.log("Eroor deleting new form", error)
        
    }
}

export const upatefrom = async (data)=>{
    try {
        const {response} = await axios.put(`${applicationFormAPI}, data`)
        return response
        
    } catch (error) {
        console.log("Eroor updating new form", error)
        
    }
}
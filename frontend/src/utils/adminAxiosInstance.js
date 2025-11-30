import axios from "axios"

const adminAxiosInstance = axios.create({
    baseURL:'http://localhost:5001',
    timeout: 60000,
    headers: {
        "Content-Type": "application/json"
    }
})

adminAxiosInstance.interceptors.request.use((config)=>{
    const accessToken = localStorage.getItem("adminToken")
    if(accessToken){
        config.headers.Authorization = `Bearer ${accessToken}`
    }
    return config;
}, (error)=>{
    return Promise.reject(error)
})

export default adminAxiosInstance
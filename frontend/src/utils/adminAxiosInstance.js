import axios from "axios"

const adminAxiosInstance = axios.create({
    baseURL:'https://datasecure-prevent-data-breaches.onrender.com',
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

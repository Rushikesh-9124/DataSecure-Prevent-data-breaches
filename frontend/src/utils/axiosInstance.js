import axios from "axios"

const axiosInstance = axios.create({
    baseURL:'https://data-secure-prevent-data-breaches.vercel.app',
    timeout: 60000,
    headers: {
        "Content-Type": "application/json"
    }
})

axiosInstance.interceptors.request.use((config)=>{
    const accessToken = localStorage.getItem("token")
    if(accessToken){
        config.headers.Authorization = `Bearer ${accessToken}`
    }
    return config;
}, (error)=>{
    return Promise.reject(error)
})

export default axiosInstance

import axios from "axios";


const axiosInstance= axios.create({
    baseURL:'https://links.papareact.com/',
});

axiosInstance.interceptors.request.use((config)=>{
    config.headers['Content-Type'] = 'application/json';
    return config;
});

export default axiosInstance;
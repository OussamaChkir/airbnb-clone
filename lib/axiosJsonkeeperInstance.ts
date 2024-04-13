import axios from "axios";


const axiosJsonkeeperInstance= axios.create({
    baseURL:'https://www.jsonkeeper.com/',
});

axiosJsonkeeperInstance.interceptors.request.use((config)=>{
    config.headers['Content-Type'] = 'application/json';
    config.headers['Access-Control-Allow-Origin'] = '*';
    config.headers['Access-Control-Allow-Headers'] = 'Origin, X-Requested-With, Content-Type, Accept'; 
    return config;
});

export default axiosJsonkeeperInstance;
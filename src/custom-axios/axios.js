import axios from "axios";

const instance = axios.create({
    baseURL: 'http://localhost:9091',
    headers: {
        'Access-Control-Allow-Origin': '*',
        'Authorization': sessionStorage.getItem("JWT")
    }
})

export default instance;
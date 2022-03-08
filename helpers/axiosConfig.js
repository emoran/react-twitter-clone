import axios from "axios";

const instance = axios.create({
    baseURL:'http://66.94.99.216:81/api'
})

export default instance;
import axios from 'axios'

const instance = axios.create({
    baseURL: "http://api.spacexdata.com/v4/"
})

export default instance;
import axios from 'axios'

const Infos = axios.create({
    baseURL: 'http://localhost:3001/infos'
})

export default Infos
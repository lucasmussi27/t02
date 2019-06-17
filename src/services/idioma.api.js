import axios from 'axios'

const Idiomas = axios.create({
    baseURL: 'http://localhost:3001/idiomas'
})
export default Idiomas
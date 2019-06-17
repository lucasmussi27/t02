import axios from 'axios'

const Interesses = axios.create({
    baseURL: 'http://localhost:3001/interesses'
})
export default Interesses
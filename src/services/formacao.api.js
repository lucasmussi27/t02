import axios from 'axios'

const Formacoes = axios.create({
    baseURL: 'http://localhost:3001/formacoes'
})
export default Formacoes
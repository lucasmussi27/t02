import axios from 'axios'

const Portfolios = axios.create({
    baseURL: 'http://localhost:3001/portfolios'
})

export default Portfolios
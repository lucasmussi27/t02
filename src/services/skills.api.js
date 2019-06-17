import axios from 'axios'

const Skill = axios.create({
    baseURL: 'http://localhost:3001/skills'
})
export default Skill
import axios from 'axios'

const instance = axios.create({
    baseUrl: 'https://fbmern1.herokuapp.com/'
})

export default instance
import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:5000/api/'
})

export default {
    get: api.get,
    post: api.post,
    put: api.put,
    delete: api.delete
}
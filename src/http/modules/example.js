import axios from '@/http/interceptor';

export default {
    contratosGet: (params = {}) => axios.get('/example', {params}),
    contratosStore: (payload = {}) => axios.post('/example', payload),
    contratosUpdate: (payload = {}, id) => axios.put(`/example/${id}`, payload),
    contratosDelete: (payload = {}, id) => axios.delete(`/example/${id}`, payload),
}

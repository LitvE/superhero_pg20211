import axios from 'axios';
const axiosOptions = { baseURL: 'http://127.0.0.1:5000/api' };

const apiInstance = axios.create(axiosOptions);
//superheroes
export const getSuperheroes = (page) => apiInstance.get(`/superheroes?page=${page}`);
export const getSuperheroById = (id) => apiInstance.get(`/superheroes/${id}`);
export const createSuperhero = (superhero) => apiInstance.post('/superheroes', superhero);
export const deleteSuperhero = (id) => apiInstance.delete(`/superheroes/${id}`);
export const updateSuperheroImage = (id, data) => apiInstance.patch(`/superheroes/${id}/images`, data,  {
    headers: {
        "Content-type": "multipart/form-data"
    },
});
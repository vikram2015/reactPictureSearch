import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID yD79dBS_NQ_p6fshQrbzkYJo6yxpqG5eT3hZ8lwlqZU'
    }
})
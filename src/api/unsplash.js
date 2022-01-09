import axios from 'axios'; 

export default axios.create({
    baseURL: 'https://api.unsplash.com', 
    headers: {
        Authorization: 'Client-ID iFcvSnS8HyB6wTq1UWfZx91kamMY6lockJ3g1mFIUX8'
    }
}); 
import axios from 'axios';

const BASE_URL = 'http://localhost:3001/api';

export const getAllProducts = (searchTerm) => {
    return axios.get(`${BASE_URL}/products?name=${searchTerm || ''}`);
};

export const createProduct = (product) => {
    return axios.post(`${BASE_URL}/products`, product);
};

<<<<<<< Updated upstream
=======
//UPDATE AND DELETE
export const updateProduct = (id, product) => { console.log(access_token);

    return axios.put(`${BASE_URL}/api/products/${id}`, product,
        {
            headers: {
                'Authorization': `${access_token}`
            }
        });
};

export const removeProduct = (id) => {
    return axios.delete(`${BASE_URL}/api/products/${id}`,
        {
            headers: {
                'Authorization': `${access_token}`
            }
        });
};


//login
export const login = (loginData) => {
    return axios.post(`${BASE_URL}/auth/login`, loginData);
};



>>>>>>> Stashed changes

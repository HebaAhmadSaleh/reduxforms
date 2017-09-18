const API_URL='https://react-native-blog-app.herokuapp.com'

import axios from 'axios';


export function GetAllBlog() {
    let url = API_URL + '/blogs';
    return axios.get(url)
        .then((response) => {
            let blogs;
            blogs = response.data;
            return blogs;
        }).catch((error) => {
            handleError(error);
        });
}

export function GetAllCategories() {
    let url = API_URL + '/categories';
    return axios.get(url)
        .then((response) => {
            let categories;
            categories = response.data;
            return categories;
        }).catch((error) => {
            handleError(error);
        });
}


export function AddBlog(obj) {
    let url = API_URL + '/blogs';
    return axios.post(url,{
        id:obj.id,
        obj:obj
    })
        .then((response) => {
            return response.data;
        }).catch((error) => {
            handleError(error);
        });
}
import axios from 'axios';

const baseURL = 'http://localhost:3001/';

async function login(params)
{
    const accessURL = `${baseURL}login`;

    let res = await axios.get(accessURL, { params });
    return res.data;
}

export default {
    login
};
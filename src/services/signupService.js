import axios from 'axios';

const baseURL = 'http://localhost:3001/';

async function signup(params)
{
    const accessURL = `${baseURL}signup`;

    let res = await axios.post(accessURL, params);
    return res.data;
}

export default {
    signup
};
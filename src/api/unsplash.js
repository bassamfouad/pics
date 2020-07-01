import axios from 'axios';

export default axios.create({
    baseURL:'https://api.unsplash.com',
    headers:{
        Authorization:'Client-ID iMIzBCve15eKfEMOnsiBw-7YTXB5m59VIDzYQX3skCU'
    }
});

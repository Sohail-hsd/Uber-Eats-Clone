import axios from "axios";

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 'Bearer UgN2keLotomLRlghRHa5-arVS0JsMOusFVOkdd3bXab8OjNOCAvTBekMjQmYdGzWJzAW3-9Yz5qcGRWuGu3--fuNiwtaFqALV7Dtmw6hCi_8LJgM2Bva-fX-ROsMYnYx'
    }
})

export const transaction = axios.create({
    baseURL: `https://api.yelp.com/v3/transactions/`,
    headers: {
        Authorization: 'Bearer UgN2keLotomLRlghRHa5-arVS0JsMOusFVOkdd3bXab8OjNOCAvTBekMjQmYdGzWJzAW3-9Yz5qcGRWuGu3--fuNiwtaFqALV7Dtmw6hCi_8LJgM2Bva-fX-ROsMYnYx'
    }
})

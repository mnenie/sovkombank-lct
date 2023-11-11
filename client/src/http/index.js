import axios from 'axios';

const EASY4_API = "https://back.easy4.team"

const $API = axios.create({
    withCredentials: false,
    baseURL: EASY4_API,
});

export  {$API};
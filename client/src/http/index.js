import axios from 'axios';

const EASY4_API = "https://back.easy4.team"
const GOSHA_API = "http://164.132.216.63:228"

const $API = axios.create({
    withCredentials:false,
    baseURL: EASY4_API,
});

const $API_GOSHA = axios.create({
    withCredentials:false,
    baseURL: GOSHA_API,
});

export  {$API, $API_GOSHA};
import axios from "axios";

export const api = axios.create({
    baseURL: "https://api.gemeosbrasil.store",
    timeout: 15*1000
});
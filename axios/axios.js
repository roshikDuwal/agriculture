import axios from "axios";
import { Single_product_api, domain } from "../constants/Url";

export const Axios=axios.create({
    baseURL:domain,
})


export const Single_product_Axios=axios.create({
    baseURL:Single_product_api,
})


import {Axios} from "../../../../axios/axios"

export const getProductData=async()=>{
    const getproductdata=await Axios.get("/home");
    return getproductdata;
}

export const getAllProductData=async()=>{
    const getallproductdata=await Axios.get("/product");
    return getallproductdata;
}
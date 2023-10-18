
import {Axios} from "../../../../axios/axios"

export const getProductData=async()=>{
    const getproductdata=await Axios.get("/home");
    return getproductdata;
}
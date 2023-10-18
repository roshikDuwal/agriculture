import { Single_product_Axios } from "../../../../../axios/axios"

export const GetSingleProduct=(id)=>{
    const getsingleproduct=Single_product_Axios.get(id)
    return getsingleproduct
}
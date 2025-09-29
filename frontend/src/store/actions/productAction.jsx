import { instance } from "../../api/axios-config";
import { loadProduct } from "../reducers/productSlice";

export const asyncUpdateProduct = (product , id) => async (dispatch , getState)=>{
    try{
        const res = await instance.patch('/products/'+id , product)
        dispatch(asyncLoadProduct());
    }catch(error){
        console.log(error);
    }
}

export const asyncDeleteProduct = (id) => async (dispatch , getState)=>{
    try{
        await instance.delete('/products/'+id);
        dispatch(asyncLoadProduct());
    }catch(error){
        console.log(error);
    }
}

export const asyncLoadProduct = () => async (dispatch , getState)=>{
    try{
        const res = await instance.get('/products');
        dispatch(loadProduct(res.data))
    }catch(error){
        console.log(error);
    }
}

export const asyncCreateProduct = (product) => async(dispatch , getState) =>{
    try{    
        const productData = await instance.post('/products',product);
        dispatch(asyncLoadProduct())
        console.log(productData);
    }catch(error){
        console.log(error);
    }
}
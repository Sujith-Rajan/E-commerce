import { loginFailure, loginStart, loginSuccess } from "./userRedux.js";
import {
    getProductStart,
    getProductSuccess,
    getProductFailure,
    deleteProductFailure,
    deleteProductStart,
    deleteProductSuccess,
    updateProductFailure,
    updateProductStart,
    updateProductSuccess,
    createProductFailure,
    createProductStart,
    createProductSuccess,
} from "./productRedux.js";
import { PUBLIC_REQUEST } from "../config.js";
import { USER_REQUEST } from "../config.js";



export const login = async (dispatch, user) => {
    dispatch(loginStart());
    try {
        const res = await PUBLIC_REQUEST.post("auth/login", user);
        if (res.status === 200) {
            dispatch(loginSuccess(res.data.data));
        }
    } catch (err) {
        dispatch(loginFailure("Invalid username or password"));
    }
};



export const getProducts = async (dispatch) => {
    dispatch(getProductStart());
    try {
        const res = await PUBLIC_REQUEST.get("/product");
        dispatch(getProductSuccess(res.data));
    } catch (err) {
        dispatch(getProductFailure(err));
    }
};


export const deleteProducts = async (dispatch,id) => {
    const pId = id;
    dispatch(deleteProductStart())
    try{
        const res = await USER_REQUEST.delete(`/product/${pId}`)
        dispatch(deleteProductSuccess(res.data))
    }
    catch(err){
        dispatch(deleteProductFailure(err))
    }
}

export const updateProduct = async (dispatch,id,product) => {
   
    dispatch(updateProductStart())
    try{
        const res = await USER_REQUEST.put(`/product/${id}`,product)
        dispatch(updateProductSuccess(res.data))
    }
    catch(err){
        dispatch(updateProductFailure(err))
    }
}

export const createProduct = async (dispatch,products) => {
    dispatch(createProductStart())
    try{
        const res = await USER_REQUEST.post("/product",products)
        dispatch(createProductSuccess(res.data))
    }
    catch(err){
        dispatch(createProductFailure(err))
    }

}
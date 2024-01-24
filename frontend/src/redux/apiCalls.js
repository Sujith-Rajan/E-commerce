import { loginFailure, loginStart, loginSuccess,logOut } from "./userRedux";
import { PUBLIC_REQUEST } from "../../config.js";

export const login = async (dispatch, user) => {
    dispatch(loginStart());
    try {
        const res = await PUBLIC_REQUEST.post("auth/login", user);
        if(res.status === 200){
        dispatch(loginSuccess(res.data.data));
        }
        
        
    } catch (err) {
       
           
            dispatch(loginFailure("Invalid username or password"));
            
       
    }
};
export const logoutUser = (dispatch) =>{
    dispatch(logOut())
}
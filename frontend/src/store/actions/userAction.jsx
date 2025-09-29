import { instance } from '../../api/axios-config'
import { loadUser, removeUser } from '../reducers/userSlice';


export const asyncCurrentUser = () => async (dispatch , getState) =>{
    try{
        const user = JSON.parse(localStorage.getItem("user"));

        console.log(user)

        if(user) dispatch(loadUser(user));
        else console.log("Not Logged In")
    }catch(error){
        console.log(error);
    }
}


export const asyncLogout = (user) => async (dispatch , getState) =>{
    try{
        localStorage.setItem("user","");
        dispatch(removeUser());
    }catch(error){
        console.log(error)
    }
}

export const asyncLogin = (user) => async (dispatch , getState) =>{
    try{
        const res = await instance.get(`/users?email=${user.email}&password=${user.password}`);
        
        localStorage.setItem("user" , JSON.stringify(res.data[0]));
    }catch(error){
        console.log(error);
    }
}

export const asyncRegister = (user) => async (dispatch , getState) =>{
    try{
        const res = await instance.post('/users' , user);
        console.log(res);
    }catch(error){
        console.log(error);
    }
}
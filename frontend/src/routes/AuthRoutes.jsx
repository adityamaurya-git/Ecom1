import { useSelector } from "react-redux"
import { Navigate } from "react-router-dom";

export const AuthRoutes = (props) =>{

    const {data} = useSelector((state) =>{
        return state.users;
    })
    const isLoggedIn = data && data.id;
    return isLoggedIn ? props.children : <Navigate to="/login" />
}
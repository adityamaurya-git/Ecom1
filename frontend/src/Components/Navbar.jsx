import { useDispatch, useSelector } from "react-redux"
import { NavLink, useNavigate } from "react-router-dom"
import { asyncLogout } from "../store/actions/userAction";

export const Navbar = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const {data} = useSelector((state) => {
        return state.users
    });


    return (<>
        <div className="w-full flex justify-center gap-4 p-3 bg-zinc-900 text-white">
            <NavLink className={(e) => (e.isActive ? "text-blue-500" : "text-white")} to="/">Home</NavLink>

            <NavLink className={(e) => (e.isActive ? "text-blue-500" : "text-white")} to="/products">Products</NavLink>


            {data ? (<>
                <NavLink className={(e) => (e.isActive ? "text-blue-500" : "text-white")} to="/cart">Cart</NavLink>
                {data && data?.isAdmin && 
                <NavLink className={(e) => (e.isActive ? "text-blue-500" : "text-white")} to="admin/create-product">Create</NavLink>
                }
                <NavLink className={(e) => (e.isActive ? "text-blue-500" : "text-white")} to="admin/user-profile">Setting</NavLink>
            </>) 
            : (<>
                <NavLink className={(e) => (e.isActive ? "text-blue-500" : "text-white")} to="/register">Register</NavLink>
                <NavLink className={(e) => (e.isActive ? "text-blue-500" : "text-white")} to="/login">Login</NavLink>
            </>)}
                
            
            





        </div>
    </>)
}
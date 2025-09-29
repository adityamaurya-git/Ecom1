import { useDispatch, useSelector } from "react-redux"
import { NavLink, useNavigate } from "react-router-dom"
import { asyncLogout } from "../store/actions/userAction";

export const Navbar = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const user = useSelector((state) => {
        return state.users
    });
    console.log(user);
    const logoutHandler = () => {
        dispatch(asyncLogout());
        navigate('/');
    }

    return (<>
        <div className="w-full flex justify-center gap-4 p-3 bg-zinc-900 text-white">
            <NavLink className={(e) => (e.isActive ? "text-blue-500" : "text-white")} to="/">Home</NavLink>

            <NavLink className={(e) => (e.isActive ? "text-blue-500" : "text-white")} to="/products">Products</NavLink>

            <NavLink className={(e) => (e.isActive ? "text-blue-500" : "text-white")} to="/cart">Cart</NavLink>



            <NavLink className={(e) => (e.isActive ? "text-blue-500" : "text-white")} to="/register">Register</NavLink>

            <NavLink className={(e) => (e.isActive ? "text-blue-500" : "text-white")} to="/login">Login</NavLink>

            <NavLink className={(e) => (e.isActive ? "text-blue-500" : "text-white")} to="admin/create-product">Create</NavLink>

            <button onClick={logoutHandler} >Logout</button>

        </div>
    </>)
}
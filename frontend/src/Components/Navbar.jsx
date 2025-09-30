import { useDispatch, useSelector } from "react-redux"
import { NavLink, useNavigate } from "react-router-dom"
import { asyncLogout } from "../store/actions/userAction";

export const Navbar = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { data } = useSelector((state) => {
        return state.users
    });


    return (<>
        <div className="w-full h-[15vh] flex justify-center items-center">

            <div className="w-3/4  flex justify-center gap-4 p-4 bg-[#F1E7C7] rounded-4xl text-black items-center leading-6">

                <NavLink className={(e) => ` px-2 py-1 rounded-4xl font-semibold ${(e.isActive ? "bg-white  text-[#BD30B1] font-semibold" : "text-[#360F3C]")}`} to="/">Home</NavLink>

                <NavLink className={(e) => ` px-2 py-1 rounded-4xl font-semibold ${(e.isActive ? "bg-white  text-[#BD30B1] " : "text-[#360F3C]")}`} to="/products">Products</NavLink>


                {data ? (<>
                    <NavLink className={(e) => ` px-2 py-1 rounded-4xl font-semibold ${(e.isActive ? "bg-white  text-[#BD30B1]" : "text-[#360F3C]")}`} to="/cart">Cart</NavLink>

                    {data && data?.isAdmin &&
                        <NavLink className={(e) => ` px-2 py-1 rounded-4xl font-semibold ${(e.isActive ? "bg-white  text-[#BD30B1]" : "text-[#360F3C]")}`} to="admin/create-product">Create</NavLink>

                    }
                    <NavLink className={(e) => ` px-2 py-1 rounded-4xl font-semibold ${(e.isActive ? "bg-white  text-[#BD30B1]" : "text-[#360F3C]")}`} to="admin/user-profile">Setting</NavLink>
                </>)
                    : (<>
                        <NavLink className={(e) => ` px-2 py-1 rounded-4xl font-semibold ${(e.isActive ? "bg-white  text-[#BD30B1]" : "text-[#360F3C]")}`} to="/register">Register</NavLink>

                        <NavLink className={(e) => ` px-2 py-1 rounded-4xl font-semibold ${(e.isActive ? "bg-white  text-[#BD30B1]" : "text-[#360F3C]")}`} to="/login">Login</NavLink>
                    </>)}
            </div>
        </div>
    </>)
}
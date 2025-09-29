import { Route, Routes } from "react-router-dom"
import { Home } from '../pages/Home'
import { Products } from '../pages/Products'
import { Login } from '../pages/Login'
import { Register } from '../pages/Register'
import { Cart } from '../pages/Cart'
import { CreateProduct } from '../pages/admin/CreateProduct'
import { UpdateProduct } from '../pages/admin/UpdateProduct'
import { ProductDetails } from "../Components/ProductDetails"
import { useSelector } from "react-redux"
import { ProfileUser } from "../pages/user/ProfileUser"
import { PageNotFound } from '../../src/PageNotFound'


export const MainRoutes = () => {

    const { data } = useSelector((state) => {
        return state.users;
    })

    return (<>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            {data && data?.isAdmin && <>
                <Route path="/admin/create-product" element={<CreateProduct />} />
                <Route path="/admin/update-product/:id" element={<UpdateProduct />} />
            </>
            }
            {data ? (<>
                <Route path="/cart" element={<Cart />} />
                <Route path="/product/:id" element={<ProductDetails />} />
                <Route path="/admin/user-profile" element={<ProfileUser />} />
            </>)
                : (<>
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                </>)}

            <Route path="*" element={<PageNotFound />} />

        </Routes>
    </>)
}

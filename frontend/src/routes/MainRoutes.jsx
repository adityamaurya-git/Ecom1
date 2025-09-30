// import { lazy } from "react"
import { Route, Routes } from "react-router-dom"
import { useSelector } from "react-redux"


// const Home = lazy(() => import('../pages/Home'))
// const Cart = lazy(() => import('../pages/Cart'))
// const Products = lazy(() => import('../pages/Products'))
// const Login = lazy(() => import('../pages/Login'))
// const Register = lazy(() => import('../pages/Register'))
// const CreateProduct = lazy(() => import('../pages/admin/CreateProduct'))
// const UpdateProduct = lazy(() => import('../pages/admin/UpdateProduct'))
// const ProductDetails = lazy(() => import('../Components/ProductDetails'))
// const ProfileUser = lazy(() => import('../pages/user/ProfileUser'))
// const PageNotFound = lazy(() => import('../../src/PageNotFound'))
// const AuthRoutes = lazy(() => import('../routes/AuthRoutes'))

import {Home} from '../pages/Home'
import {Products} from '../pages/Products'
import {Login} from '../pages/Login'
import {Register} from '../pages/Register'
import {Cart} from '../pages/Cart'
import {CreateProduct} from '../pages/admin/CreateProduct'
import {UpdateProduct} from '../pages/admin/UpdateProduct'
import {ProfileUser} from '../pages/user/ProfileUser'
import {ProductDetails} from '../Components/ProductDetails'
import {AuthRoutes} from './AuthRoutes'


export const MainRoutes = () => {

    const { data } = useSelector((state) => {
        return state.users;
    })

    return (<>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            {data && data?.isAdmin && <>
                <Route  path="/admin/create-product" element={<CreateProduct />} />
                <Route  path="/admin/update-product/:id" element={<UpdateProduct />} />
            </>
            }

            <Route path="/cart" element={<AuthRoutes><Cart /></AuthRoutes>} />
            <Route path="/product/:id" element={<ProductDetails />}/>
            <Route path="/admin/user-profile" element={<AuthRoutes><ProfileUser /></AuthRoutes>} />


            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />


            {/* <Route path="*" element={<PageNotFound />} /> */}

        </Routes>
    </>)
}

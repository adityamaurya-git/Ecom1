import {  useEffect } from "react"
import { Navbar } from "./Components/Navbar"
import { MainRoutes } from "./routes/MainRoutes"
import { asyncCurrentUser } from "./store/actions/userAction"
import { useDispatch, useSelector } from "react-redux"
import { asyncLoadProduct } from "./store/actions/productAction"

export const App = () => {

    const dispatch = useDispatch();

    const users = useSelector((state) => {
        return state.users;
    })

    const products = useSelector((state) => {
        return state.products;
    })


    useEffect(() => {
        !users.data && dispatch(asyncCurrentUser())
    }, [users])

    useEffect(() => {
        products.data.length == 0 && dispatch(asyncLoadProduct());
    }, [products])

    return (<>
        <div className='bg-[#FDF8E8] w-full h-full '>
                <Navbar />
                <MainRoutes />
        </div>
    </>)
}

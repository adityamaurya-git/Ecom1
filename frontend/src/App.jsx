import { useEffect } from "react"
import { Navbar } from "./Components/Navbar"
import { MainRoutes } from "./routes/MainRoutes"
import { asyncCurrentUser } from "./store/actions/userAction"
import { useDispatch } from "react-redux"
import { asyncLoadProduct } from "./store/actions/productAction"

export const App = () => {

    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(asyncCurrentUser());
        dispatch(asyncLoadProduct());
    },[])

    return (<>
        <div className='bg-zinc-950 w-full h-screen text-white'>
            <Navbar/>
            <MainRoutes />
        </div>
    </>)
}

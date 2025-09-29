import { useDispatch, useSelector } from "react-redux"
import { asyncUpdateUser } from "../store/actions/userAction";

export const Cart = () => {
    const dispatch = useDispatch();

    const products = useSelector((state) => {
        return state.products
    })

    const users = useSelector((state) => {
        return state.users;
    })

    const increaseQuantity = (curr, index) => {
        const copyUser = { ...users.data, cart: [...users.data.cart] };

        copyUser.cart[index] = { product: curr.product, quantity: copyUser.cart[index].quantity + 1 }

        dispatch(asyncUpdateUser(copyUser, users.data.id));
    }

    const decreaseQuantity = (curr, index) => {
        const copyUser = { ...users.data, cart: [...users.data.cart] };

        
        if(copyUser.cart[index].quantity > 1){
            copyUser.cart[index] = { product: curr.product, quantity: copyUser.cart[index].quantity - 1 }
        }
        else{
            copyUser.cart.splice(index ,1);
        }

        dispatch(asyncUpdateUser(copyUser, users.data.id));
    }
    return (<>
        <ul className="w-full flex flex-col gap-3 text-white p-2">
            {
                users.data.cart.map((curr, index) => {
                    const { title, price, description, category, image } = curr.product
                    return <li className="bg-zinc-900 p-3 w-full  flex  gap-3 items-center rounded-lg" key={curr.product.id}>
                        <div className=" top h-[45%]">
                            <div className="w-[5vw] h-full" >
                                <img className="w-full h-full object-cover" src={image} alt="" />
                            </div>
                        </div>
                        <div className=" bottom w-full h-[55%] flex flex-col gap-2">
                            <h1 className="font-black">{title}</h1>
                            <h3 className="font-light">{price} /-</h3>
                            <div className="flex gap-1 items-center">
                                <button className="text-2xl bg-white text-black rounded-full px-2.5 flex items-center justify-center"
                                    onClick={() => decreaseQuantity(curr, index)}>-</button>
                                <span className="bg-zinc-700 px-2 rounded-full">{curr.quantity}</span>
                                <button className="text-lg bg-white text-black rounded-full px-2 flex items-center justify-center"
                                    onClick={() => increaseQuantity(curr, index)}>+</button>
                            </div>
                        </div>

                    </li>
                })
            }
        </ul>
    </>)
}
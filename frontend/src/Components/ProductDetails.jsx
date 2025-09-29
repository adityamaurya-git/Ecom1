import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom"
import { asyncDeleteProduct, asyncUpdateProduct } from "../store/actions/productAction";

export const ProductDetails = () => {
    const params = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { data } = useSelector((state) => {
        return state.products;
    });

    const user = useSelector((state) => {
        return state.users;
    });
 
    const product = data.find((product) => {
        return product.id == params.id
    })

    const { register, reset, handleSubmit } = useForm({
        defaultValues:{
            title: product?.title,
            image: product?.image,
            category: product?.category,
            price: product?.price,
            description: product?.description
        }
    });

    const updateProductHandler = (formData) => {
        
        dispatch(asyncUpdateProduct(formData , params.id));
        navigate('/products');
    }

    const deleteHandler = () =>{
        dispatch(asyncDeleteProduct(params.id));
        navigate('/products');
    }

    return product ? (<>
        <div className="w-full h-full flex justify-around">
            <div className=" flex flex-col gap-3 w-1/3 bg-zinc-900 text-white p-3 ">

                <div className="cardTop border-b-1 w-full flex justify-center h-[55%]">

                    <div className="w-[50%] h-full">
                        <img className="w-full h-full object-cover" src={product.image} />
                    </div>
                    <div className="w-[50%] flex flex-col gap-2 p-2">
                        <h1 className="font-black" >{product.title}</h1>
                        <h3> <span>{product.price}</span> </h3>
                        <p>Desc: <span className=" text-sm">{product.description}</span></p>
                    </div>
                </div>

                <div className="cardBottom flex flex-col gap-2 ">


                    <p>Category : <span className="bg-green-500 px-1 py-0.5 rounded-lg text-sm">{product.category}</span></p>

                </div>
            </div>
            {user.data && user?.data.isAdmin &&
                <div className='w-1/3  flex justify-center items-center'>
                <form
                    className=' w-full p-4 bg-zinc-900 flex flex-col gap-4 rounded-lg items-center'
                    onSubmit={handleSubmit(updateProductHandler)}>
                    <input
                        className='px-2 py-1 bg-zinc-800 w-full rounded-lg '
                        type="text"
                        {...register("title")}
                        placeholder='Enter Title'
                        autoComplete='off'
                    />

                    <input
                        className="px-2 py-1 bg-zinc-800 w-full rounded-lg"
                        type="number"
                        {...register("price")}
                        placeholder="Enter Price"
                        autoComplete="off"
                    />

                    <textarea
                        className='px-2 py-1 bg-zinc-800 w-full rounded-lg resize-none'
                        {...register("description")}
                        placeholder='Enter Description'
                        autoComplete='off'
                    />

                    <select className="px-2 py-1 bg-zinc-800 w-full rounded-lg"
                        {...register("category")}>
                        <option value="">--Select--</option>
                        <option value="men">Men Wear</option>
                        <option value="women">Women Wear</option>
                        <option value="unisex">Unisex</option>
                    </select>

                    <input
                        className="px-2 py-1 bg-zinc-800 w-full rounded-lg "
                        type="url"
                        {...register("image")}
                        placeholder="Image URL"
                        autoComplete="off" />

                    <div className="w-full flex gap-4 justify-center">
                        <input
                            className='bg-blue-500 rounded-lg px-2 py-1 w-1/3 cursor-pointer'
                            type="submit"
                            value="Update"
                        />
                        <input
                            className="bg-red-500 rounded-lg px-2 py-1 w-1/3 cursor-pointer"
                            onClick={deleteHandler}
                            type="submit"
                            value="Delete"
                        />
                    </div>

                </form>
            </div>
            }
            
        </div>

    </>) : "Loading..."
}
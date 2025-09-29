import { nanoid } from "nanoid"
import { useForm } from "react-hook-form"
import { useNavigate } from "react-router-dom"
import { useDispatch } from "react-redux"
import { asyncCreateProduct } from "../../store/actions/productAction"

export const CreateProduct = () =>{

    const {register , reset , handleSubmit} = useForm({
        // defaultValues:{
        //     title:
        // }
    });
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const createProductHandler = (formData) =>{
        formData.id = nanoid();
        dispatch(asyncCreateProduct(formData));
        reset();
        navigate('/products');
    }

    return(<>
        <div className='w-full h-screen flex justify-center items-center'>
            <form 
            className=' w-1/3 p-4 bg-zinc-900 flex flex-col gap-3 rounded-lg items-center'
            onSubmit={handleSubmit(createProductHandler)}>
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
                    autoComplete="off"/>

                <input
                    className='bg-blue-500 rounded-lg px-2 py-1 w-1/3 cursor-pointer'
                    type="submit"
                    value="Create" 
                />

            </form>
        </div>
    </>)
}
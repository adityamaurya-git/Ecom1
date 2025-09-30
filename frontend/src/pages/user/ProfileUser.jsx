import { useForm } from "react-hook-form"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom";
import { asyncDeleteUser, asyncLogout, asyncUpdateUser } from "../../store/actions/userAction";

export const ProfileUser = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const {data} = useSelector((state)=>{
        return state.users;
    })

    const { register, reset, handleSubmit } = useForm({
        defaultValues:{
            username : data?.username,
            email : data?.email,
            password : data?.password
        }
    })

    const updateHandler = (formData) =>{
        dispatch(asyncUpdateUser(formData , data.id));
        navigate('/products');
    }

    const logoutHandler = () =>{
        dispatch(asyncLogout());
        navigate('/login');
    }

    const deleteHandler = () =>{
        dispatch(asyncDeleteUser(data.id));
        navigate('/')
    }

    return (<>
        <div className="w-full flex justify-center items-center h-screen">
            <form
                className=' w-1/3 p-4 bg-[#F1E7C7] flex flex-col gap-3 rounded-lg items-center'
                onSubmit={handleSubmit(updateHandler)}
            >
                <input
                    className='px-2 py-1 bg-[#FDF8E8] w-full rounded-lg '
                    type="text"
                    {...register("username")}
                    placeholder='Enter Username'
                    autoComplete='off'
                />

                <input
                    className="px-2 py-1 bg-[#FDF8E8] w-full rounded-lg"
                    type="email"
                    {...register("email")}
                    placeholder="Enter Email"
                    autoComplete="off"
                />

                <input
                    className='px-2 py-1 bg-[#FDF8E8] w-full rounded-lg '
                    type="password"
                    {...register("password")}
                    placeholder='Enter Password'
                    autoComplete='off'
                />

                <div className="w-full flex gap-2 justify-center">
                    <input
                        className='bg-white text-[#BD30B1] font-semibold rounded-lg px-2 py-1 w-1/3 cursor-pointer'
                        type="button"
                        value="Logout"
                        onClick={logoutHandler}
                    />
                    <input
                        className='bg-white text-[#BD30B1] font-semibold rounded-lg px-2 py-1 w-1/3 cursor-pointer'
                        type="submit"
                        value="Update"
                    />
                    <input
                        className='bg-white text-[#BD30B1] font-semibold rounded-lg px-2 py-1 w-1/3 cursor-pointer'
                        type="button"
                        value="Delete"
                        onClick={deleteHandler}
                    />
                </div>

            </form>
        </div>
    </>)
}
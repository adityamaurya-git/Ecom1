import { nanoid } from "nanoid"
import { useForm } from "react-hook-form"
import { Link, useNavigate } from "react-router-dom"
import { asyncRegister } from "../store/actions/userAction"
import { useDispatch } from "react-redux"

export const Register = () =>{

    const {register , reset , handleSubmit} = useForm();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const registerHandler = (formData) =>{
        formData.id = nanoid();
        formData.isAdmin = false;
        formData.cart = [];
        dispatch(asyncRegister(formData));
        reset();
        navigate('/login');
    }

    return(<>
        <div className='w-full h-screen flex justify-center items-center'>
            <form 
            className=' w-1/3 p-4 bg-[#F1E7C7] flex flex-col gap-3 rounded-lg items-center'
            onSubmit={handleSubmit(registerHandler)}>
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

                <input
                    className='bg-white text-[#BD30B1] font-semibold rounded-lg px-2 py-1 w-1/3 cursor-pointer'
                    type="submit"
                    value="Register" 
                />
                <p>Already have an account ? <Link className='text-[#BD30B1]' to='/login'  >Login</Link></p>

            </form>
        </div>
    </>)
}
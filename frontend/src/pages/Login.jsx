import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import {Link, useNavigate} from 'react-router-dom'
import { asyncLogin } from '../store/actions/userAction'

export const Login = () => {

    const { register, handleSubmit, reset } = useForm()
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const loginHandler = (formData) => {
        dispatch(asyncLogin(formData))
        navigate('/products');
        reset()
    }

    return (<>
        <div className='w-full h-screen flex justify-center items-center'>
            <form 
            className=' w-1/3 p-4 bg-zinc-900 flex flex-col gap-3 rounded-lg items-center'
            onSubmit={handleSubmit(loginHandler)}>
                <input
                    className='px-2 py-1 bg-zinc-800 w-full rounded-lg ' 
                    type="email"
                    {...register("email")}
                    placeholder='Enter Email'
                    autoComplete='off'
                />

                <input
                    className='px-2 py-1 bg-zinc-800 w-full rounded-lg ' 
                    type="password"
                    {...register("password")}
                    placeholder='Enter Password'
                    autoComplete='off'
                 />

                <input
                    className='bg-blue-500 rounded-lg px-2 py-1 w-1/3 cursor-pointer'
                    type="submit"
                    value="Login" 
                />
                <p>Don't have an account ? <Link className='text-blue-500' to='/register'  >Register</Link></p>
            </form>
        </div>
    </>)
}

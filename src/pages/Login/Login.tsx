import { Link, useNavigate } from "react-router-dom";
import { FieldValues, useForm } from "react-hook-form";
import { toast } from "sonner";
import { useAppDispatch } from "../../redux/features/hook";
import { useLoginMutation } from "../../redux/features/auth/authApi";
import { verifyToken } from "../../utils/verifyToken";
import { setUser, TUser } from "../../redux/features/auth/authSlice";

const Login = () => {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const { register, handleSubmit, formState: { errors }, } = useForm()

    const [login] = useLoginMutation();

    const onSubmit = async(data:FieldValues) =>{
        const toastId = toast.loading('Logging in');

        try {
            const userInfo ={
                email:data.email,
                password:data.password,
            };
            const res = await login(userInfo).unwrap();
            const user = verifyToken(res.data.accessToken) as TUser;
            console.log(user);
            dispatch(setUser({user:user, token:res.data.accessToken}));
            toast.success('Logged in',{id:toastId, duration:2000});
            navigate('/')
        } catch (err) {
            toast.error('Something went wrong',{id:toastId, duration:2000});
        }
    }

    return (
        <div>
        <div className="mx-auto md:w-1/3">
           <h2 className="text-3xl mb-6 text-center">Please Login</h2>
           <form onSubmit={handleSubmit(onSubmit)}>
              
               <input type="email" placeholder="Email" {...register('email', {required:true})} className="border w-full py-2 px-4 mb-4" />
               {
                    errors.email && <span className="text-red-500">Email is required</span>
                }
               <br />
               <input type="password" placeholder="Password" {...register('password',{required:true})} className="border w-full py-2 px-4 mb-4" />
               {
                    errors.password && <span className="text-red-500">Password is required</span>
                }
               <br />
               
               <input className="w-full mb-4" type="submit" value="Login" />
           </form>
           <p className="text-center mb-5">New here? Please <Link className="text-blue-500" to="/register">Register</Link> </p>
       </div>  
      </div>   
    );
};

export default Login;
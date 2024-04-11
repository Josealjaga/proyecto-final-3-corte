import { useForm } from "react-hook-form";
import registerRequest from "../api/auth.js";
import {useNavigate} from 'react-router-dom';


function RegisterPage() {
    const { register, handleSubmit} = useForm();
    const navigate = useNavigate();

    const onSubmit = async (values) => {
        try{
        const res = await registerRequest(values);
        console.log(res);

        alert('Usuario creado con éxito');
        navigate('/users');
        } catch(error){
            console.log(error.response.data);
            alert(error.response.data)
        }
    };

    return (
        <div className="bg-cyan-500">

            <form onSubmit={handleSubmit(onSubmit)}>
             

                <div className="bg-grey-lighter min-h-screen flex flex-col">
                    <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
                        <div className="bg-white px-6 py-8 rounded shadow-md text-black w-full">
                    <h1 className="mb-8 text-3xl text-center">Sign up</h1>
                    <input 
                        type="text" {...register("fullname", { required: true })}
                        className="block border border-grey-light w-full p-3 rounded mb-4"
                        name="fullname"
                        placeholder="Full Name" />

                    <input 
                        type="text" {...register("email", {required: true })}
                        className="block border border-grey-light w-full p-3 rounded mb-4"
                        name="email"
                        placeholder="Email" />

                    <input 
                        type="password" {...register("password", {required: true })}
                        className="block border border-grey-light w-full p-3 rounded mb-4"
                        name="password"
                        placeholder="Password" />
                    <select
                        type="text" {...register("rol", {required: true })}
                        className="block border border-grey-light w-full p-3 rounded mb-4"
                        name="rol"
                        placeholder="Role">
                        <option>Administrador</option>
                        <option>Gestor</option>
                    </select>

                    <button
                        type="submit"
                        className="font-bold w-full text-center py-3 rounded bg-green-600 text-black hover:bg-green-dark focus:outline-none my-1"
                    >Create Account</button>

                    <div className="text-center text-sm text-grey-dark mt-4">
                        By signing up, you agree to the 
                        <a className="ml-1 underline-offset-2 underline text-stone-500 " href="#">
                             Terms of Service
                        </a> and 
                        <a className="ml-1 underline-offset-2 underline text-stone-500 " href="#">
                            Privacy Policy
                        </a>
                    </div>
                </div>

                <div className="text-grey-dark mt-6">
                    Already have an account? 
                    <a className="ml-1 underline text-blue-500" href="../users">
                        Log in
                    </a>.
                </div>
            </div>
        </div>
                
            </form>

        </div>
    );
}

export default RegisterPage;
import { useForm } from "react-hook-form";
import loginRequest from "../api/login.js";
import { saveSessionStorageToken } from "../utils/sessionStorageManager.js";
import {useNavigate} from 'react-router-dom';

function LoginPage() {

    const {register, handleSubmit} = useForm();
    const navigate = useNavigate();

    const onSubmit = async (values) => {
        try {
            const res = await loginRequest(values);
            console.log(res.data);
            saveSessionStorageToken(res.data.token);
            alert('Usuario logeado con éxito');
            navigate('/home');
        } catch (error) {
            console.log(error.response.data);
            alert(error.response.data)
        }
        
    }
    return (
        <div className="bg-cyan-500">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <h1 className="text-4xl text-center font-bold pt-8 pb-1 ">Bienvenido al cotizador de ZTechnology</h1>
                        <div className="bg-grey-lighter min-h-screen flex flex-col">
                            <div className="container max-w-sm mx-auto flex-1 flex flex-col justify-center px-2">
                                <div className="bg-white px-6 py-8 rounded shadow-md text-black w-full">
                                <h1 className="mb-8 text-3xl text-center">Login</h1>
                               
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
                                
                                <button
                                    type="submit"
                                    className="font-bold w-full text-center py-3 rounded bg-green-600 text-black hover:bg-green-dark focus:outline-none my-1">
                                        Sing in
                                </button>

                            </div>
                        </div>
                    </div>
                    
                </form>

            </div>
        );
    }

export default LoginPage;
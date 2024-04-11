import { useForm } from "react-hook-form";
import {useNavigate} from 'react-router-dom';
import clientRegisterRequest from "../api/client";

export function NewClientForm () {

const { register, handleSubmit} = useForm();
    const navigate = useNavigate();
    const onSubmit = async (values) => {
        
        try{
        const res = await clientRegisterRequest(values);
        console.log(res);

        alert('Cliente creado con éxito');
        navigate('/clients')
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
                    <h1 className="mb-8 text-3xl text-center">New Client</h1>
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
                        type="text" {...register("adress", {required: true })}
                        className="block border border-grey-light w-full p-3 rounded mb-4"
                        name="adress"
                        placeholder="Adress" />

                    <button
                        type="submit"
                        className="font-bold w-full text-center py-3 rounded bg-green-600 text-black hover:bg-green-dark focus:outline-none my-1"
                    >Create Client</button>
                        </div>
                    </div>
                </div>
                </form>
                
                </div>
                
        
        )
}

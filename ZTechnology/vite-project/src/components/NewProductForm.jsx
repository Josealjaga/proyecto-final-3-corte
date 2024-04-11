import { useForm } from "react-hook-form";
import {useNavigate} from 'react-router-dom';
import productRegisterRequest from "../api/products"

export function NewProductForm () {

const { register, handleSubmit} = useForm();
    const navigate = useNavigate();
    const onSubmit = async (values) => {
        
        try{
        const res = await productRegisterRequest(values);
        console.log(res);

        alert('Producto creado con éxito');
        navigate('/products')
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
                    <h1 className="mb-8 text-3xl text-center">New Product</h1>
                    <input 
                        type="text" {...register("name", { required: true })}
                        className="block border border-grey-light w-full p-3 rounded mb-4"
                        name="name"
                        placeholder="Product name" />

                    <input 
                        type="text" {...register("detail", {required: true })}
                        className="block border border-grey-light w-full p-3 rounded mb-4"
                        name="detail"
                        placeholder="Product detail" />

                    <input 
                        type="decimal" {...register("price", {required: true })}
                        className="block border border-grey-light w-full p-3 rounded mb-4"
                        name="price"
                        placeholder="Price" />

                    <button
                        type="submit"
                        className="font-bold w-full text-center py-3 rounded bg-green-600 text-black hover:bg-green-dark focus:outline-none my-1"
                    >Create Product</button>
                        </div>
                    </div>
                </div>
                </form>
                
                </div>
                
        
        )
}

import { useForm } from "react-hook-form";
import registerRequest from "../api/auth.js";
import {useNavigate} from 'react-router-dom';
import { useEffect, useState } from "react";
import axios from 'axios';
import { authHeader } from "../utils/apiHandlers.js";


function NewQuotesForm() {
    const [clients, setClients] = useState([]);
    const [products, setProducts] = useState([]);
    const [newItem, setNewItem] = useState({});
    const [itemsProducts, setItemsProducts] = useState([]);
    const [amountProduct, setAmountProduct] = useState(1);
    const { register, handleSubmit} = useForm();
    const navigate = useNavigate();
    
    console.log("newItem",newItem);
    const onSubmit = async (values) => {
        try{
            const parseData = {
                "bill_number": values.bill_number,
                "date": values.user_id,
                "client_id": values.user_id,
                "products": itemsProducts
            }
        const res = await registerRequest(parseData);
        console.log(res);

        alert('Cotizacion creada con éxito');
        navigate('/quotes');
        } catch(error){
            console.log(error.response.data);
            alert(error.response.data)
        }
    };
    useEffect(() => {
        
        axios.get(`http://localhost:3000/api/v1/clients/all`, {
            headers: authHeader()
        })
        .then(response => {
            setClients(response.data);
        })
        .catch(error => {
            console.error('Error al obtener los datos:', error);
        });
    }, []);

    useEffect(() => {
        axios.get(`http://localhost:3000/api/v1/products/all`, {
            headers: authHeader()
        })
        .then(response => {
            setProducts(response.data);
        })
        .catch(error => {
            console.error('Error al obtener los datos:', error);
        });
    }, []);

    const onChangeProduct = (option) => {
        if (option) {
            setNewItem(option);

            // setValue('product', {
            //     price: currencyFormatNumber(option.price),
            //     subtotal: currencyFormatNumber(option.price * amountProduct)
            // })
        }
    };

    const addItemProduct = () => {
         const newItemParse = {
             id: newItem.id,
             name: newItem.name,
             price: newItem.price,
             amount: amountProduct,
         }
        // Actualizamos el estado del arreglo agregando el nuevo item al arreglo existente
        setItemsProducts([...itemsProducts, newItemParse]);
        // reset({
        //     products: "",
        //     product: {
        //         price: 0,
        //         subtotal: 0
        //     }
        // });
    };



    
    return (
        <div className="bg-cyan-500">

            <form onSubmit={handleSubmit(onSubmit)}>
             

                <div className="bg-grey-lighter min-h-screen flex flex-col">
                    <div className="container max-w-xl mx-auto flex-1 flex flex-col items-center justify-center px-2">
                        <div className="bg-white px-6 py-8 rounded shadow-md text-black w-full">
                    <h1 className="mb-8 text-3xl text-center">Nueva cotización</h1>
                    <label className="mx-2 text-lg font-medium">Cliente:</label>
                    <select
                         {...register("client_id", {required: true })}
                        className="block border border-grey-light w-full p-3 rounded mb-4"
                        name="client_id"
                        placeholder="Cliente">
                        <option>Seleccione una opción</option>
                        {clients.map(item => (
                            <option key={item.id} value={item.id}>{item.fullname}</option>
                        ))}       
                    </select>
                    <label className="mx-2 text-lg font-medium">Fecha:</label>   
                    <input 
                        type="date" {...register("date", { required: true })}
                        className="block border border-grey-light w-full p-3 rounded mb-4"
                        name="date"
                        placeholder="Fecha de creación" />
                    <label className="mx-2 text-lg font-medium">Producto:</label>
                    <select
                        {...register("product", {onChange: (e) => onChangeProduct(JSON.parse(e.target.value))})}
                        className="block border border-grey-light w-full p-3 rounded mb-4"
                        placeholder="Producto">
                        <option>Seleccione una opción</option>
                        {products.map(product => {
                        return (
                            <option key={product.id} value={JSON.stringify(product)}>{product.name}</option>
                        )})}   
                    </select>
                    {/* <select className='border' {...register("prod", {onChange: (e) => console.log(JSON.parse(e.target.value))})}>
                |       <option value="">Seleccione una opción</option>
                        {products.map(product => {
                        return (
                            <option key={product.id} value={JSON.stringify(product)}>{product.name}</option>
                        )
                    })}
                </select> */}
                    <div className="mt-8 flex justify-end">
                        <button type="button" onClick={addItemProduct} className="flex items-center border rounded-md px-6 py-2 bg-merkapp-violet text-merkapp-white hover:bg-merkapp-white hover:text-merkapp-violet ease-in-out duration-300 text-sm">Agregar producto</button>
                    </div>
                    {itemsProducts.length !== 0 &&
                        <div className="table-item-products">
                            <h3 className="mx-2 text-lg font-medium">Items:</h3>
                            <table className="w-full text-left border-t border-b mt-4 mb-10">
                                <thead>
                                    <tr>
                                        <th scope="col" className="pt-5 pb-2 px-2">Referencia</th>
                                        <th scope="col" className="pt-5 pb-2 px-2">Descripción</th>
                                        <th scope="col" className="pt-5 pb-2 px-2">Precio</th>
                                        <th scope="col" className="pt-5 pb-2 px-2">Cantidad</th>
                                        <th scope="col" className="pt-5 pb-2 px-2">Subtotal</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {itemsProducts.map((item) => (
                                        <tr key={item.id}>
                                            <td className="pt-2 pb-5 px-2">{item.ref}</td>
                                            <td className="pt-2 pb-5 px-2">{item.name}</td>
                                            <td className="pt-2 pb-5 px-2">{item.price}</td>
                                            <td className="pt-2 pb-5 px-2">{item.amount}</td>
                                            <td className="pt-2 pb-5 px-2">{item.subtotal}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    }
                    <label className="mx-2 text-lg font-medium">Cantidad:</label>
                    <input 
                        type="number" value={amountProduct} {...register("quantity", { required: true })} onChange={(e) => setAmountProduct(e.target.value)}
                        className="block border border-grey-light w-full p-3 rounded mb-4"
                        placeholder="Cantidad" />
                    <label className="mx-2 text-lg font-medium">Descuento:</label>
                    <input 
                        type="number"  {...register("discount", { required: true })}
                        className="block border border-grey-light w-full p-3 rounded mb-4"
                        name="discount"
                        placeholder="Descuento" />
                    <button
                        type="submit"
                        className="font-bold w-full text-center py-3 rounded bg-green-600 text-black hover:bg-green-dark focus:outline-none my-1"
                    >Crear Cotizacion</button>

                </div>
            </div>
        </div>
                
            </form>

        </div>
    );
}

export default NewQuotesForm;
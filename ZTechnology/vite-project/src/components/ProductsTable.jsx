import { useState, useEffect } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { InputSwitch } from 'primereact/inputswitch';
import axios from 'axios'; 
import { authHeader } from '../utils/apiHandlers';
import Popup from '../components/popupProducts'


export default function ProductsTable() {
    const [products, setProducts] = useState([]);
    const [selectedProducts, setSelectedProducts] = useState(null);
    const [rowClick, setRowClick] = useState(true);
    const [showPopup, setShowPopup] = useState(false);


    useEffect(() => {
        fetchProducts();
    }, []);

    const fetchProducts = () => {
        axios.get(`http://localhost:3000/api/v1/products/all`, {
            headers: authHeader()
        })
        .then(response => {
            setProducts(response.data);
        })
        .catch(error => {
            console.error('Error al obtener los datos:', error);
        });
    };

     const handleDelete = () => {
         if (selectedProducts) {
             axios.delete(`http://localhost:3000/api/v1/products/delete/${selectedProducts[0].id}`, {
                 headers: authHeader()
             })
             .then(response => {
                 console.log(response);
             })
             .catch(error => {
                 console.error('Error al eliminar el usuario:', error);
             });
             window.location.reload();
         }
    };
    const togglePopup = () => {
            if (selectedProducts) {
            setShowPopup(!showPopup);
        }
        
    };

        const formatCurrency = (value) => {
        return value.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
    };
        const priceBodyTemplate = (product) => {
        return formatCurrency(product.price);
    };
    return ( <>
    <div className="card">
        <div className="flex justify-content-center align-items-center mb-4 gap-2 table-auto">
            <InputSwitch inputId="input-rowclick" checked={rowClick} onChange={(e) => setRowClick(e.value)} />
            <label htmlFor="input-rowclick">Row Click</label>
        </div>
        <DataTable value={products} selectionMode="multiple" selection={selectedProducts} onSelectionChange={(e) => setSelectedProducts(e.value)} dataKey="id" showGridlines tableStyle={{ minWidth: '50rem' }} className="p-datatable-custom">
            <Column selectionMode="multiple" headerStyle={{ width: '3rem' }}></Column>
            <Column field="id" header="ID"></Column>
            <Column field="name" header="Name"></Column>
            <Column field="detail" header="Detail"></Column>
            <Column field="price" header="Price" body={priceBodyTemplate}></Column>
        </DataTable>
    </div>
    <div className="">
   <button className='mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded mx-2' onClick={handleDelete} disabled={!selectedProducts || !rowClick}> Eliminar Producto</button>
   <button className='mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded mx-2'> <a href='/newProducts'>Crear Producto</a></button>
   <button onClick={togglePopup} className='mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded mx-2'>Editar Usuario</button>
        {showPopup && (<Popup dataSelected={selectedProducts ? selectedProducts[0].id : null} closePopup={togglePopup} />)}
   </div>
   </> );
}
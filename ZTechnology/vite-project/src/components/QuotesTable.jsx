import { useState, useEffect } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { InputSwitch } from 'primereact/inputswitch';
import axios from 'axios'; 
import { authHeader } from '../utils/apiHandlers';

export default function QuotesTable() {
    const [quotes, setQuotes] = useState([]);
    const [selectedQuotes, setSelectedQuotes] = useState(null);
    const [rowClick, setRowClick] = useState(true);

    useEffect(() => {
        fetchQuotes();
    }, []);

    const fetchQuotes = () => {
        axios.get(`http://localhost:3000/api/v1/quotes/all`, {
            headers: authHeader()
        })
        .then(response => {
            setQuotes(response.data);
            console.log(response.data);
        })
        .catch(error => {
            console.error('Error al obtener los datos:', error);
        });
        
    };
     const handleDelete = () => {
         if (selectedQuotes) {
             axios.delete(`http://localhost:3000/api/v1/quotes/delete/${selectedQuotes[0].id}`, {
                 headers: authHeader()
             })
             .then(response => {
                 console.log(response);
             })
             .catch(error => {
                 console.error('Error al eliminar el usuario:', error);
             });
         }
   
         window.location.reload();
  
    };

    return ( <>
    <div className="card">
        <div className="flex justify-content-center align-items-center mb-4 gap-2 table-auto">
            <InputSwitch inputId="input-rowclick" checked={rowClick} onChange={(e) => setRowClick(e.value)} />
            <label htmlFor="input-rowclick">Row Click</label>
        </div>
        <DataTable value={quotes} selectionMode="multiple" selection={selectedQuotes} onSelectionChange={(e) => setSelectedQuotes(e.value)} dataKey="id" showGridlines tableStyle={{ minWidth: '50rem' }} className="p-datatable-custom">
            <Column selectionMode="multiple" headerStyle={{ width: '3rem' }}></Column>
            <Column field="id" header="ID"></Column>
            <Column field="fullname" header="Cliente"></Column>
            <Column field="discount" header="Descuento"></Column>
            <Column field="total" header="Total"></Column>
            <Column field="date" header="Fecha de creacion"></Column>
        </DataTable>
    </div>
    <div className="">
   <button className='mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded mx-2' onClick={handleDelete} disabled={!selectedQuotes || !rowClick}> Eliminar Cotizacion</button>
   <button className='mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded mx-2'> <a href='/newQuotes'>Crear Usuario</a></button>
   </div>
   </> );
}

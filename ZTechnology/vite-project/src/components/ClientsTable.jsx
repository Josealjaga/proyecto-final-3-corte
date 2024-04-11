import { useState, useEffect } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { InputSwitch } from 'primereact/inputswitch';
import axios from 'axios';
import { authHeader } from '../utils/apiHandlers';
import Popup from '../components/popupClients'


export default function ClientsTable() {
    const [clients, setClients] = useState([]);
    const [selectedClients, setSelectedClients] = useState(null);
    const [rowClick, setRowClick] = useState(true);
    const [showPopup, setShowPopup] = useState(false);

useEffect(() => {
        fetchClients();
    }, []);

    const fetchClients = () => {
        axios.get(`http://localhost:3000/api/v1/clients/all`, {
            headers: authHeader()
        })
        .then(response => {
            setClients(response.data);
        })
        .catch(error => {
            console.error('Error al obtener los datos:', error);
        });
    };
    
     const handleDelete = () => {
        if (selectedClients) {
            axios.delete(`http://localhost:3000/api/v1/clients/delete/${selectedClients[0].id}`, {
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
        }

        const togglePopup = () => {
            if (selectedClients) {
            setShowPopup(!showPopup);
            }
        
        };

    

    return ( <>
    <div className="card">
        <div className="flex justify-content-center align-items-center mb-4 gap-2 table-auto">
            <InputSwitch inputId="input-rowclick" checked={rowClick} onChange={(e) => setRowClick(e.value)} />
            <label htmlFor="input-rowclick">Row Click</label>
        </div>
        <DataTable value={clients} selectionMode="multiple" selection={selectedClients} onSelectionChange={(e) => setSelectedClients(e.value)} dataKey="id" showGridlines tableStyle={{ minWidth: '50rem' }} className="p-datatable-custom">
            <Column selectionMode="multiple" headerStyle={{ width: '3rem' }}></Column>
            <Column field="id" header="ID"></Column>
            <Column field="email" header="Email"></Column>
            <Column field="fullname" header="Fullname"></Column>
            <Column field="adress" header="Adress"></Column>
        </DataTable>
    </div>
    <div className="">
   <button className='mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded mx-2' onClick={handleDelete} disabled={!selectedClients || !rowClick}> Eliminar Cliente</button>
   <button className='mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded mx-2' ><a href="/newClients">Crear Nuevo Cliente</a></button>
    <button onClick={togglePopup} className='mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded mx-2'>Editar Usuario</button>
        {showPopup && (<Popup dataSelected={selectedClients ? selectedClients[0].id : null} closePopup={togglePopup} />)}
   </div>
   </> );
}

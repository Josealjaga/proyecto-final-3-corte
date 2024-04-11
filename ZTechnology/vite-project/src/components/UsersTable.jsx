import { useState, useEffect } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { InputSwitch } from 'primereact/inputswitch';
import axios from 'axios'; 
import { authHeader } from '../utils/apiHandlers';
import Popup from './popupUsers';


export default function UsersTable() {
    const [users, setUsers] = useState([]);
    const [selectedUsers, setSelectedUsers] = useState(null);
    const [rowClick, setRowClick] = useState(true);
    const [showPopup, setShowPopup] = useState(false);

    useEffect(() => {
        fetchUsers();
    }, []);

    const fetchUsers = () => {
        axios.get(`http://localhost:3000/api/v1/users/all`, {
            headers: authHeader()
        })
        .then(response => {
            setUsers(response.data);
        })
        .catch(error => {
            console.error('Error al obtener los datos:', error);
        });
    };

     const handleDelete = () => {
         if (selectedUsers) {
             axios.delete(`http://localhost:3000/api/v1/users/delete/${selectedUsers[0].id}`, {
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

    const togglePopup = () => {
        if (selectedUsers) {
         setShowPopup(!showPopup);
        }
        
    };

    return ( <>
    <div className="card">
        <div className="flex justify-content-center align-items-center mb-4 gap-2 table-auto">
            <InputSwitch inputId="input-rowclick" checked={rowClick} onChange={(e) => setRowClick(e.value)} />
            <label htmlFor="input-rowclick">Row Click</label>
        </div>
        <DataTable value={users} selectionMode="multiple" selection={selectedUsers} onSelectionChange={(e) => setSelectedUsers(e.value)} dataKey="id" showGridlines tableStyle={{ minWidth: '50rem' }} className="p-datatable-custom">
            <Column selectionMode="multiple" headerStyle={{ width: '3rem' }}></Column>
            <Column field="id" header="ID"></Column>
            <Column field="email" header="Email"></Column>
            <Column field="fullname" header="Fullname"></Column>
            <Column field="rol" header="Role"></Column>
        </DataTable>
    </div>
    <div className="">
   <button className='mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded mx-2' onClick={handleDelete} disabled={!selectedUsers || !rowClick}> Eliminar Usuario</button>
   <button className='mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded mx-2'> <a href='/register'>Crear Usuario</a></button>
   <button onClick={togglePopup} className='mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded mx-2'>Editar Usuario</button>
        {showPopup && (<Popup dataSelected={selectedUsers ? selectedUsers[0].id : null} closePopup={togglePopup} />)}
   </div>
   </> );
}
import { useState } from 'react';
import PropTypes from 'prop-types'
 import { authHeader } from '../utils/apiHandlers';
 import axios from 'axios';

function Popup({dataSelected, closePopup}) {


  const [formData, setFormData] = useState({
    fullname: '',
    email: '',
    adress: '',
  });

  

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    console.log("handleSubmit");
    e.preventDefault();
    handleUpdate();
  };

  const handleUpdate = () => {
    console.log("Boton editar:");
   if (dataSelected) {
     const updateClient = {
       id: dataSelected,
       email: formData.email,
       fullname: formData.fullname,
       adress: formData.adress
     };
     console.log(updateClient);
     axios.put(`http://localhost:3000/api/v1/clients/update`, updateClient, {
       headers: authHeader()
     })
     .then(response => {
       console.log(response);
     })
     .catch(error => {
       console.error('Error al editar el cliente:', error);
     });
   }
    window.location.reload();
};

  return (
        <div className="fixed z-10 inset-0 overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true">
          <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" aria-hidden="true"></div>
            <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
            <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
              <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <form onSubmit={handleSubmit}>
                  <div className="sm:col-span-3">
                    <label htmlFor="fullname" className="block text-sm font-medium text-gray-700">
                      Fullname
                    </label>
                    <input
                      type="text"
                      name="fullname"
                      id="fullname"
                      value={formData.fullname}
                      onChange={handleChange}
                      className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                    />
                  </div>
                  <div className="sm:col-span-3">
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                    />
                  </div>
                  <div className="sm:col-span-3">
                    <label htmlFor="rol" className="block text-sm font-medium text-gray-700">
                      Adress
                    </label>
                    <input
                      type="text"
                      name="adress"
                      id="adress"
                      value={formData.adress}
                      onChange={handleChange}
                      className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                    />
                  </div>
                  <div className="mt-5 sm:mt-6">
                    <button
                      type="submit"
                      className="inline-flex justify-center w-full rounded-md border border-transparent shadow-sm px-4 py-2 bg-indigo-600 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:ml-3 sm:w-auto sm:text-sm"
                      
                    >
                      Save
                    </button>
                  </div>
                </form>
              </div>
              <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                <button
                  type="button"
                  className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"
                  onClick={closePopup}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
  );
}

Popup.propTypes = {
	dataSelected: PropTypes.number,
  closePopup: PropTypes.func,
};

export default Popup;
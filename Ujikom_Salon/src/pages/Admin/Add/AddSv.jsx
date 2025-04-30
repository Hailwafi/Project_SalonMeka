import React, { useState } from 'react';
import axios from 'axios';

const AddService = () => {
  const [serviceName, setServiceName] = useState('');
  const [serviceCategory, setServiceCategory] = useState('');
  const [servicePrice, setServicePrice] = useState('');
  const [serviceDescription, setServiceDescription] = useState('');
  const [serviceImage, setServiceImage] = useState(null);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleImageChange = (e) => {
    setServiceImage(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData();
    formData.append('category_name', serviceCategory);   // Kategori layanan
    formData.append('name_pelayanan', serviceName);      // Nama layanan
    formData.append('harga', servicePrice);              // Harga layanan
    formData.append('deskripsi_pelayanan', serviceDescription);  // Deskripsi layanan
    if (serviceImage) {
      formData.append('foto_pelayanan', serviceImage);   // Foto layanan
    }

    try {
      const response = await axios.post('http://127.0.0.1:8000/api/user/layanan', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          'Authorization': `Bearer ${localStorage.getItem('token')}`,
        },
      });

      setSuccess(response.data.message);
      setError(null);
      setServiceName('');
      setServiceCategory('');
      setServicePrice('');
      setServiceDescription('');
      setServiceImage(null);
    } catch (error) {
      setError(error.response ? error.response.data.errors : 'Something went wrong');
      setSuccess(null);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col md:flex-row overflow-x-hidden">
      <div className="flex-1 md:ml-64 p-4 sm:p-6 md:p-8 bg-gray-100 min-h-screen max-w-full">
        <div className="max-w-4xl w-full p-6 bg-white shadow-lg rounded-lg">
          <h1 className="text-2xl font-semibold text-center mb-4">Add New Service</h1>

          {/* Show success or error messages */}
          {success && <div className="mb-4 p-4 bg-green-200 text-green-800 rounded">{success}</div>}
          {error && <div className="mb-4 p-4 bg-red-200 text-red-800 rounded">{error}</div>}

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700" htmlFor="serviceCategory">
                Category Name
              </label>
              <input
                type="text"
                id="serviceCategory"
                name="serviceCategory"
                value={serviceCategory}
                onChange={(e) => setServiceCategory(e.target.value)}
                required
                className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700" htmlFor="serviceName">
                Service Name
              </label>
              <input
                type="text"
                id="serviceName"
                name="serviceName"
                value={serviceName}
                onChange={(e) => setServiceName(e.target.value)}
                required
                className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700" htmlFor="serviceDescription">
                Service Description
              </label>
              <textarea
                id="serviceDescription"
                name="serviceDescription"
                value={serviceDescription}
                onChange={(e) => setServiceDescription(e.target.value)}
                required
                className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700" htmlFor="servicePrice">
                Service Price
              </label>
              <input
                type="text"
                id="servicePrice"
                name="servicePrice"
                value={servicePrice}
                onChange={(e) => setServicePrice(e.target.value)}
                required
                className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700" htmlFor="serviceImage">
                Service Image (Optional)
              </label>
              <input
                type="file"
                id="serviceImage"
                name="serviceImage"
                onChange={handleImageChange}
                className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="flex justify-end">
              <button
                type="submit"
                disabled={loading} // Disable the button when loading
                className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                {loading ? 'Adding...' : 'Add Service'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddService;

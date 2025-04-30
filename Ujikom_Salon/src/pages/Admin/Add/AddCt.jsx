import React, { useState } from 'react';
import axios from 'axios';

const AddCategory = () => {
  const [categoryName, setCategoryName] = useState('');
  const [categoryDescription, setCategoryDescription] = useState('');
  const [error, setError] = useState(null);  // Untuk menangani error
  const [success, setSuccess] = useState(null);  // Untuk menangani success

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Data kategori yang akan dikirim ke API
    const categoryData = {
      name: categoryName,
      description: categoryDescription,
      // Jika ada gambar, tambahkan di sini
      // image: selectedImage,  // Misalnya jika ada gambar
    };

    try {
      const response = await axios.post('http://127.0.0.1:8000/api/user/categori', categoryData, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('token')}`  // Sesuaikan dengan token autentikasi kamu
        }
      });

      // Menangani response sukses
      setSuccess(response.data.message);
      setError(null);  // Reset error jika berhasil
      setCategoryName('');
      setCategoryDescription('');
    } catch (error) {
      // Menangani error
      setError(error.response ? error.response.data.errors : 'Something went wrong');
      setSuccess(null);  // Reset success jika terjadi error
    }
  };

  return (
    <div className="flex flex-col md:flex-row overflow-x-hidden">
      <div className="flex-1 md:ml-64 p-4 sm:p-6 md:p-8 bg-gray-100 min-h-screen max-w-full">
        <div className="max-w-4xl w-full p-6 bg-white shadow-lg rounded-lg">
          <h1 className="text-2xl font-semibold text-center mb-4">Add New Category</h1>

          {/* Tampilkan pesan sukses atau error */}
          {success && <div className="mb-4 p-4 bg-green-200 text-green-800 rounded">{success}</div>}
          {error && <div className="mb-4 p-4 bg-red-200 text-red-800 rounded">{error}</div>}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700" htmlFor="categoryName">
                Category Name
              </label>
              <input
                type="text"
                id="categoryName"
                name="categoryName"
                value={categoryName}
                onChange={(e) => setCategoryName(e.target.value)}
                required
                className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700" htmlFor="categoryDescription">
                Category Description
              </label>
              <textarea
                id="categoryDescription"
                name="categoryDescription"
                value={categoryDescription}
                onChange={(e) => setCategoryDescription(e.target.value)}
                rows="4"
                className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="flex justify-end">
              <button
                type="submit"
                className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                Add Category
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddCategory;

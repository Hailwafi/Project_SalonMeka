// src/pages/AllCategory.jsx
import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  FaEye,
  FaEdit,
  FaTrash,
  FaFileImport,
  FaFileExport,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export default function AllCategory() {
  const [categories, setCategories] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/user/categori") // Ganti dengan URL API Laravel kamu
      .then((response) => {
        setCategories(response.data); // Pastikan respons data sesuai format
      })
      .catch((error) => {
        console.error("Gagal mengambil data kategori:", error);
      });
  }, []);

  return (
    <div className="flex flex-col md:flex-row overflow-x-hidden">
      <div className="flex-1 md:ml-64 p-4 sm:p-6 md:p-8 bg-gray-100 min-h-screen max-w-full">
        <h1 className="text-3xl font-bold mb-6 text-center">All Category</h1>

        <div className="flex justify-between items-center mb-6">
          <button 
           onClick={() => navigate('/Admin/Add/AddCt')}
          className="bg-gray-800 hover:bg-gray-700 text-white font-semibold py-2 px-6 rounded-lg shadow-md transition-all">
            Add Category
          </button>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center mb-6 space-y-4 md:space-y-0">
          <div className="flex items-center space-x-2">
            <label htmlFor="entries" className="text-sm font-medium">
              Entries per page
            </label>
            <select
              id="entries"
              className="border border-gray-300 rounded-lg p-2 text-sm focus:ring focus:ring-indigo-300"
            >
              <option>10</option>
              <option>20</option>
              <option>30</option>
            </select>
          </div>

          <div className="flex space-x-2">
            <button className="flex items-center bg-white border px-4 py-2 rounded-lg shadow hover:shadow-md transition space-x-2">
              <FaFileImport />
              <span>Import</span>
            </button>
            <button className="flex items-center bg-white border px-4 py-2 rounded-lg shadow hover:shadow-md transition space-x-2">
              <FaFileExport />
              <span>Export</span>
            </button>
            <input
              type="text"
              placeholder="Search..."
              className="border px-4 py-2 rounded-lg shadow hover:shadow-md transition text-sm"
            />
          </div>
        </div>

        <div className="overflow-x-auto rounded-lg shadow bg-white">
          <table className="min-w-full text-sm text-center">
            <thead className="bg-gray-100 text-gray-700 uppercase">
              <tr>
                <th className="py-3 px-6">#</th>
                <th className="py-3 px-6">Category</th>
                <th className="py-3 px-6">Actions</th>
              </tr>
            </thead>
            <tbody>
              {categories.length > 0 ? (
                categories.map((cat, index) => (
                  <tr key={cat.id} className="border-b hover:bg-gray-50">
                    <td className="py-3 px-6">{index + 1}</td>
                    <td className="py-3 px-6">{cat.name}</td>
                    <td className="py-3 px-6 flex justify-center space-x-2">
                      <button className="bg-green-500 text-white p-2 rounded-full hover:bg-green-600 transition">
                        <FaEye />
                      </button>
                      <button className="bg-yellow-400 text-white p-2 rounded-full hover:bg-yellow-500 transition">
                        <FaEdit />
                      </button>
                      <button className="bg-red-500 text-white p-2 rounded-full hover:bg-red-600 transition">
                        <FaTrash />
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="3" className="py-3 px-6 text-gray-500">
                    Tidak ada data kategori.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        <div className="flex flex-col sm:flex-row justify-between items-center mt-6">
          <p className="text-sm mb-2 sm:mb-0">
            Showing 1 to {categories.length} of {categories.length} entries
          </p>
        </div>
      </div>
    </div>
  );
}

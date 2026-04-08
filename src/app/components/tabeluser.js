"use client"

import { useState } from "react";
import Form from "./formuser"
import { deleteUser } from "../../lib/api"


export default function tableuser({ initialUsers }) {

    const [users, setUsers] = useState(initialUsers)
    const [editingUser, setEditingUser] = useState(null)
    const [searchTerm, setSearchTerm] = useState("")


    const handleDelete = async (id) => {
      if (!confirm("Yakin mau hapus user ini?")) return;

      const data = await deleteUser(id);

      alert("User telah dihapus")

      // update UI langsung
      setUsers((prev) => prev.filter((user) => user.id !== id));
    } 

    const filteredUsers = users.filter((user) =>
      user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.email.toLowerCase().includes(searchTerm.toLowerCase())
    )

  return (
    
    <div className="max-w-4xl mx-auto p-5 space-y-6">
      <div className="p-4 rounded shadow">
        <input
          type="text"
          placeholder="Cari user..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="border p-2 rounded w-full"
        />
      </div>
      <div className=" p-4 rounded shadow">
        <h2 className="text-lg font-bold mb-3">
          {editingUser ? "Edit User" : "Tambah User"}
        </h2>
        <Form
          editingUser={editingUser}
          onAddUser={(newUser) => {
            setUsers((prev) => [newUser, ...prev])
          }}
          onUpdateUser={(updatedUser) => {
            setUsers((prev) =>
              prev.map((u) =>
                u.id === updatedUser.id ? updatedUser : u
              )
            )
            setEditingUser(null)
          }}
        />
      </div>
      <div className="p-4 rounded shadow">
        <h2 className="text-lg font-bold mb-3">Daftar User</h2>

        <table className="w-full border border-gray-300">
          <thead className="bg-gray-800 text-white">
            <tr>
              <th className="p-3 text-left">No</th>
              <th className="p-3 text-left">Nama</th>
              <th className="p-3 text-left">Email</th>
              <th className="p-3 text-left">Action</th>
            </tr>
          </thead>

          <tbody>
            { filteredUsers.length > 0 ? (
              filteredUsers.map((user, index) => (
              <tr key={user.id } className="border-t hover:bg-red-950">
                <td className="p-3">{index+1}</td>
                <td className="p-3">{user.name}</td>
                <td className="p-3">{user.email}</td>
                <td className="space-x-2 p-3">
                  <button onClick={() => setEditingUser(user)} className="bg-yellow-500 text-white px-2 py-1 rounded">
                    Edit
                  </button>
                  <button onClick={() => handleDelete(user.id)} className="bg-red-500 text-white px-3 py-1 rounded">
                    Delete
                  </button>
                  
                </td>
              </tr>
              
            ))
            ) : (
              <tr>
                <td colSpan="4" className="text-center p-3">
                  Data tidak ditemukan 😢
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
      
      
    </div>
    
  )
}
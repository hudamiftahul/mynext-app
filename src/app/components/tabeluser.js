"use client"

import { useState } from "react";
import { useRouter } from "next/navigation";
import Form from "./formuser"


export default function tableuser({ initialUsers }) {
    const id = 0;
    const [users, setUsers] = useState(initialUsers)
    const [editingUser, setEditingUser] = useState(null)


    const handleDelete = async (id) => {
        if (!confirm("Yakin mau hapus user ini?")) return;

        await fetch(`http://localhost:3001/users/${id}`, {
            method: "DELETE",
        })

    // update UI langsung
    setUsers((prev) => prev.filter((user) => user.id !== id));
  }

  return (
    <div>
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
      <table className="w-full border border-gray-300 mt-5">
          <thead className="bg-gray-800 text-white">
            <tr>
              <th className="p-3 text-left">No</th>
              <th className="p-3 text-left">Nama</th>
              <th className="p-3 text-left">Email</th>
              <th className="p-3 text-left">Action</th>
            </tr>
          </thead>

          <tbody>
            {
            users.map((user, index) => (
              <tr key={user.id } className="border-t hover:bg-gray-100">
                <td className="p-3">{index+1}</td>
                <td className="p-3">{user.name}</td>
                <td className="p-3">{user.email}</td>
                <td>
                  <button onClick={() => handleDelete(user.id)} className="p-3 bg-red-500 text-white px-3 py-1 rounded">
                    Delete
                  </button>
                </td>
              </tr>
              
            )
            )}
          </tbody>
        </table>
    </div>
    
  )
}
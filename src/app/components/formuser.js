"use client";

import { useState, useEffect } from "react";
import { addUser, updateUser } from "../../lib/api"

export default function formuser({ onAddUser, onUpdateUser, editingUser }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    if (editingUser) {
      setName(editingUser.name)
      setEmail(editingUser.email)
    }
  }, [editingUser]);

  const handleSubmit = async (e) => {
    e.preventDefault()

    // 🔥 MODE EDIT
    if (editingUser) {

      const data = await updateUser(editingUser.id, { name, email }) // 🔥 pakai ini
      alert("User telah diperbarui");

      onUpdateUser(data)
    } 
    // 🔥 MODE ADD
    else {
      const data = await addUser({ name, email });// 🔥 pakai ini
      alert("User ditambahkan");
      onAddUser(data);
    }

    setName("")
    setEmail("")
  }


  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <input
        type="text"
        placeholder="Nama"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="border p-2 mr-2"
      />

      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="border p-2 mr-2"
      />
      
      <button className="bg-blue-500 text-white px-4 py-2"> 
        {editingUser ? "Update" : "Tambah"} 
      </button>
      {editingUser && (
        <button
          type="button"
          onClick={() => editingUser(null)}
          className="bg-gray-500 text-white px-4 py-2 ml-2"
        >
          Cancel
        </button>
      )}
      
    </form>
  );
}
"use client";

import { useState } from "react";
import { addUser } from "./api"

export default function formuser({ onAddUser, onUpdateUser, editingUser }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault()

    const data = await addUser({ name, email }) // 🔥 pakai ini

    alert("User ditambahkan")

    onAddUser(data) // 🔥 kirim ke parent

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
        Tambah
      </button>
    </form>
  );
}
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
    <form onSubmit={handleSubmit} className="row g-2 mb-3">
      <div className="col-md-5">
        <input
          type="text"
          className="form-control"
          placeholder="Nama"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>

      <div className="col-md-5">
        <input
          type="email"
          className="form-control"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      <div className="col-md-2 d-flex gap-2">
        <button className="btn btn-primary w-100">
          {editingUser ? "Update" : "Tambah"}
        </button>
      </div>
    </form>

    // <form onSubmit={handleSubmit} >
    //   <div className="mb-3">
    //     <input type="text" placeholder="Nama" value={name} onChange={(e) => setName(e.target.value)} className="form-control" />
    //   </div>
    //   <div className="mb-3">
    //     <input type="email" placeholder="name@example.com" value={email} onChange={(e) => setEmail(e.target.value)} className="form-control" />
    //   </div>

      
    //   <div className="mb-3">
    //     <button type="submit" className="btn btn-primary"> 
    //       {editingUser ? "Update" : "Tambah"} 
    //     </button>
    //     {editingUser && (
    //       <button
    //         type="button"
    //         onClick={() => editingUser(null)}
    //         className="btn btn-secondary"
    //       >
    //         Cancel
    //       </button>
    //     )}
    //   </div>
      
      
    // </form>
  );
}
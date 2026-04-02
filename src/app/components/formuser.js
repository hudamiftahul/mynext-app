"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function formuser({ initialUsers }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [users, setUsers] = useState(initialUsers);
  // const [users, setUsers] = useState();


  

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newUser = await fetch("http://localhost:3001/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ name, email })
    });

    alert("User ditambahkan");
    // onAddUser(data);
    setUsers((prev) => [newUser, prev])

    // reset input
    setName("");
    setEmail("");
  };

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
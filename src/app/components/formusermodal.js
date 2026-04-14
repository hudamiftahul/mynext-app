"use client";

import { useState, useEffect } from "react";
import { addUser, updateUser } from "../../lib/api";

export default function formusermodal({
show,
  onClose,
  editingUser,
  onAddUser,
  onUpdateUser,
}) {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  // 🔥 isi form saat edit
  useEffect(() => {
    if (editingUser) {
      setName(editingUser.name || "");
      setEmail(editingUser.email || "");
    } else {
      setName("");
      setEmail("");
    }
  }, [editingUser, show]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (editingUser) {
        const data = await updateUser(editingUser.id, { name, email });
        onUpdateUser(data);
        alert("User berhasil diupdate");
      } else {
        const data = await addUser({ name, email });
        onAddUser(data);
        alert("User berhasil ditambahkan");
      }

      onClose(); // 🔥 tutup modal
    } catch (err) {
      console.error(err);
      alert("Terjadi error");
    } finally {
        setLoading(false);
    }
  };

  if (!show) return null;

  return (
    <div className="modal d-block" style={{ background: "rgba(0,0,0,0.5)" }}>
      <div className="modal-dialog">
        <div className="modal-content">

          <div className="modal-header">
            <h5 className="modal-title">
              {editingUser ? "Edit User" : "Tambah User"}
            </h5>
            <button className="btn-close" onClick={onClose}></button>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="modal-body">

              <input
                type="text"
                className="form-control mb-3"
                placeholder="Nama"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />

              <input
                type="email"
                className="form-control"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />

            </div>

            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" onClick={onClose}>
                Batal
              </button>

              <button type="submit" className="btn btn-primary" disabled={loading}>
                {loading ? "Loading..." : editingUser ? "Update" : "Tambah"}
              </button>
            </div>
          </form>

        </div>
      </div>
    </div>
  );
}
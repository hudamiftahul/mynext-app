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
    <div className="card shadow">
      <div className="card-header d-flex justify-content-between align-items-center">
        <h5 className="mb-0">Data User</h5>
      </div>

      <div className="card-body">

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

        <div className="row g-2 mb-3">
          <div className="col-md-2 d-flex gap-2">
          </div>
          <div className="col-md-5"></div>
          <div className="col-md-5 ">
            <input
              type="text"
              placeholder="Cari user..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="form-control"
              aria-label="default input example"
            />
          </div>
        </div>
        {/* 🔥 TABLE */}
        <div className="table-responsive">
          <table className="table table-bordered">
            <thead className="table-dark">
              <tr>
                <th>No</th>
                <th>Nama</th>
                <th>Email</th>
                <th width="150">Action</th>
              </tr>
            </thead>

            <tbody>
              {filteredUsers.length > 0 ? (
                filteredUsers.map((user, index) => (
                  <tr key={user.id} className="border-t ">
                    <td scope="row">{index + 1}</td>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>
                      <button onClick={() => setEditingUser(user)} className="btn btn-warning">
                        Edit
                      </button>
                      <button onClick={() => handleDelete(user.id)} className="btn btn-danger">
                        Delete
                      </button>

                    </td>
                  </tr>

                ))
              ) : (
                <tr>
                  <td colSpan="4" className="text-center p-3">
                    Data tidak ditemukan !!
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

      </div>
    </div>
    // <main>
    //   <div className="container-fluid px-4">
    //     <h1 className="mt-4">Tables</h1>
    //     <ol className="breadcrumb mb-4">
    //       <li className="breadcrumb-item"><a href="index.html">Dashboard</a></li>
    //       <li className="breadcrumb-item active">Tables</li>
    //     </ol>
    //     <div className="card mb-4">
    //       <div className="card-body">
    //         DataTables is a third party plugin that is used to generate the demo table below. For more information about DataTables, please visit the
    //         <a target="_blank" href="https://datatables.net/">official DataTables documentation</a>
    //         .
    //       </div>
    //     </div>
    //     <div className="card mb-4">
    //       <div className="card-header">
    //         <i className="fas fa-table me-1"></i>
    //         {editingUser ? "Edit User" : "Tambah User"}
    //       </div>
    //       <div className="card-body">
    //         <input
    //           type="text"
    //           placeholder="Cari user..."
    //           value={searchTerm}
    //           onChange={(e) => setSearchTerm(e.target.value)}
    //           className="form-control"
    //           aria-label="default input example"
    //         />
    //         <Form
    //           editingUser={editingUser}
    //           onAddUser={(newUser) => {
    //             setUsers((prev) => [newUser, ...prev])
    //           }}
    //           onUpdateUser={(updatedUser) => {
    //             setUsers((prev) =>
    //               prev.map((u) =>
    //                 u.id === updatedUser.id ? updatedUser : u
    //               )
    //             )
    //             setEditingUser(null)
    //           }}
    //         />
    //       </div>
    //     </div>
    //     <div className="card shadow-sm">
    //       <div className="card-body">
    //         <h5 className="mb-3">Daftar User</h5>

    //         <table>
    //           <thead >
    //             <tr>
    //               <th>No</th>
    //               <th>Nama</th>
    //               <th>Email</th>
    //               <th>Action</th>
    //             </tr>
    //           </thead>

    //           <tbody>
    //             {filteredUsers.length > 0 ? (
    //               filteredUsers.map((user, index) => (
    //                 <tr key={user.id} className="border-t hover:bg-red-950">
    //                   <td scope="row">{index + 1}</td>
    //                   <td>{user.name}</td>
    //                   <td>{user.email}</td>
    //                   <td>
    //                     <button onClick={() => setEditingUser(user)} className="btn btn-warning">
    //                       Edit
    //                     </button>
    //                     <button onClick={() => handleDelete(user.id)} className="btn btn-danger">
    //                       Delete
    //                     </button>

    //                   </td>
    //                 </tr>

    //               ))
    //             ) : (
    //               <tr>
    //                 <td colSpan="4" className="text-center p-3">
    //                   Data tidak ditemukan 😢
    //                 </td>
    //               </tr>
    //             )}
    //           </tbody>
    //         </table>
    //       </div>
    //     </div>


    //   </div>
    // </main>






  )
}
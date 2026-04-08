const BASE_URL = "http://localhost:3001/users"

// 🔥 GET USERS
export async function getUsers() {
  const res = await fetch(BASE_URL, {
    cache: "no-store",
  })

  if (!res.ok) {
    throw new Error("Gagal fetch users")
  }

  return res.json()
}

// 🔥 ADD USER
export async function addUser(data) {
  const res = await fetch(BASE_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })

  if (!res.ok) {
    throw new Error("Gagal tambah user")
  }

  return res.json()
}

// 🔥 DELETE USER
export async function deleteUser(id) {
  const res = await fetch(`${BASE_URL}/${id}`, {
    method: "DELETE",
  })

  if (!res.ok) {
    throw new Error("Gagal delete user")
  }

  return res.json()
}

// 🔥 UPDATE USER
export async function updateUser(id, data) {
  const res = await fetch(`${BASE_URL}/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })

  if (!res.ok) {
    throw new Error("Gagal update user")
  }

  return res.json()
}
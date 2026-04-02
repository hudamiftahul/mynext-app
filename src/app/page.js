import Link from "next/link";
import Form from "./components/formuser";
import TabelUser from "./components/tabeluser";

// async function getUsers() {
//   const res = await fetch("https://jsonplaceholder.typicode.com/users");
//   return res.json();
// }

async function getUsers() {
  const res = await fetch("http://localhost:3001/users", {
    cache: "no-store"
  });

  return res.json();
}





export default async function Home() {
  const users = await getUsers();

  return (
    <div>
      
      <div className="bg-black text-white p-10">
        <h1 className="text-3xl font-bold">Huda App 🚀</h1>
    </div>
      <p>Ini project pertama Next.js</p>
      <Link href="/about">Ke About</Link>
      <div className="max-w-4xl mx-auto p-5">
        <h1 className="text-2xl font-bold mb-4">Daftar User</h1>
        <input
          type="text"
          placeholder="Cari user..."
          className="border p-2 rounded w-full mb-4"
        />
        {/* < Form /> */}
        <Form  initialUsers={users}/>
        <TabelUser initialUsers={users} />
        {/* <table className="w-full border border-gray-300 mt-5">
          <thead className="bg-gray-800 text-white">
            <tr>
              <th className="p-3 text-left">No</th>
              <th className="p-3 text-left">Nama</th>
              <th className="p-3 text-left">Email</th>
              <th className="p-3 text-left">Action</th>
            </tr>
          </thead>

          <tbody>
            {users.map(user => (
              <tr key={user.id } className="border-t hover:bg-gray-100">
                <td className="p-3">{user.id}</td>
                <td className="p-3">{user.name}</td>
                <td className="p-3">{user.email}</td>
                <td>
                  <button onClick={() => handleDelete(user.id)} className="p-3 bg-red-500 text-white px-3 py-1 rounded">
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table> */}
      </div>
    </div>
  );
}
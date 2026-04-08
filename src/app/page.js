import Link from "next/link";
import TabelUser from "./components/tabeluser";
import { getUsers } from "./components/api";


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
        {/* <Form
          onAddUser={(newUser) => {
            setUsers((prev) => [newUser, ...prev]) // 🔥 auto refresh
          }}
        /> */}
         <TabelUser initialUsers={users} />
        
      </div>
    </div>
  );
}
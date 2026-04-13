// import Link from "next/link";
import TabelUser from "../components/tabeluser";
import { getUsers } from "../../lib/api";



export default async function User() {

  const users = await getUsers();

  return (
    <div className="flex-grow-1 p-4 bg-light">
      <h1 className="mb-4">Data Users</h1>

      {/* TABLE USER KAMU */}
      <div className="card">
        {/* <div className="card-header">Data User</div> */}
        <div className="card-body">
          <TabelUser initialUsers={users} />
        </div>
      </div>

    </div>

  );
}
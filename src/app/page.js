// import Link from "next/link";




export default async function Home() {


  return (
    <div className="flex-grow-1 p-4 bg-light">
      <h1 className="mb-4">Dashboard</h1>

      {/* CARD */}
      <div className="row">
        <div className="col-md-3">
          <div className="card bg-primary text-white mb-3">
            <div className="card-body">Primary</div>
          </div>
        </div>

        <div className="col-md-3">
          <div className="card bg-success text-white mb-3">
            <div className="card-body">Success</div>
          </div>
        </div>
      </div>
    </div>

  );
}
import "./Dashboard.css";

function Dashboard() {
  return (
    <div className="dashboard">

      <div className="card">
        <h2>120</h2>
        <p>Total Products</p>
      </div>

      <div className="card">
        <h2>50</h2>
        <p>Total Orders</p>
      </div>

      <div className="card">
        <h2>35</h2>
        <p>Total Users</p>
      </div>

      <div className="card">
        <h2>$5000</h2>
        <p>Total Revenue</p>
      </div>

    </div>
  );
}

export default Dashboard;
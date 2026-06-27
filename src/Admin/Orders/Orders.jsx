import "./Orders.css";

function Orders() {
  return (
    <div className="orders-page">
      <h1>Orders</h1>

      <table>
        <thead>
          <tr>
            <th>Order ID</th>
            <th>Customer</th>
            <th>Product</th>
            <th>Amount</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>#1001</td>
            <td>Ali Khan</td>
            <td>Camera</td>
            <td>$99</td>
            <td>Pending</td>
          </tr>

          <tr>
            <td>#1002</td>
            <td>Sara Ahmed</td>
            <td>Smart Watch</td>
            <td>$120</td>
            <td>Delivered</td>
          </tr>

          <tr>
            <td>#1003</td>
            <td>Ahmed Raza</td>
            <td>T-Shirt</td>
            <td>$35</td>
            <td>Shipped</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Orders;
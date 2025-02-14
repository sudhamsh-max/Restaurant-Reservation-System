import React, { useState } from "react";
import "./App.css";

function App() {
  const [capacity] = useState(50);
  const [seatsLeft, setSeatsLeft] = useState(50);
  const [customers, setCustomers] = useState([]);
  const [form, setForm] = useState({ count: "", name: "", phone: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const addCustomer = () => {
    const guestCount = parseInt(form.count);
    if (!guestCount || guestCount > seatsLeft) return;

    const newCustomer = {
      count: guestCount,
      name: form.name,
      phone: form.phone,
      checkIn: new Date().toLocaleTimeString(),
      status: "Checked In",
    };

    setCustomers([...customers, newCustomer]);
    setSeatsLeft(seatsLeft - guestCount);
    setForm({ count: "", name: "", phone: "" });
  };

  return (
    <div className="container">
      <h1>Restaurant Customer Management</h1>
      <div className="capacity-box">
        <div className="capacity">Total Capacity: {capacity}</div>
        <div className="seats-left">Seats Left: {seatsLeft}</div>
      </div>
      <div className="form-box">
        <label>Guest Count:</label>
        <input name="count" type="number" value={form.count} onChange={handleChange} />

        <label>Name:</label>
        <input name="name" type="text" value={form.name} onChange={handleChange} />

        <label>Phone:</label>
        <input name="phone" type="text" value={form.phone} onChange={handleChange} />

        <button onClick={addCustomer}>Add Customer</button>
      </div>
      <table>
        <thead>
          <tr>
            <th>Count</th>
            <th>Name</th>
            <th>Phone</th>
            <th>Check In</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {customers.map((c, index) => (
            <tr key={index}>
              <td>{c.count}</td>
              <td>{c.name}</td>
              <td>{c.phone}</td>
              <td>{c.checkIn}</td>
              <td>{c.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
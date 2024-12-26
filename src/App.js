import React, { useState } from 'react';
import './App.css';

function App() {
  const [Data, setData] = useState({
    name: '',
    dob: '',
    gender: '',
    phone: '',
    email: '',
    address: '',
    state: '',
    city: '',
    hobbies: []
  });

  const [submitted, setSubmitted] = useState([]);

  const handleChange = (e) => {
    const { name, value, type, selectedOptions } = e.target;
    if (type === 'select-multiple') {
      const values = Array.from(selectedOptions, option => option.value);
      setData({
        ...Data,
        [name]: values
      });
    } else {
      setData({
        ...Data,
        [name]: value
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted([...submitted, Data]);
    setData({
      name: '',
      dob: '',
      gender: '',
      phone: '',
      email: '',
      address: '',
      state: '',
      city: '',
      hobbies: []
    });
  };

  return (
    <div className="App">
      <form className="form1" onSubmit={handleSubmit}>
        <center><h1>Personal Details</h1></center>
        <div className="basic">
          <h3>Basic Information</h3>
        </div>
        <br />
        <b><label>Name: </label></b>
        <input
          type="text"
          className="name"
          name="name"
          value={Data.name}
          onChange={handleChange}
          placeholder="Name"
          required
        />
        <br /><br />
        <b><label>Date of Birth: </label></b>
        <input
          type="date"
          className="date"
          name="dob"
          value={Data.dob}
          onChange={handleChange}
          required
        />
        <br /><br />
        <b><label>Gender: </label></b>
        <select
          id="gender"
          name="gender"
          value={Data.gender}
          onChange={handleChange}
        >
          <option value="">Select Gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
          <option value="prefer_not_to_say">Prefer Not to Say</option>
        </select>
        <br /><br />
        <div className="contact">
          <h3>Contact Information</h3>
        </div>
        <br />
        <b><label>Phone Number: </label></b>
        <input
          type="tel"
          name="phone"
          id="phone"
          pattern="[0-9]{10}"
          value={Data.phone}
          onChange={handleChange}
          placeholder="Enter phone number"
          required
        />
        <br /><br />
        <b><label>Email ID: </label></b>
        <input
          type="email"
          name="email"
          value={Data.email}
          onChange={handleChange}
          placeholder="Email Address"
          required
        />
        <br /><br />
        <div className="address">
          <h3>Residence Information</h3>
        </div>
        <br />
        <b><label>Address: </label></b>
        <textarea
          className="address1"
          name="address"
          value={Data.address}
          onChange={handleChange}
          placeholder="Enter your Address"
          required
        ></textarea>
        <br /><br />
        <b><label>State: </label></b>
        <input
          type="text"
          name="state"
          value={Data.state}
          onChange={handleChange}
          placeholder="Enter State"
        />
        <br /><br />
        <b><label>City: </label></b>
        <input
          type="text"
          className="city"
          name="city"
          value={Data.city}
          onChange={handleChange}
          placeholder="Enter City Name"
          required
        />
        <br /><br />
        <div className="add">
          <h3>Additional Information</h3>
        </div>
        <br />
        <b><label>Hobbies: </label></b>
        <select
          id="hobbies"
          name="hobbies"
          multiple
          value={Data.hobbies}
          onChange={handleChange}
        >
          <option value="Reading">Reading</option>
          <option value="Painting">Painting</option>
          <option value="Sports">Sports</option>
          <option value="Traveling">Traveling</option>
          <option value="Watching movies or TV series">Watching movies or TV series</option>
        </select>
        <br /><br />
        <small>Hold `Ctrl` (or `Cmd` on Mac) to select multiple hobbies</small>
        <br /><br />
        <button className="b1" type="submit">Submit</button>
      </form>

      <div className="submitted">
        <h3>Submitted Items</h3>
        <ul>
          {submitted.map((item, index) => (
            <li key={index}>
              <p><b>Name:</b> {item.name}</p>
              <p><b>Date of Birth:</b> {item.dob}</p>
              <p><b>Gender:</b> {item.gender}</p>
              <p><b>Phone Number:</b> {item.phone}</p>
              <p><b>Email ID:</b> {item.email}</p>
              <p><b>Address:</b> {item.address}</p>
              <p><b>State:</b> {item.state}</p>
              <p><b>City:</b> {item.city}</p>
              <p><b>Hobbies:</b> {item.hobbies.join(', ')}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;

import React, { useState } from 'react';
import './mainpage.css'

function MainPage() {
  const [inputs, setInputs] = useState({});

  const handleSubmit = event => {
    if (event) {
      event.preventDefault();
    }
  };
  const handleInputChange = event => {
    event.persist();
    setInputs(inputs => ({
      ...inputs,
      [event.target.name]: event.target.value
    }));
  };
  return (<div className="hero">
    <div className="card">
      <h1>All your accounts in one place</h1>
      <div className="form">
        <form onSubmit={handleSubmit}>
          <input
            onChange={handleInputChange}
            type="text"
            name="fullName"
            value={inputs.fullName}
            placeholder="Full Name"
          />
          <input
            onChange={handleInputChange}
            type="number"
            name="age"
            value={inputs.age}
            placeholder="Age"
          />
          <input
            onChange={handleInputChange}
            type="text"
            name="sex"
            value={inputs.sex}
            placeholder="Sex"
          />
          <input
            onChange={handleInputChange}
            type="text"
            name="phoneNumber"
            value={inputs.phoneNumber}
            placeholder="Phone Number"
          />
          <input
            onChange={handleInputChange}
            type="mail"
            name="email"
            value={inputs.email}
            placeholder="Email"
          />
          <button> Submit</button>
          </form>
        </div>
      </div>
      </div>
      )

};
export default MainPage;

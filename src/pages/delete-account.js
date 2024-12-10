import React, { useState } from "react";

const Delete = () => {
  const [ phone, setPhone ] = useState("");

  const handleInputChange  = (e) => {
    const { value }= e.target;
    if (/^\d*$/.test(value)) {
      setPhone(value);
    
    }
  }; 

  return (
    <div className="delete-account-container">
      <img src="/images/headerlogo.webp" alt="Kashmir Nirvana" className="logo" />
      <p className="delete-account-message">
        Please enter your phone number registered on Kashmir Nirvana, we will delete
        your account within 30 days of receiving the request.
      </p>
      <form className="delete-account-form">
        <input
          type="text"
          placeholder="Telephone"
          className="phone-input"
          value={phone}
          onChange={handleInputChange}
          maxLength="10"
        />
        <button type="submit" className="submit-button">
          CONTINUE
        </button>
      </form>
    </div>
  );
};

export default Delete;

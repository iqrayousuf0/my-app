import React from "react";


const Navi = () => {
  return (
    <header className="header px-100">
      <div className="top-line"></div>
      <div className="header-content">
        <div className="logo-container">
          <img src="/images/headerlogo.webp" alt="Logo" className="logo" />
        </div>
        {/* <div className="login-container">
          <a href="/login" className="login-link">
            Login
          </a>
        </div> */}
      </div>
      <div className="bottom-line"></div>
    </header>
  );
};

export default Navi;

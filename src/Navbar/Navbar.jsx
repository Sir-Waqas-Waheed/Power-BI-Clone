import React from 'react';
import './Navbar.css'; // Import your custom CSS

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark custom-navbar">
      <div className="container">
      <h1 className="my-4 text-center">𝑷𝒍𝒐𝒕 𝒀𝒐𝒖𝒓 𝑫𝒆𝒔𝒊𝒓𝒆 𝑮𝒓𝒂𝒑𝒉</h1>
        <a className="navbar-brand d-flex align-items-center" href="#">
          <img src="https://graphicsfamily.com/wp-content/uploads/2020/05/P-Letter-Logo-2-1.jpg" alt="Power BI Logo" className="circular-logo mr-2" />
          Power-BI
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;

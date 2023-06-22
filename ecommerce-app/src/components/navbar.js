//import React, { useState } from 'react'
import './navbar.css';
import { useNavigate } from "react-router-dom";

function NavBar() {

    const navigate = useNavigate();

  const handleAddUsersClick = () => {
    navigate('/admin/dashboard/adduser');
  };

  const handleAddProductsClick = () => {
    navigate('/admin/dashboard/addproduct');
  };

  const handleAddCategoriesClick = () => {
    navigate('/admin/dashboard/addcategory');
  };

  const handleLogout = () => {
    navigate('/admin/login');
  };

    return (
      <>
        <nav class="navbar navbar-expand-lg fixed-top navbar-scroll">
  <div class="container">
  <img src={process.env.PUBLIC_URL + '/gamepoint.png'} style={{ width: '120px', height: 'auto' }} />
    <button class="navbar-toggler ps-0" type="button" data-mdb-toggle="collapse" data-mdb-target="#navbarExample01"
      aria-controls="navbarExample01" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon d-flex justify-content-start align-items-center">
        <i class="fas fa-bars"></i>
      </span>
    </button>
    <div class="collapse navbar-collapse" id="navbarExample01">
      <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
        <li class="nav-item active">
          <a class="nav-link"  onClick={handleAddUsersClick}>Add Users</a>
        </li>
        <li class="nav-item">
          <a class="nav-link"  onClick={handleAddProductsClick}>Add Products</a>
        </li>
        <li class="nav-item">
          <a class="nav-link"  onClick={handleAddCategoriesClick}>Add Categories</a>
        </li>
        <li class="nav-item">
          <a class="nav-link"  onClick={handleLogout}>Logout</a>
        </li>
      </ul>

      <ul class="navbar-nav flex-row">
        <li class="nav-item">
          <a class="nav-link px-2" href="#!">
            <i class="fab fa-facebook-square"></i>
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link px-2" href="#!">
            <i class="fab fa-instagram"></i>
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link ps-2" href="#!">
            <i class="fab fa-youtube"></i>
          </a>
        </li>
      </ul>
    </div>
  </div>
</nav>
      </>
    );
  }
  
export default NavBar;
import React, { useState } from 'react'
import './userlogin.css';
import { useNavigate } from "react-router-dom";

import axios from 'axios';

function UserLogin() {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:5000/user/login', {
      username,
      password,
      });

      console.log(response.data); // You can handle the response data as needed

      // Navigate to another component upon successful login
      navigate('/user/homepage');
    } catch (err) {
      console.error(err);

      // Display an error message
      setErrorMessage('Invalid username or password');
    }
  };

  const handleAdminSignInClick = () => {
    navigate('/admin/login');
  };
  

    return (
      <section class="text-center text-lg-start">
        <div class="card mb-3">
          <div class="row g-0 d-flex align-items-center">
            <div class="col-lg-4 d-none d-lg-flex">
              <img src="https://th.bing.com/th/id/R.488eb48222e159bb8b1ccb29b6e10e19?rik=9E%2bs6a4yI9IGYw&riu=http%3a%2f%2fnalagarh.in%2fimg%2fevent%2fevent7.jpg&ehk=4STKRwZXQMGhpwsYm2SgEMKg2zhytmDppnOV48ORIqk%3d&risl=&pid=ImgRaw&r=0" alt="Trendy Pants and Shoes"
                class="w-100 rounded-t-5 rounded-tr-lg-0 rounded-bl-lg-5" />
            </div>
            <div class="col-lg-8">
              <div class="card-body py-5 px-md-5">
              <h1 class="mb-5">Welcome To GamePoint!</h1>
                <form onSubmit={handleSubmit}>
                  <div class="form-outline mb-4">
                    <label class="form-label" for="form2Example1">Username</label>
                    <input 
                      type="text"
                      id="form2Example1"
                      className="form-control"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)} 
                    />
                  </div>
      
                  <div class="form-outline mb-4">
                    <label class="form-label" for="form2Example2">Password</label>
                    <input 
                      type="password"
                      id="form2Example2"
                      className="form-control"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)} />
                  </div>

                  {errorMessage && (
                  <div className="alert alert-danger" role="alert">
                    {errorMessage}
                  </div>
                )}

                  <div class="row mb-4">
                    <div class="col d-flex justify-content-center">
                    </div>
                  </div>
      
                  <button type="submit" class="btn btn-primary btn-block mb-4">Sign in</button>

                  <button type="submit" class="btn btn-primary btn-block mb-4 button-ml" onClick={handleAdminSignInClick}>Sign in as Admin</button>
      
                </form>
      
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
  
export default UserLogin;
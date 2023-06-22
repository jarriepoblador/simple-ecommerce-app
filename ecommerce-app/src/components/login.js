import React, { useState } from 'react'
import './login.css';
import { useNavigate } from "react-router-dom";

import axios from 'axios';

function Login() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:5000/admin/login', {
       email,
       password,
      });

      console.log(response.data); // You can handle the response data as needed

      // Navigate to another component upon successful login
      navigate('/admin/dashboard');
    } catch (err) {
      console.error(err);

      // Display an error message
      setErrorMessage('Invalid username or password');
    }
  };

  const handleUserSignInClick = () => {
    navigate('/');
  };
  

    return (
      <section class="text-center text-lg-start">
        <div class="card mb-3">
          <div class="row g-0 d-flex align-items-center">
            <div class="col-lg-4 d-none d-lg-flex">
              <img src="https://th.bing.com/th/id/R.7a3c6c7c9124f2992947bf6f5c2a88a3?rik=lFAMZzL3X%2bQHog&riu=http%3a%2f%2fuploads.tapatalk-cdn.com%2f20160223%2f2d5646a93ffc145e7fcf5d7057321579.jpg&ehk=mBWSkQmI16bOsNUlk5uTuqe7r2HCUnanUa%2fqjVnqLrA%3d&risl=&pid=ImgRaw&r=0" alt="Trendy Pants and Shoes"
                class="w-100 rounded-t-5 rounded-tr-lg-0 rounded-bl-lg-5" />
            </div>
            <div class="col-lg-8">
              <div class="card-body py-5 px-md-5">
              <h1 class="mb-5">GamePoint Admin Login</h1>
                <form onSubmit={handleSubmit}>
                  <div class="form-outline mb-4">
                    <label class="form-label" for="form2Example1">Email address</label>
                    <input 
                      type="email"
                      id="form2Example1"
                      className="form-control"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)} 
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

                  <button type="submit" class="btn btn-primary btn-block mb-4 button-ml" onClick={handleUserSignInClick}>User Sign in</button>
      
                </form>
      
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
  
export default Login;
import React, { useState } from 'react'
import './adduser.css';
import { useNavigate } from "react-router-dom";

import axios from 'axios';

function AddUser() {

    //Style
    const cardStyle = {
        borderRadius: '15px',
    };

    //Backend
    const [first_name, setFirstname] = useState("");
    const [last_name, setLastname] = useState("");
    const [username, setUsername] = useState("");
    const [address, setAddress] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");


    const navigate = useNavigate();

    const handleReturnBtnClick = () => {
        navigate('/admin/dashboard');
  };

  const handleSubmitBtnClick = async e => {
    e.preventDefault();
    if (first_name && last_name && username && email && password && address) {

        try {
            const body = { 
                first_name,
                last_name,
                password,
                username,
                email,
                address
            };
            const response = await axios.post('http://localhost:5000/users', body, {
      headers: { 'Content-Type': 'application/json' },
            });

            console.log(response);
            alert('User added successfully!');
            navigate('/admin/dashboard');
        // } catch (err) {
        //     console.log(first_name);
        //     console.log(last_name);
        //     console.log(username);
        //     console.log(email);
        //     console.log(address);
            
        } catch (err) {
            console.error(err.message)
            alert('An error has occured.');
            navigate('/admin/dashboard/adduser');
        }
        } else {
          alert("Please fill in all fields");
    }
    
  };

    return (
      <>
        <section class="vh-100 gradient-custom">
  <div class="content-container py-5 h-100">
    <div class="row justify-content-center align-items-center h-100">
      <div class="col-12 col-lg-9 col-xl-7">
        <div class="card shadow-2-strong card-registration" style={cardStyle}>
          <div class="card-body p-4 p-md-5">
            
            <h3 class="mb-4 pb-2 pb-md-0 mb-md-5">Add Users</h3>

            <form onSubmit={handleSubmitBtnClick}>

              <div class="row">
                <div class="col-md-6 mb-4">

                  <div class="form-outline">
                    
                  <label class="form-label" for="firstName">First Name</label>
                    <input 
                        type="text"
                        id="first_name"
                        value={first_name}
                        onChange={e => setFirstname(e.target.value)}  
                        className="form-control form-control-lg custom-textfield" 
                        required
                    />
                  </div>

                </div>
                <div class="col-md-6 mb-4">

                  <div class="form-outline">
                  <label class="form-label" for="lastName">Last Name</label>
                    <input 
                        type="text" 
                        class="form-control form-control-lg custom-textfield" 
                        id="last_name"
                        value={last_name}
                        onChange={e => setLastname(e.target.value)}  
                        required
                    />
                  </div>

                </div>
              </div>

              <div class="row">
                <div class="col-md-6 mb-4 pb-2d-flex align-items-center">

                  <label for="username" class="form-label">Username</label>
                    <input 
                        type="text" 
                        class="form-control form-control-lg custom-textfield" 
                        id="username" 
                        value={username}
                        onChange={e => setUsername(e.target.value)}  
                        required
                    />
                    

                </div>

                <div class="col-md-6 mb-4 pb-2">

                  <div class="form-outline">
                  <label class="form-label" for="emailAddress">Email</label>
                    <input 
                        type="text" 
                        id="email" 
                        class="form-control form-control-lg custom-textfield"
                        value={email}
                        onChange={e => setEmail(e.target.value)}  
                        required
                    />
                    
                  </div>

                </div>
              </div>

              <div class="row">
                
                <div class="col-md-6 mb-4 pb-2">

                  <div class="form-outline">
                    
                    <label class="form-label" for="password">Password</label>
                    <input 
                        type="password" 
                        id="password" 
                        class="form-control form-control-lg custom-textfield" 
                        value={password}
                        onChange={e => setPassword(e.target.value)}  
                        required
                    />
                  </div>
                  

                </div>

                

              </div>

              <div class="form-outline">
                    
                    <label class="form-label" for="address">Address</label>
                    <input 
                        type="text" 
                        id="address" 
                        class="form-control form-control-lg custom-textfield"
                        value={address}
                        onChange={e => setAddress(e.target.value)}  
                        required 
                    />
                  </div>

              <div class="row">
                <div class="col-12">

                </div>
              </div>

              <div class="mt-4 pt-2">
              <div className="mt-4 pt-2 text-center">
                <input class="btn btn-primary btn-lg submit-button" type="submit" value="Return" onClick={handleReturnBtnClick}/>
                <input class="btn btn-primary btn-lg" type="submit" value="Submit"/>
              </div>
              </div>

                

            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
      </>
    );
  }
  
export default AddUser;
import React, { useState } from 'react'
import './addcategory.css';
import { useNavigate } from "react-router-dom";

import axios from 'axios';

function AddCategory() {

    //Style
    const cardStyle = {
        borderRadius: '15px',
    };

    //Backend
    const [category_name, setCategoryName] = useState("");
    const [category_description, setCategoryDesc] = useState("");


    const navigate = useNavigate();

    const handleReturnBtnClick = () => {
        navigate('/admin/dashboard');
  };

  const handleSubmitBtnClick = async e => {
    e.preventDefault();
    if (category_name && category_description) {

        try {
            const body = { 
                category_name,
                category_description
            };
            const response = await axios.post('http://localhost:5000/categories', body, {
      headers: { 'Content-Type': 'application/json' },
            });

            console.log(response);
            alert('Category added successfully!');
            navigate('/admin/dashboard');
            
        } catch (err) {
            console.error(err.message)
            alert('An error has occured.');
            navigate('/admin/dashboard/addcategory');
        }
        } else {
          alert("Please fill in all fields");
    }
    
  };

    return (
      <>
        <section class="vh-100 gradient-custom">
  <div class="container py-5 h-100">
    <div class="row justify-content-center align-items-center h-100">
      <div class="col-12 col-lg-9 col-xl-7">
        <div class="card shadow-2-strong card-registration" style={cardStyle}>
          <div class="card-body p-4 p-md-5">
            
            <h3 class="mb-4 pb-2 pb-md-0 mb-md-5">Add Category</h3>

            <form onSubmit={handleSubmitBtnClick}>

              <div class="row">
                <div class="col-md-6 mb-4">

                  <div class="form-outline">
                    
                  <label class="form-label" for="categoryName">Category Name</label>
                    <input 
                        type="text" 
                        id="category_name"
                        value={category_name}
                        onChange={e => setCategoryName(e.target.value)}  
                        class="form-control form-control-lg custom-textfield" 
                        required
                    />
                  </div>

                </div>
                <div class="col-md-6 mb-4">

                  <div class="form-outline">
                  <label class="form-label" for="categoryDesc">Category Description</label>
                    <textarea
                        className="form-control form-control-lg custom-textfield"
                        id="category_description"
                        value={category_description}
                        onChange={(e) => setCategoryDesc(e.target.value)}
                        required
                    ></textarea>
                  </div>

                </div>
              </div>

              <div class="row">
                <div class="col-md-6 mb-4 pb-2d-flex align-items-center">
                    

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
  
export default AddCategory;
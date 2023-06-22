import React, { useState } from 'react'
import './addproduct.css';
import { useNavigate } from "react-router-dom";
import axios from 'axios';

function AddProduct() {

    //Style
    const cardStyle = {
        borderRadius: '15px',
    };

    const [newProd, setNewProd] = useState({
      product_name: '',
      product_description: '',
      price: '',
      category_id: '',
      quantity: '',
      image: '',
    });

    const handleChange = (e) => {
      setNewProd({...newProd, [e.target.name]: e.target.value});
    }
  
    const handlePhoto = (e) => {
      setNewProd({...newProd, image: e.target.files[0]});
      console.log(newProd.image);
    }


    const navigate = useNavigate();

    const handleReturnBtnClick = () => {
        navigate('/admin/dashboard');
  };

  const handleSubmitBtnClick = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('image', newProd.image);
    formData.append('product_name', newProd.product_name);
    formData.append('product_description', newProd.product_description);
    formData.append('price', newProd.price);
    formData.append('category_id', newProd.category_id);
    formData.append('quantity', newProd.quantity);

    console.log(newProd.image);

    axios.post('http://localhost:5000/products/add/', formData)
      .then(res => {
        console.log(res);
        alert('Product Added Succesfully!');
        navigate('/admin/dashboard');
      })
      .catch(err => {
        console.log(err);
        alert('An error occcured! Add product failed.');
        navigate('/admin/dashboard/addproduct');
      });
  }
  
    return (
      <>
        <section class="vh-100 gradient-custom">
  <div class="content-container py-5 h-100">
    <div class="row justify-content-center align-items-center h-100">
      <div class="col-12 col-lg-9 col-xl-7">
        <div class="card shadow-2-strong card-registration" style={cardStyle}>
          <div class="card-body p-4 p-md-5">
            
            <h3 class="mb-4 pb-2 pb-md-0 mb-md-5">Add Products</h3>

            <form onSubmit={handleSubmitBtnClick} encType='multipart/form-data'>

              <div class="row">
                <div class="col-md-6 mb-4">

                  <div class="form-outline">
                    
                  <label class="form-label" for="firstName">Product Name</label>
                    <input 
                        type="text"
                        name="product_name"
                        value={newProd.product_name}
                        onChange={handleChange}
                        className="form-control form-control-lg custom-textfield" 
                        required
                    />
                  </div>

                </div>
                <div class="col-md-6 mb-4">

                  <div class="form-outline">
                  <label class="form-label" for="lastName">Product Description</label>
                    <input 
                        type="text" 
                        name="product_description"
                        class="form-control form-control-lg custom-textfield" 
                        value={newProd.product_description}
                        onChange={handleChange}
                        required
                    />
                  </div>

                </div>
              </div>

              <div class="row">
                <div class="col-md-6 mb-4 pb-2d-flex align-items-center">

                  <label for="price" class="form-label">Price</label>
                    <input 
                        type="number" 
                        class="form-control form-control-lg custom-textfield" 
                        name="price"
                        value={newProd.price}
                        onChange={handleChange} 
                        required
                    />
                    

                </div>

                <div class="col-md-6 mb-4 pb-2">

                  <div class="form-outline">
                  <label class="form-label" for="category_id">Category</label>
                    <input 
                        type="text" 
                        name="category_id"
                        value={newProd.category_id}
                        onChange={handleChange} 
                        class="form-control form-control-lg custom-textfield"
                        required
                    />
                    
                  </div>

                </div>
              </div>

              <div class="row">
                
                <div class="col-md-6 mb-4 pb-2">

                  <div class="form-outline">
                    
                    <label class="form-label" for="quantity">Quantity</label>
                    <input 
                        type="Number" 
                        name="quantity"
                        value={newProd.quantity}
                        onChange={handleChange} 
                        class="form-control form-control-lg custom-textfield" 
                        required
                    />
                  </div>
                  

                </div>


              </div>

              <div class="row">
                
                <div class="col-md-6 mb-4 pb-2">

                  <div class="form-outline">
                    
                    <label class="form-label" for="image">Image</label>
                    <input
                      type="file"
                      accept=".png, .jpg, .jpeg"
                      name="image"
                      onChange={handlePhoto}
                      />
                  </div>
                  

                </div>


              </div>

              <div class="row">
                <div class="col-12">

                </div>
              </div>

              <div class="mt-4 pt-2">
              <div className="mt-4 pt-2 text-center">
                <input class="btn btn-primary btn-lg submit-button" type="submit" value="Return" onClick={handleReturnBtnClick}/>
                <input class="btn btn-primary btn-lg" type="submit"/>
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
  
export default AddProduct;
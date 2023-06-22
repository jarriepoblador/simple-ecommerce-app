import React, { useState, useEffect } from 'react';
import './dashboard.css';
import { useNavigate } from "react-router-dom";
import Navbar from './navbar.js';

import axios from 'axios';

function Dashboard() {

    const [products, setProducts] = useState([]);

    useEffect(() => {
      // Fetch products from the API
      axios
        .get('http://localhost:5000/products')
        .then(response => {
          setProducts(response.data);
        })
        .catch(error => {
          console.error(error);
        });
    }, []);

    return (
      <>
      <Navbar />

      <div class='container-mt' style={{ marginTop: '20vh' }}>

        <div class="container d-flex justify-content-center mt-50 mb-50">
            
        <div class="row">
            {products.map((product) => (
           <div class="col-md-4 mt-2" key={product._id}>
            
                
                <div class="card">
                                    <div class="card-body">
                                        <div class="card-img-actions">
                                        <div style={{ textAlign: 'center' }}>
                                                <img 
                                                    src={`http://localhost:5000/images/${product.image}`}
                                                    class="card-img img-fluid mx-auto" 
                                                    style={{ width: '153px', height: 'auto' }} 
                                                    alt=""
                                                />
                                        </div>
                                           
                                        </div>
                                    </div>

                                    <div class="card-body bg-light text-center">
                                        <div class="mb-2">
                                            <h6 class="font-weight-semibold mb-2">
                                                <a href="#" class="text-default mb-2" data-abc="true">{product.product_name}</a>
                                            </h6>

                                            <a href="#" class="text-muted" data-abc="true">{product.category_id}</a>
                                        </div>

                                        <h3 class="mb-0 font-weight-semibold">₱{product.price.toFixed(2)}</h3>

                                        <div class="text-muted mb-3">{product.quantity} stocks left</div>
                                        
                                    </div>
                                </div>


                            
                             
           </div> 
             ))}

           {/* <div class="col-md-4 mt-2">
            
                
                <div class="card">
                                    <div class="card-body">
                                        <div class="card-img-actions">
                                        <div style={{ textAlign: 'center' }}>
                                        <img src={process.env.PUBLIC_URL + '/eclipsion.jpg'} class="card-img img-fluid mx-auto" style={{ width: '179px', height: 'auto' }} alt=""/>
                                        </div>
                                           
                                        </div>
                                    </div>

                                    <div class="card-body bg-light text-center">
                                        <div class="mb-2">
                                            <h6 class="font-weight-semibold mb-2">
                                                <a href="#" class="text-default mb-2" data-abc="true">Yonex Power Cushion Eclipsion Z2 Mens Badminton Shoes</a>
                                            </h6>

                                            <a href="#" class="text-muted" data-abc="true">Badminton Shoes</a>
                                        </div>

                                        <h3 class="mb-0 font-weight-semibold">₱13,999.00</h3>

                                        <div class="text-muted mb-3">10 stocks left</div>

                                        
                                    </div>
                                </div>


                            
                             
           </div>

           <div class="col-md-4 mt-2">
            
                
                <div class="card">
                                    <div class="card-body">
                                        <div class="card-img-actions">
                                            <div style={{ textAlign: 'center' }}>
                                        <img src={process.env.PUBLIC_URL + '/crewneck.png'} class="card-img img-fluid mx-auto" style={{ width: '179px', height: 'auto' }} alt=""/>
                                            </div>
                                           
                                        </div>
                                    </div>

                                    <div class="card-body bg-light text-center">
                                        <div class="mb-2">
                                            <h6 class="font-weight-semibold mb-2">
                                                <a href="#" class="text-default mb-2" data-abc="true">Men's Crew Neck Shirt Slim Fit (Blue & White)</a>
                                            </h6>

                                            <a href="#" class="text-muted" data-abc="true">Apparels</a>
                                        </div>

                                        <h3 class="mb-0 font-weight-semibold">₱2,499.00</h3>

                                        <div class="text-muted mb-3">10 stocks left</div>

                                        
                                    </div>
                                </div>


                            
                             
           </div> */}





        </div>
    </div>
    </div>
      </>
    );
  }
  
export default Dashboard;
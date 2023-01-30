import React, { useState, useEffect } from "react";
import Axios from "axios";
import FoodItemsList from './FoodItemsList';
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import mainpage from './mainpage.css'
import { Link, useParams } from "react-router-dom";
import Restro from './Restro.css';


function RestroList() {
  const [products, setProducts] = useState([]);



  const fetchProducts = async () => {
    const { data } = await Axios.get(
      "http://localhost:8787/restaurant/viewall/"
    );
    const products = data;
    setProducts(products);
    console.log(products);
  };


  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="restro" >
      
        <center>
            <h1 className="restro">
               <u > Restaurants we have</u>
               
            </h1>
        
      {products.map((restaurant) => (
        
        <>

        <div  key={restaurant.id}>
             <img src={restaurant.restaurantImage} width="600" height="450" alt="" /><br></br>

      <Link to={`/FoodItemsList/${restaurant.id}/`}>    
       <Button className="button-29"><b> {restaurant.restaurantName} </b>
       </Button> </Link>  
      <h2> </h2>
            <br></br><br></br>
            <strong></strong>
            </div>
        </>
      ))};
      </center>
    </div>
  );
}

export default RestroList;
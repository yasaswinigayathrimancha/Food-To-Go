import React, { useState, useEffect } from 'react';
import './Restaurantowner.css';
import { Table, Button, Form, Modal } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import CustomerItemSearch from './CustomerItemSearch';
import CustomerRestroSearch from './CustomerRestroSearch';
import CustomerRestroList from './CustomerRestroList';

function CustomerView() {
  //carousels
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

//search bars
  

    return (

      <>

      <div>
        <div className="Navbar">
          <div className="Navbar-content">
            <img src='https://media.istockphoto.com/id/1038356020/vector/restaurant-icon.jpg?s=612x612&w=0&k=20&c=Tk_v3JuJA4lz_8ZRJi78xS4p75Idqt97uEtYJciVtFI=' alt='' width="50" height="50"></img>
            <div className="Navbar-title">
              <h2>👋Welcome to FoodToGo      
             
                           <Button className='restrolist-btn'>  
                                    <Link to="/CustomerRestroList"><b>RESTAURANTS</b></Link>  
                           </Button>
                          
                           </h2>
            </div> 
          </div>
        </div>   
      </div>



      
                 <center>
                               <br></br>
                          
                             <CustomerItemSearch/><br></br>
                             <CustomerRestroSearch/>
                  </center>
     

  <br></br>

      <div>
      <center>
      <Carousel activeIndex={index} onSelect={handleSelect} className="carousel">    
      <Carousel.Item>
        <img className="carousel-img" src="https://cdn.shopify.com/s/files/1/0173/7644/4470/articles/Mocktail_Recipes_-_Collection_of_Best_Mocktail_Recipes_in_India.jpg?v=1646374227" alt="Slide 1" />
        <Carousel.Caption>
          <h3>Hello Foodie</h3>
          <p>Check out our fooditems once</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="carousel-img" src="https://www.chicken.ca/wp-content/uploads/2013/05/Moist-Chicken-Burgers-1180x580.jpg" alt="Slide 2" />
        <Carousel.Caption>
          <h3>Hmmm.... tasty</h3>
          <p>Order and Enjoy the delicious food</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="carousel-img" src="https://recipesofhome.com/wp-content/uploads/2020/06/veg-biryani-recipe.jpg" alt="Slide 2" />
        <Carousel.Caption>
          <h3>Heyy buddy</h3>
          <p>You must give it a try</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="carousel-img" src="https://images-gmi-pmc.edge-generalmills.com/8fffa139-5fa4-4011-9338-a2d39e69e964.jpg" alt="Slide 2" />
        <Carousel.Caption>
          <h3>Heyy buddy</h3>
          <p>You must give it a try</p>
        </Carousel.Caption>
      </Carousel.Item>
     </Carousel>
     </center>
      </div>

      </>


    );
};

export default CustomerView;
import React, { useState } from 'react';
import { Navbar, Nav, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Carousel from 'react-bootstrap/Carousel';
import RestroList from './RestroList';
import mainpage from './mainpage.css'
import axios from 'axios';

 function MainPage() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };


  const [itemSearchTerm, setItemSearchTerm] = useState('');
  const [itemSearchResults, setItemSearchResults] = useState([]);
  const [restaurantSearchTerm, setRestaurantSearchTerm] = useState('');
  const [restaurantSearchResults, setRestaurantSearchResults] = useState([]);

  

  const handleItemChange = (event) => {
    setItemSearchTerm(event.target.value);
  };

  const handleRestaurantChange = (event) => {
    setRestaurantSearchTerm(event.target.value);
  };

  const handleItemSubmit = (event) => {
    event.preventDefault();
    axios.get(`http://localhost:8787/items/${itemSearchTerm}`)
    .then(response => {

     console.log((response.data));
      setItemSearchResults(Object.values(response.data));
    })
      .catch(error => {
        console.log(error);
      });
  };

  const handleRestaurantSubmit = (event) => {
    event.preventDefault();
      axios.get(`http://localhost:8787/restaurant/${restaurantSearchTerm}`)
      .then(response => {
    console.log(response.data);
        setRestaurantSearchResults(Object.values(response.data));
      })
      .catch(error => {
        console.log(error);
      });
  };
  
  

  return (
    <div className='background-image'>


      <>
         <nav className="navbar">
              
         <div className="nav-title">Food To Go</div>
      <div className="nav-links">
    🤩click here to see available
       <Button className='restrolist-btn'>    <Link to="/RestroList"><b>RESTAURANTS</b></Link>   </Button>
      </div>   
      <div className="search-container">
        <form className="item-search" onSubmit={handleItemSubmit}>
          <input 
            type="text" 
            placeholder="Search for an item" 
            value={itemSearchTerm} 
            onChange={handleItemChange} 
          />
            <button className='searchbutton' type="submit"><b>search</b></button>
        </form>
        <form className="restaurant-search" onSubmit={handleRestaurantSubmit}>
          <input 
            type="text" 
            placeholder="Search for a restaurant" 
            value={restaurantSearchTerm} 
            onChange={handleRestaurantChange} 
          />
            <button className='searchbutton' type="submit"><b>search</b></button>
        </form>
      </div>
         </nav>

         <div className="search-results">
       
                          {itemSearchResults.map((items) => (
                            <center>

                  
                            <div className='row g-0'>
                                <div className='col-md-4'>
                                
                               
                                      
                                    <li key={items.id}> </li>
                                        <img src = {items.imageUrl}   width = '300' height = '250' />
                                    </div>
                                </div>
                                <div className='col-md-4'>
                                    <div className='card-body'>
                                        <h2 className='itemname'>
                                            {items.name}
                                        </h2>
                                        <h3 className='itemprice'>₹{items.price}</h3>
                                        <h3 className='avail'>{items.availability}</h3>
                                        <button className="addToCart_btn" variant="outline-success">
                                        <b>  ADD TO CART </b> 
                                        </button>
                                  
                                </div>
                            </div>
                       
                        </center>
                                ))};

                  </div>
                         <div className="search-results2">
                       
                          <div className="search-results">
                         {restaurantSearchResults.map((restaurant) => (
                            <div  key={restaurant.id}>
                            <img src={restaurant.restaurantImage} width="300" height="250" alt="" /><br></br>
                                    
                      <Button className="button-29"><b> {restaurant.restaurantName} </b>
                      </Button> 
                           <br></br><br></br>
                           <strong></strong>
                           </div>
                                                               
                                                               ))}
    </div>
  
                      
                         
        </div>

      </>

     
      
      <center>
      <Carousel activeIndex={index} onSelect={handleSelect} className="carousel">    
      <Carousel.Item>
        <img className="carousel-img" src="https://www.onmanorama.com/content/dam/mm/en/food/features/images/2021/10/17/pizza.jpg.transform/576x300/image.jpg" alt="Slide 1" />
        <Carousel.Caption>
          <h3>Hello Foodie</h3>
          <p>Check out our foodsitems once</p>
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
        <img className="carousel-img" src="https://media.istockphoto.com/id/495185782/photo/indian-pulav-vegetable-rice-veg-biryani-basmati-rice.jpg?s=612x612&w=0&k=20&c=q4quybb8UpleJWZ89iLLp9RrvaRnEwrKp-GSuSav49g=" alt="Slide 2" />
        <Carousel.Caption>
          <h3>Heyy buddy</h3>
          <p>You must give it a try</p>
        </Carousel.Caption>
      </Carousel.Item>
     </Carousel>
     </center>


     </div>
  );
};

export default MainPage;
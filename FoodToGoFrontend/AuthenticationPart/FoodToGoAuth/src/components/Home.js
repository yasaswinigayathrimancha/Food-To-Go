import React, { useState, useEffect } from "react";
import Carousel from 'react-bootstrap/Carousel';

import UserService from "../services/user.service";

const Home = () => {


  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };


  return (
    <div className="container">
          <center>
               <h2>Welcome to FOOD TO GO </h2>
               <p>You must have to signin first to view our content</p>
               </center>
               <>
                 
      <center>
      <Carousel activeIndex={index} onSelect={handleSelect} className="carousel">    
      <Carousel.Item>
        <img className="carousel-img" src="https://www.thespruceeats.com/thmb/t6W9k4xfnv7WO7MaIqJ3j3AkQuo=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-520408549-200bf773660f445c944053358cd90858.jpg" alt="Slide 1" />
        <Carousel.Caption>
          <h3>Hello Foodie</h3>
          <p>Check out our foodsitems once</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="carousel-img" src="https://www.eatthis.com/wp-content/uploads/sites/4/2022/06/fast-food-assortment-soda.jpg?quality=82&strip=1" alt="Slide 2" />
        <Carousel.Caption>
          <h3>Hmmm.... tasty</h3>
          <p>Order and Enjoy the delicious food</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="carousel-img" src="https://assets.traveltriangle.com/blog/wp-content/uploads/2018/01/shutterstock_326657696.jpg" alt="Slide 2" />
        <Carousel.Caption>
          <h3>Heyy buddy</h3>
          <p>You must give it a try</p>
        </Carousel.Caption>
      </Carousel.Item>
     </Carousel>
     </center>

               </>

    </div>
  );
};

export default Home;

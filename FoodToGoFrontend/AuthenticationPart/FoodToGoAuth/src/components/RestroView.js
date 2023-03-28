import React, { useState, useEffect } from 'react';
import './Restaurantowner.css';
import { Table, Button, Form, Modal } from 'react-bootstrap';
import RestroViewOrders from './RestroViewOrders';
import RestroViewItems from './RestroViewItems';

function RestroView() {


  return (
<>


    <div className="Navbar">
      <div className="Navbar-content">
      <img src='https://media.istockphoto.com/id/1038356020/vector/restaurant-icon.jpg?s=612x612&w=0&k=20&c=Tk_v3JuJA4lz_8ZRJi78xS4p75Idqt97uEtYJciVtFI=' alt='' width="50" height="50"></img>

        <div className="Navbar-title"><h2>👋Welcome to FoodToGo </h2></div>
       
      </div>
      
    </div>

  
    <RestroViewItems/>
    <RestroViewOrders/>

    </>
  );

};
export default RestroView;
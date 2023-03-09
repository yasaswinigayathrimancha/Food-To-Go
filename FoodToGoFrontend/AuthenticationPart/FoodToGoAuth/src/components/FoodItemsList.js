import React, { useEffect, useState } from 'react';
import {  useParams } from 'react-router-dom';
import axios from 'axios';
import "../App.css";
import FoodItems from './FoodItems.css'
export default function FoodItemsList(){

    const [items, setItems] = useState([]);
  const { id } = useParams();
  
  useEffect(() => {
    loadItems();
  }, []);
  
  const loadItems = async () => {
    const items = await axios.get(`http://localhost:8787/items/viewallbyrestroid/${id}`);
    setItems(items.data);
  };


  const [order, setOrder] = useState({});

    const handleClick = async () => {
        try {
            const response = await fetch('http://localhost:8787/orders/add', {
                method: 'POST',
                body: JSON.stringify(order),
                headers: { 'Content-Type': 'application/json' },
            });
            if (response.ok) {
                alert('Your order has been saved!');
            } else {
                console.error(response);
                alert('An error occurred while saving your order.');
            }
        } catch (error) {
            console.error(error);
            alert('An error occurred while saving your order.');
        }
    };
 


  return (
    <div className = 'container'>
       
       <center> <h1> Food Items we have</h1></center>
           
                {items.map(items => (
                    
                    <center>

                  
                        <div className='row g-0'>
                            <div className='col-md-4'>
                            
                           
                                </div>
                            </div>
                            <div className='col-md-4'>
                                <div className='card-body'>
                                <li key={items.id}> </li>
                                    <img src = {items.imageUrl}  alt=""
                                    width = '400'
                                    height = '300'
                                    />
                                    <h2 className='itemname'>
                                        {items.name}
                                    </h2>
                                    <h3 className='itemprice'>₹{items.price}</h3>
                                    <h3 className='avail'>{items.availability}</h3>
                                    <button  onClick={handleClick}  className="addToCart_btn" variant="outline-success">
                                    ADD TO CART 
                                    </button>
                              
                            </div>
                        </div>
                   
                    </center>
                ))}
           
    </div>
  );
}
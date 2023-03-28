import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import mainpage from './mainpage.css';

export default function CustomerFoodItemsList() {
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
    <div className="">
      <center>
      <u>  <h2>Food Items we have</h2> </u><br></br>
     
      <div className="food-items-container">
        {items.map((item) => (
          <div key={item.id} className="card-item">
            <img src={item.imageUrl} alt=""  />
            <div className="card-content">
              <h2 className="item-name">{item.name}</h2>
              <p className="item-price">₹{item.price}</p>
              <p className="item-availability">{item.availability}</p>
              <button onClick={handleClick} className="addToCart_btn" variant="outline-success">
                ADD TO CART
              </button><br></br>
            </div>
          </div>
        ))}
      </div>
      </center>
    </div>
    
  );
}

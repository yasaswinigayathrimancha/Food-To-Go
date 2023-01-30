import React, { useState, useEffect } from 'react';
import Restaurantowner from './Restaurantowner.css';
import { Table, Button, Form, Modal } from 'react-bootstrap';

function Restaurantownerview() {

  const [orders, setOrders] = useState([]);
  const [updateFormOpen, setUpdateFormOpen] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [newStatus, setNewStatus] = useState('');

  const [formOpen, setFormOpen] = useState(false);
  const [newItem, setNewItem] = useState({});

//orders dropdown
useEffect(() => {
  fetch('http://localhost:8787/orders/viewall')
    .then(res => res.json())
    .then(data => setOrders(data))
    .catch(error => console.error(error));
}, []);

const handleUpdateStatusClick = (order) => {
  setUpdateFormOpen(true);
  setSelectedOrder(order);
}

const closeUpdateForm = () => {
  setUpdateFormOpen(false);
}

const submitUpdateForm = (event) => {
  event.preventDefault();
  // Make PUT request to specified URL
  fetch(`http://localhost:8787/orders/changestatus/${selectedOrder.orderId}/status`, {
    method: 'PUT',
    body: JSON.stringify({ status: newStatus }),
    headers: { 'Content-Type': 'application/json' },
  })
    .then(res => res.json())
    .then(data => {
      console.log(data);
      setUpdateFormOpen(false);
    })
}
//fooditems update and delete
 const [foodItems, setFoodItems] = useState([]);
  const [showEditModal, setShowEditModal] = useState(false);
  const [editId, setEditId] = useState();
  const [editItem, setEditItem] = useState({});

  useEffect(() => {
    fetch('http://localhost:8787/items/viewall')
      .then(response => response.json())
      .then(data => setFoodItems(data));
  }, []);

  const handleEdit = id => {
    setEditId(id);
    const item = foodItems.find(item => item.id === id);
    setEditItem(item);
    setShowEditModal(true);
  };

 const handleDelete = id => {
  fetch(`http://localhost:8787/items/delete/${id}`, {
    method: 'DELETE',

  })
    .then(response => response.json())
    .then(data => {
      setFoodItems(foodItems.filter(item => item.id !== id));
    })
    .catch(error => console.error(error));
};

const handleSubmit = event => {
  event.preventDefault();
  console.log("Edit Item: ", editItem);
  fetch(`http://localhost:8787/items/update/${editId}/`, {
    method: 'PUT',
    body: JSON.stringify(editItem),
    headers: { 'Content-Type': 'application/json' },
  })
  .then(response => {
    console.log("Server Response: ", response);
    if (!response.ok) {
      if(response.status === 400) {
        throw new Error("The item with the specified ID does not exist in the database")
      } else {
        throw new Error(response.statusText);
      }
    }
    return response.json();
  })
  .then(data => {
    console.log("Server Response Data: ", data);
    // update the food item in the list
    const newFoodItems = foodItems.map(item => {
        if(item.id === editId) {
            return data;
        }
        return item;
    });
    setFoodItems(newFoodItems);
    setShowEditModal(false);
  })
  .catch(error => {
    console.error("Error: ", error);
    alert(error.message);
  });
};
//add item
  const handleAddItemClick = () => {
    setFormOpen(true);
  }

  const handleFormClose = () => {
    setFormOpen(false);
  }

  const handleFormSubmit = (event) => {
    event.preventDefault();
    // Make POST request to specified URL
    fetch('http://localhost:8787/items/add/', {
      method: 'POST',
      body: JSON.stringify(newItem),
      headers: { 'Content-Type': 'application/json' },
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        setFormOpen(false);
      })
      .catch(error => console.error(error));
  }

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setNewItem(prevItem => ({ ...prevItem, [name]: value }));
  }

  return (
<>


    <div className="Navbar">
      <div className="Navbar-content">
        <div className="Navbar-title"><h2>FOOD TO GO</h2></div>
        <button className="Navbar-add-item-button" onClick={handleAddItemClick}>Add Item</button>
      </div>
      <form
        className={`Navbar-add-item-form ${formOpen ? 'open' : 'closed'}`}
        onSubmit={handleFormSubmit}
      >
        <div className="Navbar-add-item-form-content">
          <label>
            Item ID:
            <input type="text" name="id" onChange={handleInputChange} />
          </label>
          <label>
            Item name:
            <input type="text" name="name" onChange={handleInputChange} />
          </label>

          <label>
            ImageUrl:
            <input type="text" name="imageUrl" onChange={handleInputChange} />
          </label>
          
          <label>
            Price:
            <input type="text" name="price" onChange={handleInputChange} />
          </label>
          <label>
            Availability:
            <input type="text" name="availability" onChange={handleInputChange} />
          </label>
          
        </div>
        <div className="Navbar-add-item-form-actions">
          <button type="button" onClick={handleFormClose}>Cancel</button>
          <button type="submit">Add Item</button>
        </div>
      </form>
    </div>
<div className="Orders">
      
      <h1> Orders </h1>
      
      <table className='table'>
        <thead>
          <tr>
            <th>OrderId</th>
            <th>OrderStatus</th>

            <th>UpdateStatus</th>
          </tr>
        </thead>
        <tbody>
          {orders.map(order => (
            <tr key={order.orderId}>
              <td>{order.orderId}</td>
              <td>{order.orderStatus}</td>
              
              <td>
                <button onClick={() => handleUpdateStatusClick(order)}>Update Status</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <form
        className={`Orders-update-status-form ${updateFormOpen ? 'open' : 'closed'}`}
        onSubmit={submitUpdateForm}
      >
        <div className="Orders-update-status-form-content">
          <label>
            Update Status:
            <input
              type="text"
              value={newStatus}
              onChange={event => setNewStatus(event.target.value)}
            />
          </label>
        </div>
        <div className="Orders-update-status-form-actions">
          <button onClick={closeUpdateForm}>Cancel</button>
          <button  type="submit">Update</button>
        </div>
      </form>
    </div>

    
    <div>
    <h1> FoodItems</h1> 
         
    <div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>Item Name</th>
            <th>Image URL</th>
             <th>Item Price</th>
            <th>Availability</th>
           
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {foodItems.map(item => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.imageUrl}</td>
              <td>{item.price}</td>
              <td>{item.availability}</td>
            
              <td>
                <Button onClick={() => handleEdit(item.id)}>Edit</Button>😊
                <Button onClick={() => handleDelete(item.id)}>Delete</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <Modal show={showEditModal} onHide={() => setShowEditModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Item</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group>
              <Form.Label>ID</Form.Label>
              <Form.Control
                type="text"
                name="id"
                value={editId}
                readOnly
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Item Name</Form.Label>
              <Form.Control
                type="text"
                name="name"
                defaultValue={editItem.name}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Image URL</Form.Label>
              <Form.Control
                type="text"
                name="imageUrl"
                defaultValue={editItem.imageUrl}
              />
            </Form.Group>
             <Form.Group>
              <Form.Label>price</Form.Label>
              <Form.Control
                type="text"
                name="imageUrl"
                defaultValue={editItem.price}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Availability</Form.Label>
              <Form.Control
                type="text"
                name="availability"
                defaultValue={editItem.availability}
              />
            </Form.Group>
            
            
            <Button type="submit">Update Item</Button>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
      
    </div>

    </>
  );

};
export default Restaurantownerview;
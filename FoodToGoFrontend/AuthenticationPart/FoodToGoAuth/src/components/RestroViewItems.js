import { Navbar, Nav, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import RestroAddItem from './RestroAddItem';
import { fetchViewItems, deleteViewItem } from '../redux/actions/viewItemsActions';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import RestroEditItem from './RestroEditItem';
import RestroViewCss from './RestroViewCss.css';


const RestroViewItems = () => {
  const dispatch = useDispatch();
  const viewItems = useSelector(state => state.viewItems);

  useEffect(() => {
    dispatch(fetchViewItems());
  }, [dispatch]);

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this item?')) {
      dispatch(deleteViewItem(id));
    }
  };

    return(
        <center>

          <u> <h2> Food Items </h2>  </u> 
          <Button variant="warning" className='addItem'> 
               <Link to="/RestroAddItem"><b>Add Item</b></Link> 
          </Button>
          <div>
     
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Price</th>
            <th>Availability</th>
            <th>Image URL</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
        {viewItems && viewItems.map(item => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.price}</td>
              <td>{item.availability}</td>
              <td>{item.imageUrl}</td>
              <td>
                <button onClick={() => handleDelete(item.id)} className="deleteItem">Delete</button>
                <Link to={`/RestroEditItem/${item.id}`}>
                  <button  className="editItem">Edit</button>
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
          
    </center>
  );
};
export default RestroViewItems;


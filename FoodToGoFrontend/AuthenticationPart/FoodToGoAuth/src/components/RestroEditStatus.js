import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useParams, Link } from 'react-router-dom';
import { editStatusAction } from '../redux/actions/editStatusActions';
import RestroViewCss from './RestroViewCss.css';

const RestroEditStatus = () => {
  const [orderStatus, setOrderStatus] = useState('');
  const dispatch = useDispatch();
  const { orderId } = useParams();

  const handleInputChange = (event) => {
    setOrderStatus(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(editStatusAction(orderId, orderStatus));
    // Show message that changes were saved
  };

  return (
    <div>
      <h2>Edit Order Status</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Order Id:
          <input type="text" value={orderId} disabled />
        </label>
        <br />
        <label>
          Order Status:
          <input type="text" value={orderStatus} onChange={handleInputChange} />
        </label>
        <br />
        <button type="submit"  className='submit'>Submit</button>
        <button className='goback'><Link to="/RestroView">Go back</Link></button>
        <button  className='cancel'><Link to="/RestroView">Cancel</Link></button>      </form>
    </div>
  );
};

export default RestroEditStatus;

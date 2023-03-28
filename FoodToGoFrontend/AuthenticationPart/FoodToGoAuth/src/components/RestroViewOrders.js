import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchOrders } from '../redux/actions/orderActions';
import RestroViewCss from './RestroViewCss.css';
import { Link } from 'react-router-dom';

function RestroViewOrders() {


    const dispatch = useDispatch();
  const orders = useSelector(state => state.orders);

  useEffect(() => {
    dispatch(fetchOrders());
  }, [dispatch]);

  
    return(
        <>
        <center> <u> <h2> Orders</h2>  </u></center>
        <div className="orders-table">
      <table>
        <thead>
          <tr>
           
            <th>Order ID</th>
            <th>Order Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {orders.map(order => (
            <tr key={order.orderId}>
            
              <td>{order.orderId}</td>
              <td>{order.orderStatus}</td>
              <td>
              <Link to={`/RestroEditStatus/${order.orderId}`}>
                  <button className='editStatus'>Change Status</button>
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>

    </>
    )
}
export default RestroViewOrders;
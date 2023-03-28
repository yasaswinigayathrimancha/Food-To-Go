
export const FETCH_ORDERS = 'FETCH_ORDERS';
export const CHANGE_ORDER_STATUS = 'CHANGE_ORDER_STATUS';

export const fetchOrders = () => async dispatch => {
  const response = await fetch('http://localhost:8787/orders/viewall');
  const orders = await response.json();

  dispatch({ type: FETCH_ORDERS, payload: orders });
};



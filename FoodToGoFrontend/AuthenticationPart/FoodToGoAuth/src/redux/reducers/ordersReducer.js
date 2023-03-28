
import { FETCH_ORDERS } from '../actions/orderActions';

const initialState = [];

const ordersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ORDERS:
      return action.payload;
   
    default:
      return state;
  }
};

export default ordersReducer;

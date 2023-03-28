const initialState = {
    products: [],
  };
  
  const RestroListReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'FETCH_RESTAURANTS':
        return { ...state, products: action.payload };
      default:
        return state;
    }
  };
  
  export default RestroListReducer;
  
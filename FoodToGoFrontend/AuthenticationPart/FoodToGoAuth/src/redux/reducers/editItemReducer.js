const initialState = {
    item: {},
  };
  
  const editItemReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'EDIT_ITEM':
        return { ...state, item: action.payload };
      default:
        return state;
    }
  };
  
  export default editItemReducer;
  
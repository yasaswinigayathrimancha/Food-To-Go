const initialState = {
    items: [],
    error: null,
  };
  
  const addItemReducer = (state = initialState, action) => {
    switch (action.type) {
      case "ADD_ITEM_SUCCESS":
        return {
          ...state,
          items: [...state.items, action.payload],
          error: null,
        };
      case "ADD_ITEM_FAILURE":
        return {
          ...state,
          error: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default addItemReducer;
  
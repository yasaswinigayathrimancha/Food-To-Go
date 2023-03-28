const initialState = [];

const ItemsListReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOAD_ITEMS":
      return action.payload;
    default:
      return state;
  }
};

export default ItemsListReducer;

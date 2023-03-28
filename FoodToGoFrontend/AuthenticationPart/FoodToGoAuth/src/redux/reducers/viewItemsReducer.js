const initialState = {
  viewItems: [],
  error: null
};

const viewItemsReducer = (state = [], action) => {
  switch (action.type) {
    case 'FETCH_VIEW_ITEMS':
      console.log(action.payload); // add this line to check payload data
      return action.payload;
      case 'DELETE_VIEW_ITEM':
        console.log('Deleting item:', action.payload); // add this line to check delete action
        return state.filter(item => item.id !== action.payload);
    default:
      return state;
  }
};

export default viewItemsReducer;

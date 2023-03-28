import {
    SEARCH_ITEM_REQUEST,
    SEARCH_ITEM_SUCCESS,
    SEARCH_ITEM_FAILURE,
  } from '../actions/SearchItemActions';
  
  const initialState = {
    loading: false,
    items: [],
    error: '',
  };
  
  const searchItemReducer = (state = initialState, action) => {
    switch (action.type) {
      case SEARCH_ITEM_REQUEST:
        return {
          ...state,
          loading: true,
        };
      case SEARCH_ITEM_SUCCESS:
        return {
          loading: false,
          items: action.payload,
          error: '',
        };
      case SEARCH_ITEM_FAILURE:
        return {
          loading: false,
          items: [],
          error: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default searchItemReducer;
  
import {
    SEARCH_RESTRO_REQUEST,
    SEARCH_RESTRO_SUCCESS,
    SEARCH_RESTRO_FAILURE,
  } from '../actions/SearchRestroActions';
  
  const initialState = {
    loading: false,
    items: [],
    error: '',
  };
  
  const searchRestroReducer = (state = initialState, action) => {
    switch (action.type) {
      case SEARCH_RESTRO_REQUEST:
        return {
          ...state,
          loading: true,
        };
      case SEARCH_RESTRO_SUCCESS:
        return {
          loading: false,
          items: action.payload,
          error: '',
        };
      case SEARCH_RESTRO_FAILURE:
        return {
          loading: false,
          items: [],
          error: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default searchRestroReducer;
  
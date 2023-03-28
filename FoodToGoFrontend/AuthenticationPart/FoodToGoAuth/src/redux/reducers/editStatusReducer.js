import { EDIT_STATUS_REQUEST, EDIT_STATUS_SUCCESS, EDIT_STATUS_FAILURE } from '../actions/editStatusActions';

const initialState = {
  loading: false,
  error: null,
};

const editStatusReducer = (state = initialState, action) => {
  switch (action.type) {
    case EDIT_STATUS_REQUEST:
      return { ...state, loading: true, error: null };
    case EDIT_STATUS_SUCCESS:
      return { ...state, loading: false };
    case EDIT_STATUS_FAILURE:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

export default editStatusReducer;

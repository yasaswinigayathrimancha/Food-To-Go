export const SEARCH_RESTRO_REQUEST = 'SEARCH_RESTRO_REQUEST';
export const SEARCH_RESTRO_SUCCESS = 'SEARCH_RESTRO_SUCCESS';
export const SEARCH_RESTRO_FAILURE = 'SEARCH_RESTRO_FAILURE';

export const searchRestroRequest = () => ({
  type: SEARCH_RESTRO_REQUEST,
});

export const searchRestroSuccess = (results) => ({
  type: SEARCH_RESTRO_SUCCESS,
  payload: results,
});

export const searchRestroFailure = (error) => ({
  type: SEARCH_RESTRO_FAILURE,
  payload: error,
});

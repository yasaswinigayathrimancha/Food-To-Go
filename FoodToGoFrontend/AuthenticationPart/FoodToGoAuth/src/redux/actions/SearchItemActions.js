export const SEARCH_ITEM_REQUEST = 'SEARCH_ITEM_REQUEST';
export const SEARCH_ITEM_SUCCESS = 'SEARCH_ITEM_SUCCESS';
export const SEARCH_ITEM_FAILURE = 'SEARCH_ITEM_FAILURE';

export const searchItemRequest = () => ({
  type: SEARCH_ITEM_REQUEST,
});

export const searchItemSuccess = (results) => ({
  type: SEARCH_ITEM_SUCCESS,
  payload: results,
});

export const searchItemFailure = (error) => ({
  type: SEARCH_ITEM_FAILURE,
  payload: error,
});

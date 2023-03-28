export const EDIT_STATUS_REQUEST = 'EDIT_STATUS_REQUEST';
export const EDIT_STATUS_SUCCESS = 'EDIT_STATUS_SUCCESS';
export const EDIT_STATUS_FAILURE = 'EDIT_STATUS_FAILURE';

export const editStatusRequestAction = () => ({
  type: EDIT_STATUS_REQUEST,
});

export const editStatusSuccessAction = () => ({
  type: EDIT_STATUS_SUCCESS,
});

export const editStatusFailureAction = (error) => ({
  type: EDIT_STATUS_FAILURE,
  payload: error,
});

export const editStatusAction = (orderId, orderStatus) => {
  return (dispatch) => {
    dispatch(editStatusRequestAction());

    fetch(`http://localhost:8787/orders/changestatus/${orderId}/status`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ orderStatus }),
    })
      .then(() => dispatch(editStatusSuccessAction()))
      .catch((error) => dispatch(editStatusFailureAction(error)));
  };
};

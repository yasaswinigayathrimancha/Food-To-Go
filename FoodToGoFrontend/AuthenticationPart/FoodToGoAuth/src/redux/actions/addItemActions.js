export const addItemSuccess = (item) => ({
    type: "ADD_ITEM_SUCCESS",
    payload: item,
  });
  
export const addItemFailure = (error) => ({
    type: "ADD_ITEM_FAILURE",
    payload: error,
  });
  
export const addItemActions = (itemData) => {
    return async (dispatch) => {
   
        const response = await fetch("http://localhost:8787/items/add", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(itemData),
        });
        const data = await response.json();
        if (response.ok) {
          dispatch(addItemSuccess(data));
        } else {
          dispatch(addItemFailure(data));
        }
    
    };
  };

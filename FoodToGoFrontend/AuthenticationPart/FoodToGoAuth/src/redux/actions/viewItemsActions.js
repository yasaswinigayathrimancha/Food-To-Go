export const fetchViewItems = () => {
  return async dispatch => {
    try {
      const response = await fetch('http://localhost:8787/items/viewall');
      const data = await response.json();
      console.log(data); // add this line to check response data
      dispatch({
        type: 'FETCH_VIEW_ITEMS',
        payload: data
      });
    } catch (error) {
      console.error(error);
    }
  };
};

export const deleteViewItem = (id) => {
  return async dispatch => {
    try {
      await fetch(`http://localhost:8787/items/delete/${id}`, {
        method: 'DELETE'
      });
      console.log('Item deleted:', id); // add this line to check delete action
      dispatch({
        type: 'DELETE_VIEW_ITEM',
        payload: id
      });
    } catch (error) {
      console.error(error);
    }
  };
};
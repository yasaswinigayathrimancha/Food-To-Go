export const editItem = (id, name, price, availability, imageUrl) => {
    return (dispatch) => {
      fetch(`http://localhost:8787/items/update/${id}/`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, price, availability, imageUrl }),
      })
        .then((response) => response.json())
        .then((data) => {
          dispatch({ type: 'EDIT_ITEM', payload: data });
        })
        .catch((error) => console.log(error));
    };
  };
  
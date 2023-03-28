import axios from 'axios';

export const loadItems = (id) => async (dispatch) => {
  try {
    const response = await axios.get(
      `http://localhost:8787/items/viewallbyrestroid/${id}`
    );
    dispatch({
      type: "LOAD_ITEMS",
      payload: response.data,
    });
  } catch (error) {
    console.error(error);
  }
};

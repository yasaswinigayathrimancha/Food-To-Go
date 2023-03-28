import Axios from "axios";

export const fetchRestaurants = () => async (dispatch) => {
  const { data } = await Axios.get(
    "http://localhost:8787/restaurant/viewall/"
  );
  dispatch({ type: "FETCH_RESTAURANTS", payload: data });
};

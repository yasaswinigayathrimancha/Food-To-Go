import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchRestaurants } from "../redux/actions/RestroListActions";
import { useNavigate, Link } from "react-router-dom";
import Button from "react-bootstrap/Button";

function CustomerRestroList() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.restaurant.products);

  useEffect(() => {
    dispatch(fetchRestaurants());
  }, [dispatch]);

  return (
    <div className="restro">
      <center>
        <h1 className="restro">
          <h2 className="restro1">
            {" "}
            <u> Restaurants we have</u>{" "}
          </h2>
          <br></br>
        </h1>
        {products.map((restaurant) => (
          <div key={restaurant.id} className="card-item1">
            <Link to={`/CustomerFoodItemsList/${restaurant.id}/`}>
              <img
                src={restaurant.restaurantImage}
                width="295"
                height="220"
                alt=""
              />
              <br></br>
              <Button className="button-29">
                <b> {restaurant.restaurantName} </b>
              </Button>{" "}
            </Link>
            <h2> </h2>
            <br></br>
            <br></br>
            <strong></strong>
          </div>
        ))}
      </center>
    </div>
  );
}

export default CustomerRestroList;

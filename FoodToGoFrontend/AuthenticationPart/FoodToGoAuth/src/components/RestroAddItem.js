import { useState } from "react";
import { useDispatch } from "react-redux";
import { addItemActions } from "../redux/actions/addItemActions";
import RestroView from './RestroView';
import { Link } from 'react-router-dom';
import RestroViewCss from './RestroViewCss.css';




const RestroAddItem = () => {
  const dispatch = useDispatch();
  const [itemData, setItemData] = useState({
    id: "",
    name: "",
    imageUrl: "",
    price: "",
    availability: "",
  });

  const handleChange = (e) => {
    setItemData({
      ...itemData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addItemActions(itemData));
  };

  
  return (
    <div>
      <h1>Add Item</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="id">ID:</label>
          <input
            type="text"
            id="id"
            name="id"
            value={itemData.id}
            onChange={handleChange}
          />
        </div><br></br>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={itemData.name}
            onChange={handleChange}
          />
          </div><br></br>
        <div>
          <label htmlFor="imageUrl">Image URL:</label>
          <input
            type="text"
            id="imageUrl"
            name="imageUrl"
            value={itemData.imageUrl}
            onChange={handleChange}
          />
         </div><br></br>
        <div>
          <label htmlFor="price">Price:</label>
          <input
            type="text"
            id="price"
            name="price"
            value={itemData.price}
            onChange={handleChange}
        />
         </div><br></br>
        <div>
          <label htmlFor="availability">Availability:</label>
          <input
            type="text"
            id="availability"
            name="availability"
            value={itemData.availability}
            onChange={handleChange}
          />
        </div><br></br>
        <div>
          <button type="submit" className='submit'>Submit</button>
          <button type="button"  className='cancel'>  <Link to="/RestroView"><b> Cancel</b></Link> 
           
          </button>
        </div><br></br>
        <div>
       
        <button type="button" className='goback'>  <Link to="/RestroView"><b> Go back</b></Link> 
           
          </button>
        </div>
      </form>
    </div>
  );
};
export default RestroAddItem;
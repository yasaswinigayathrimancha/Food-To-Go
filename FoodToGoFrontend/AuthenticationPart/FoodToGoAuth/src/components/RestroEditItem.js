import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { editItem } from '../redux/actions/editItemActions';
import { Link, useParams } from 'react-router-dom';
import RestroViewCss from './RestroViewCss.css';


const RestroEditItem = () => {
  const dispatch = useDispatch();
  const { id } = useParams();

  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [availability, setAvailability] = useState('');
  const [imageUrl, setImageUrl] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(editItem(id, name, price, availability, imageUrl));
    alert('Changes saved!');
  };

  return (
    <div>
      <h2>Edit Item</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="id">ID:</label>
        <input type="text" id="id" value={id} readOnly />
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} />
        <label htmlFor="price">Price:</label>
        <input type="text" id="price" value={price} onChange={(e) => setPrice(e.target.value)} />
        <label htmlFor="availability">Availability:</label>
        <input type="text" id="availability" value={availability} onChange={(e) => setAvailability(e.target.value)} />
        <label htmlFor="imageUrl">Image URL:</label>
        <input type="text" id="imageUrl" value={imageUrl} onChange={(e) => setImageUrl(e.target.value)} />
        <div>
          <button type="submit" className='submit'>Submit</button>
        <button  className='goback'> <Link to="/RestroView" className="button">Go Back</Link></button> 
        <button className='cancel'> <Link to="/RestroView" className="button">Cancel </Link></button> 
        </div>
      </form>
    </div>
  );
};

export default RestroEditItem;

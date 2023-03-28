import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  searchItemRequest,
  searchItemSuccess,
  searchItemFailure,
} from '../redux/actions/SearchItemActions';
import axios from 'axios';
import mainpage from './mainpage.css';

const CustomerSearchItem = () => {
  const dispatch = useDispatch();
  const [itemSearchTerm, setItemSearchTerm] = useState('');
  const searchItems = useSelector((state) => state.searchItems);
  const { loading, items, error } = searchItems;

  const handleItemChange = (event) => {
    setItemSearchTerm(event.target.value);
  };

  const handleItemSubmit = (event) => {
    event.preventDefault();
    dispatch(searchItemRequest());
    axios
      .get(`http://localhost:8787/items/${itemSearchTerm}`)
      .then((response) => {
        console.log(response.data);
        dispatch(searchItemSuccess(Object.values(response.data)));
      })
      .catch((error) => {
        console.log(error);
        dispatch(searchItemFailure(error.message));
      });
  };

  const handleClearResults = () => {
    dispatch(searchItemSuccess([]));
    setItemSearchTerm('');
  };

  return (
    <center>
        
  <center>
      <form className="item-search" onSubmit={handleItemSubmit}>
        <input
          type="text"
          placeholder="Search for Items"
          value={itemSearchTerm}
          onChange={handleItemChange}
        />
        <button className="searchbutton" type="submit">
          <b>search</b>
        </button>
      </form>
      </center>  {items.length > 0 && (
         <div className="clear-results">
              <button className="goback1" onClick={handleClearResults}>
           <b>x</b>
           </button>
           </div>
            )}
      <div className="search-results">
        {loading ? (
          <p>Loading...</p>
        ) : error ? (
          <p>{error}</p>
        ) : (
          <>
            {items.map((item) => (
              <center>
                <div className="card-item2">
                
                      <li key={item.id}></li>
                            
                
                
                 <div className="card-content">
                 <img src={item.imageUrl} alt="" width="300" height="150" />
                    <h2 className="itemname">{item.name}</h2>
                     <p className="itemprice">₹{item.price}</p>
                    <p className="avail">{item.availability}</p>
                   <button className="addToCart_btn" variant="outline-success">
                             ADD TO CART
                   </button>
               
               </div>
           </div>
          </center>
             ))}
          </>
         )}
        
        </div>
      
        </center>
     );
   };

export default CustomerSearchItem;
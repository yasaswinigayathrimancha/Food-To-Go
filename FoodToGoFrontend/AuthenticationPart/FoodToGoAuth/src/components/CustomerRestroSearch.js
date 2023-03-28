import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, Link } from 'react-router-dom';
import mainpage from './mainpage.css';
import {
  searchRestroRequest,
  searchRestroSuccess,
  searchRestroFailure,
} from '../redux/actions/SearchRestroActions';
import axios from 'axios';

const CustomerSearchRestro = () => {
  const dispatch = useDispatch();
  const [itemSearchTerm, setItemSearchTerm] = useState('');
  const searchRestros = useSelector((state) => state.searchRestros);
  const { loading, items, error } = searchRestros;

  const handleItemChange = (event) => {
    setItemSearchTerm(event.target.value);
  };

  const handleItemSubmit = (event) => {
    event.preventDefault();
    dispatch(searchRestroRequest());
    axios
      .get(`http://localhost:8787/restaurant/${itemSearchTerm}`)
      .then((response) => {
        console.log(response.data);
        dispatch(searchRestroSuccess(Object.values(response.data)));
      })
      .catch((error) => {
        console.log(error);
        dispatch(searchRestroFailure(error.message));
      });
  };

  const handleClearResults = () => {
    dispatch(searchRestroSuccess([]));
    setItemSearchTerm('');
  };

  return (
    <center>
        
  <center>
      <form className="item-search" onSubmit={handleItemSubmit}>
        <input
          type="text"
          placeholder="Search for restaurants"
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
                <div className="card-item1">
                
                      <li key={item.id}></li>
                            
                
                
                 <div className="card-item1">
                 <img src={item.restaurantImage} alt="" width="290" height="150" />
                    <h2 className="itemname">{item.restaurantName}</h2>
                 
                   <button className="button-29" variant="outline-success">
                   <Link to={`/CustomerFoodItemsList/${item.id}/`}>VISIT </Link>
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

export default CustomerSearchRestro;
import React, { useState, useEffect ,Component} from "react";
import { Routes, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import CustomerRestroList from "./components/CustomerRestroList";
import AuthService from "./services/auth.service";
import Login from "./components/Login";
import Register from "./components/Register";
import Home from "./components/Home";
import Profile from "./components/Profile";
import Restroview  from "./components/RestroView";
import EventBus from "./common/EventBus";
import CustomerView from './components/CustomerView';
import CustomerFoodItemsList from "./components/CustomerFoodItemsList";
import RestroAddItem from "./components/RestroAddItem";
import RestroViewItems from "./components/RestroViewItems";
import RestroEditItem from "./components/RestroEditItem";
import RestroEditStatus from "./components/RestroEditStatus";
import CustomerItemSearch from "./components/CustomerItemSearch";
import CustomerRestroSearch from "./components/CustomerRestroSearch";
import RestroViewOrders from "./components/RestroViewOrders";




const App = () => {
  const [showAdminBoard, setShowAdminBoard] = useState(false);
  const [currentUser, setCurrentUser] = useState(undefined);

  useEffect(() => {
    const user = AuthService.getCurrentUser();

    if (user) {
      setCurrentUser(user);
     
      setShowAdminBoard(user.roles.includes("ROLE_ADMIN"));
    }

    EventBus.on("logout", () => {
      logOut();
    });

    return () => {
      EventBus.remove("logout");
    };
  }, []);

  const logOut = () => {
    AuthService.logout();
    setShowAdminBoard(false);
    setCurrentUser(undefined);
  };

  return (
    <div>
      <nav className="navbar navbar-expand navbar-dark bg-dark">
       
        

        {currentUser ? (
          <div className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link to={"/profile"} className="nav-link">
             <h5 >  {currentUser.username} </h5>
              </Link>
            </li>
            <li className="nav-item">
              <a href="/login" className="nav-link" onClick={logOut}>
              <h5>    LogOut  </h5>
              </a>
            </li>
          </div>
        ) : (
          <div className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link to={"/login"} className="nav-link">
              <h3>Login </h3>  
              </Link>
            </li>

            <li className="nav-item">
              <Link to={"/register"} className="nav-link">
              <h3>Sign up </h3> 
              </Link>
            </li>
          </div>
        )}
      </nav>

    
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/register" element={<Register/>} />
          <Route path="/profile" element={<Profile/>} />
          <Route path="/Restroview" element={<Restroview/>} />
          <Route path="/RestroAddItem" element={<RestroAddItem />} />
          <Route path="/RestroViewItems" element={<RestroViewItems />} />
          <Route path="/RestroViewOrders" element={<RestroViewOrders />} />
          <Route path="/RestroEditItem/:id" element={<RestroEditItem />} />
          <Route path="/RestroEditStatus/:orderId" element={<RestroEditStatus />} />
          <Route path="/CustomerView" element={<CustomerView/>} />
          <Route path="/CustomerRestroList" element={<CustomerRestroList />} />
          <Route exact path = "/CustomerFoodItemsList/:id" element = {<CustomerFoodItemsList />} />
          <Route path="/CustomerItemSearch" element ={<CustomerItemSearch/>}/>
          <Route path="/CustomerRestroSearch" element={<CustomerRestroSearch />} />


        </Routes>
    

    </div>
  );
};

export default App;

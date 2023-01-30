import React, { useState, useEffect ,Component} from "react";
import { Routes, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import RestroList from "./components/RestroList";
import AuthService from "./services/auth.service";
import Login from "./components/Login";
import Register from "./components/Register";
import Home from "./components/Home";
import Profile from "./components/Profile";
import Restaurantownerview  from "./components/Restaurantownerview";
import EventBus from "./common/EventBus";
import Mainpage from "./components/Mainpage";
import FoodItemsList from "./components/FoodItemsList";




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
          <Route path="/Mainpage" element={<Mainpage/>} />
          <Route path="/Restaurantownerview" element={<Restaurantownerview/>} />
          <Route path="/RestroList" element={<RestroList />} />
          <Route exact path = "/FoodItemsList/:id" element = {<FoodItemsList />} />
        

        </Routes>
    

    </div>
  );
};

export default App;

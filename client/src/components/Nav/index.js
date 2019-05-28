import React from "react";
import "./style.css";
import { Link } from 'react-router-dom';
import UserContext from "../../utils/UserContext";

function Nav() {
  
  return (


    <UserContext.Consumer>
      {({ user }) => (
        <nav className="navbar navbar-expand-md justify-content-center">
          <a href="/cards" className="navbar-brand d-flex w-50 mr-auto">Mimic</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsingNavbar3">
            <span className="navbar-toggler-icon"></span>
          </button>
 
          {user ? (
            <div className="navbar-collapse collapse w-100" id="collapsingNavbar3">
              {/* <div className="greeting">Welcome, {user.email}</div> */}
              <ul className="nav navbar-nav ml-auto w-100 justify-content-end">
                <li className="nav-item">
                  <Link className="nav-link" to="/login">Log-out</Link>
                </li>
              </ul>
              
            </div>

          ) : (

              <div className="navbar-collapse collapse w-100" id="collapsingNavbar3">
                <ul className="nav navbar-nav ml-auto w-100 justify-content-end">
                  <li className="nav-item">
                    <Link className="nav-link" to="/signup">Sign Up</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/login">Login</Link>{' '}
                  </li>
                </ul>
              </div>
            )}
        </nav>
      )}
    </UserContext.Consumer>
  );
}

export default Nav;





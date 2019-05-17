import React from "react";
import "./style.css";
// import { CounterContext } from '../../context.js';
import { Link } from 'react-router-dom';

const Nav = () => {
  // const { currentUser } = useContext(CounterContext);
  return (

    <nav className="navbar navbar-dark navbar-expand-md bg-faded justify-content-center">
      <a href="/cards" className="navbar-brand d-flex w-50 mr-auto">Mimic</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsingNavbar3">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="navbar-collapse collapse w-100" id="collapsingNavbar3">
        <ul className="nav navbar-nav ml-auto w-100 justify-content-end">
          <li className="nav-item">
            <Link className="nav-link" to="/signup">Sign Up</Link>
          </li>
          <li class="nav-item">
            <Link className="nav-link" to="/login">Login</Link>{' '}
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;





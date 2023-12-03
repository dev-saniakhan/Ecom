import React from 'react';
import { NavLink, Link } from "react-router-dom"
import { AiFillShopping } from "react-icons/ai";

const Header = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
            <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
            <Link to="/" className="navbar-brand" ><AiFillShopping />
               Ecomerce
            </Link>
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <NavLink to="/" className="navbar" >Home</NavLink>

              <li className="nav-item">
                <NavLink to="/cart" className="nav-link active" >Catogry</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/login" className="nav-link active" aria-current="page">Login</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/register" className="nav-link active">SignUp</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/cart" className="nav-link active" >Cart(0)</NavLink>
              </li>

            </ul>

          </div>
        </div>
      </nav>

    </>
  );
};

export default Header;
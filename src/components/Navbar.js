import React from "react";
import { Link } from 'react-router-dom';
import './Navbar.css'
import { useState } from "react"
import { useHistory} from "react-router-dom";
import {useSelector} from "react-redux";
import {FaHeart} from "react-icons/fa";
import ChangeLanguage from "./ChangeLanguage";



const Navbar = (props) => {
    console.warn(props)
      const history = useHistory();
    const [FormData, setFormData] = useState({
        Search: "",

    });


    const FormHandeller = (e) => {
        if (e.target.name === "search") {
            setFormData({
                Search: e.target.value
            });

        }
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(FormData);

            history.push({
              pathname : "/spesific",
              state : FormData
            });

    };
const { favourite } = useSelector((state) => state.movies);

  return (
      <nav className="navbar navbar-expand-lg navbar-dark default-color">
        <div className="container">
          <Link className="navbar-brand" to="/">
            Movies
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >

          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/favourites">
                  Favourites
                </Link>
              </li>
            </ul>
              <ul className="navbar-nav ms-right">
                  <li className="nav-item">
                      <FaHeart className={"heart"} color='red'/>
                  </li>
                  <li className="nav-item heart-over text-white">
                     &nbsp;  {favourite.length}
                  </li>
              </ul>

              <ul className="navbar-nav ms-auto">
              <li className="nav-item ">
                <Link className="nav-link " aria-current="page" to="/login">
                  Login
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/register">
                  Register
                </Link>
              </li>
            </ul>
                    {/*            <form className="d-flex" onSubmit={(e)=>{handleSubmit(e)}}>*/}
                    {/*    <input className="form-control me-2" type="search" onChange={(e) => FormHandeller(e)} name="search" placeholder="Search" aria-label="Search"/>*/}
                    {/*        <button className="btn btn-outline-success" type="submit">Search</button>*/}
                    {/*</form>*/}
                            <li className="nav-item">
                  <ChangeLanguage />
              </li>
          </div>
        </div>
      </nav>
  );
};

export default Navbar;

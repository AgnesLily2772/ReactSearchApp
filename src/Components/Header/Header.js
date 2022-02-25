import React from "react";
import { Link } from "react-router-dom";
import './styles.css'


const Header = () => {
  return (
    <div className="navigation " style={{background:'#557a95'}}>
      
      <nav className="navbar py-3 navbar-expand">
        
        <div className="container">
          <Link className="navbar-brand" to="/" style={{fontWeight:'bolder'},{fontSize:'30px'},{color:'white'}}>React Search App</Link>
          <div>
            <ul className="navbar-nav navbar-nav-mobile ml-auto">
            <li className="nav-item"><h5  style={{color:'white'}} className="nav-link" >Data is taken from </h5></li>
            <li className="nav-item"><a rel="noreferrer" style={{color:'white'}} className="nav-link" href="https://www.anapioficeandfire.com/api/books?pageSize=30" target="_blank">HERE</a></li>
              </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
export default Header;
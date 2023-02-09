import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./Header.css"

const Header =()=>{
    return(
     <nav className=" navbar navbar-expand-lg navbar-light bg-light px-4">
            <Link to="/" className="navbar-brand"><img
              src='https://walkersarewelcome.org.uk/wp-content/uploads/computer-icons-google-account-icon-design-login-png-favpng-jFjxPac6saRuDE3LiyqsYTEZM.jpg'
              height='40'
              alt=''
              loading='lazy'
            /></Link>
            {/* <ul className="navbar-nav ms-auto">
                <NavLink to="/" activeclassName={"activeLink"} className="nav-link">Accounts</NavLink>
                <NavLink to="/add" activeclassName={"activeLink"} className="nav-link">Add</NavLink>
                <NavLink to="/edit" activeclassName={"activeLink"} className="nav-link">Edit/Delete</NavLink>
            </ul> */}
            <ul className="navbar-nav ms-auto"> 
            <NavLink end to="/"  className={({ isActive }) => "nav-link" + (isActive ? " activeLink" : "")}>Accounts</NavLink> 
            <NavLink to="/add" className={({ isActive }) => "nav-link" + (isActive ? " activeLink" : "")}>Add</NavLink> 
            <NavLink to="/edit" end className={({ isActive }) => "nav-link" + (isActive ? " activeLink" : "")}>Edit/Delete</NavLink> 
            </ul>
    </nav>
        
            
        
    )
}

export default Header;
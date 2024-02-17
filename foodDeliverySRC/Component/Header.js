import React from "react";
import  ReactDOM  from "react-dom/client";
import { LOGO_URL } from "../Utils/contantsHardcoded";

const Header=() => {
    return(
        <div className="header">
            <div className="logo-container">
                <img className="logo" src={LOGO_URL}/>
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>

                </ul>
            </div>
        </div>
    )
}

export default Header;

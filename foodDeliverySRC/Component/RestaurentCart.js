import React from "react";
import ReactDOM from "react-dom/client";
import { CDN_URL } from "../Utils/contantsHardcoded";

const styleCard={  
    backgroundColor:"#DBE2EF"
}

const RestaurentCart=(props)=>{
    const {resData}=props;
    const {cloudinaryImageId,costForTwo,name,avgRating,cuisines,deliveryTime}=resData?.data;
    return (
        <div className="res-card" style={styleCard}>
            <img
            className="meghnaImg"
            src={CDN_URL+cloudinaryImageId}
             alt="meghnaImage" />
            <h3>{name}</h3>
            <h4>{cuisines.join(", ")}</h4>
            <h4>{avgRating} stars</h4>
            <h4>{costForTwo/100} rupees</h4>
            <h4>{deliveryTime} minutes</h4>
        </div>
    )
}
export default RestaurentCart;
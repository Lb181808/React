import React, { useState } from "react";
import  ReactDOM  from "react-dom";
import RestaurentCart from "./RestaurentCart";
import {resList} from "../Utils/restList";



const Body=()=>{

    const [listOfRestaurants,setListOfRestaurants]=useState(resList);

    
    {/*let listOfRestaurantsJS=[
        {
            data: {
                id: "73011",
                name: "KFC",
                cloudinaryImageId: "bdcd233971b7c81bf77e1fa4471280eb",
                cuisines: ["American", "Snacks", "Biryani"],
                costForTwo: 30000,
                deliveryTime: 31,
                avgRating: "4.0",
              },
            },
            {
              data: {
                id: "542132",
                name: "Domnik Pizza",
                cloudinaryImageId: "sboh9oor0cvp6ztsyhvj",
                cuisines: ["Pizzas", "Italian", "Fast Food", "Snacks", "Beverages"],
                costForTwo: 30000,
                deliveryTime: 33,
                avgRating: "3.8",
              },
             
            },
            {
                data: {
                  id: "542136",
                  name: "MacD",
                  cloudinaryImageId: "sboh9oor0cvp6ztsyhvj",
                  cuisines: ["Pizzas", "Italian", "Fast Food", "Snacks", "Beverages"],
                  costForTwo: 30000,
                  deliveryTime: 33,
                  avgRating: "4.1",
                },
               
              },
            
    ]; */}

return (
      <div className="body">
            <div className="filter">
                <button className="filterBtn" onClick={()=>{
                   {/*Filter Logic Here */}
                   const filteredList=listOfRestaurants.filter((res)=>res.data.avgRating>=4
                   );
                   setListOfRestaurants(filteredList);
                }}>Top Rated Restaurant</button>
            </div>
            <div className="res-container">
                
                 {/* kfc .. we can make functional Component dynamic means having differnet data with the help of props which means properties 
                 passing pops is similar to passing arguement to the function.*/ }

               {listOfRestaurants.map((restaurant)=>
               <RestaurentCart key={restaurant.data.id} resData={restaurant}/>
               )
               }
               

            </div>
        </div>
    )
}
export default Body;
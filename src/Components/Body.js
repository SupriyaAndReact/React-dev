
import { resList } from '../utils/mockData'
import RestaurantCard from './RestaurantCard'
import React, {useState} from 'react'

const Body = ()=>{
    const [restaurantList, setRestaurantList]=useState(resList)
    return (
    <div className="body">
        <div className= "filter-bar">
            <div className="search-bar">Search</div>
            <button onClick={()=>{
                const filteredList = restaurantList.filter((res)=>(
                    res.avgRating>4
                ))
                setRestaurantList(filteredList)
            }}>Top Rated Restaurants</button>
        </div>
        <div className="res-container">
          {restaurantList.map((restaurant) => (
          <RestaurantCard key={restaurant.id} resData={restaurant} />
          ))} 
        </div>
    </div>
    )
}

export default Body

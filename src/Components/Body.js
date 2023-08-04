import RestaurantCard from './RestaurantCard'
import React, {useEffect, useState} from 'react'
import Shimmer from './Shimmer'
import { Link } from 'react-router-dom'
import { RESTAURANT_URL } from '../utils/constant'

const Body = ()=>{
    const [restaurantList, setRestaurantList]=useState([])
    const [searchText, setSearchText]=useState("")
    const [filteredRestaurant, setFilteredRestaurant]=useState([])
    const fetchData = async() => {
        const data =await fetch(RESTAURANT_URL)
        const json= await data.json()
        setRestaurantList(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
        setFilteredRestaurant(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    }

    useEffect(()=>{
        fetchData()
    },[])

    return restaurantList.length ===0 ? <Shimmer /> : (
        <div className="body">
        <div className= "filter">
            <div className="search">
            <input type="text" className="search-box" value={searchText} onChange={(e)=>{
                setSearchText(e.target.value)
            }}/>
            <button onClick={()=>{
                const filteredList= restaurantList.filter((restro)=>(restro.info.name.toLowerCase().includes(searchText.toLowerCase())))
                setFilteredRestaurant(filteredList)
            }}>Search</button>
            </div>
            <button onClick={()=>{
                const filteredList = restaurantList.filter((restro)=>(
                    restro.info.avgRating>4
                ))
                setFilteredRestaurant(filteredList)
            }}>Top Rated Restaurants</button>
        </div>
        <div className="res-container">
        {filteredRestaurant.map((restaurant) => (
          <Link
            key={restaurant.info.id}
            to={"/restaurants/" + restaurant.info.id}
          >
            <RestaurantCard resData={restaurant} />
          </Link>
        ))} 
        </div>
        </div>
    )
}

export default Body

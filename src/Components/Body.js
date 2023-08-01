import RestaurantCard from './RestaurantCard'
import React, {useEffect, useState} from 'react'
import Shimmer from './Shimmer'

const Body = ()=>{
    const [restaurantList, setRestaurantList]=useState([])
    const [searchText, setSearchText]=useState("")
    const [filteredRestaurant, setFilteredRestaurant]=useState([])
    const fetchData = async() => {
        const data =await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.564892798988335&lng=77.38473701556232&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING')
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
          <RestaurantCard key={restaurant.info.id} resData={restaurant.info} />
          ))} 
        </div>
        </div>
    )
}

export default Body

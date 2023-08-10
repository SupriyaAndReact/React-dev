import RestaurantCard, { withPromtedLabel } from './RestaurantCard'
import React, {useContext, useEffect, useState} from 'react'
import Shimmer from './Shimmer'
import { Link } from 'react-router-dom'
import { RESTAURANT_URL } from '../utils/constant'
import useOnlineStatus from '../utils/useOnlineStatus'
import { mockRestaurantList } from '../utils/mockData'
import UserContext from '../utils/UserContext'

const Body = ()=>{
    const [restaurantList, setRestaurantList]=useState([])
    const [searchText, setSearchText]=useState("")
    const [filteredRestaurant, setFilteredRestaurant]=useState([])

    const { loggedInUser,setUserName } =useContext(UserContext)

    const fetchData = async() => {
        const data =await fetch(RESTAURANT_URL)
        const json= await data.json()
        setRestaurantList(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants || mockRestaurantList)
        setFilteredRestaurant(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants || mockRestaurantList)
    }

    useEffect(()=>{
        fetchData()
    },[])

    const RestaurantCardPromoted = withPromtedLabel(RestaurantCard)

    const onlineStatus = useOnlineStatus()
    if(!onlineStatus) 
        return (<h1>Looks like you are offline!! Please check your internet connection.</h1>)

    return restaurantList.length ===0 ? <Shimmer /> : (
        <div>
        <div className= "flex">
            <div className="p-4 m-4">
                <input className="border border-solid border-black" type="text" value={searchText} onChange={(e)=>{
                setSearchText(e.target.value)
                 }}/>
                <button className="px-4 py-2 m-4 border border-solid bg-green-50 rounded-lg" onClick={()=>{
                const filteredList= restaurantList.filter((restro)=>(restro.info.name.toLowerCase().includes(searchText.toLowerCase())))
                setFilteredRestaurant(filteredList)
                }}>Search</button>
            </div>
            <div className='m-4 p-4 flex items-center'>
                <button className="px-4 py-2 bg-gray-100 rounded-lg" onClick={()=>{
                const filteredList = restaurantList.filter((restro)=>(
                    restro.info.avgRating>4
                ))
                setFilteredRestaurant(filteredList)
                }}>Top Rated Restaurants</button>
            </div>
            <div className="m-4 p-4 flex items-center">
                Logged In User : 
                <input className="border border-solid border-black" type="text" value={loggedInUser} onChange={(e)=>{
                setUserName(e.target.value)
                 }}/>
            </div>
                       
        </div>
        <div className="flex flex-wrap">
        {filteredRestaurant.map((restaurant) => (
          <Link
            key={restaurant.info.id}
            to={"/restaurants/" + restaurant.info.id}
          >
            {restaurant.info.isOpen ? (
              <RestaurantCardPromoted resData={restaurant} />
            ) : (
              <RestaurantCard resData={restaurant} />
            )}
          </Link>
        ))} 
        </div>
        </div>
    )
}

export default Body

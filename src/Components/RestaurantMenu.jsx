import React,{ useEffect ,useState} from 'react'
import { useParams } from 'react-router-dom'
import Shimmer from './Shimmer'
import { MENU_API } from '../utils/constant'
import useRestaurantMenu from '../utils/useRestaurantMenu'

const RestaurantMenu = () =>{  
    const { resId } = useParams()

    const resInfo = useRestaurantMenu(resId)

    if(resInfo===null) return <Shimmer />
    const {name,cuisines,costForTwoMessage}= resInfo.cards[0].card.card.info


    const itemList  = resInfo.cards[2].groupedCard.cardGroupMap.REGULAR.cards[2].card.card.itemCards
    return (
        <div className='items-center'>
            <h1>{name}</h1>
            <p>{cuisines.join(',')} - {costForTwoMessage}</p>
            <h2>Menu</h2>
            {
                itemList.map((item)=> (
                    <ul>
                        <li>{item.card.info.name} - Rs.{item.card.info.price/100 || item.card.info.defaultPrice/100}</li>
                    </ul> 
                ))
            }        
        </div>
    )
}

export default RestaurantMenu
import React,{ useEffect ,useState} from 'react'
import { useParams } from 'react-router-dom'
import Shimmer from './Shimmer'
import { MENU_API } from '../utils/constant'

const RestaurantMenu = () =>{
    const [resInfo, setResInfo]= useState(null)
    useEffect(()=> {
        fetchMenu()
    },[])


    const { resId } = useParams()
    const fetchMenu = async() =>{
        const data = await fetch(MENU_API+resId)
        const json =await data.json()
        setResInfo(json)
    }

    if(resInfo===null) return <Shimmer />
    const {name,cuisines,costForTwoMessage}= resInfo.data.cards[0].card.card.info


    const itemList  = resInfo.data.cards[2].groupedCard.cardGroupMap.REGULAR.cards[2].card.card.itemCards
    return (
        <div className='menu'>
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
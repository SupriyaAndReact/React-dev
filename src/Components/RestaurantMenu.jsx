import React,{ useEffect ,useState} from 'react'
import { useParams } from 'react-router-dom'
import Shimmer from './Shimmer'
import { MENU_API } from '../utils/constant'
import useRestaurantMenu from '../utils/useRestaurantMenu'
import RestaurantCategory from './RestaurantCategory'

const RestaurantMenu = () =>{  
    const { resId } = useParams()
    const [showIndex, setShowIndex] = useState(null);
    const resInfo = useRestaurantMenu(resId)

    if(resInfo===null) return <Shimmer />
    const {name,cuisines,costForTwoMessage}= resInfo.cards[0].card.card.info

    const categories =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card?.["card"]?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );


    const itemList  = resInfo.cards[2].groupedCard.cardGroupMap.REGULAR.cards[2].card.card.itemCards
    return (
        <div className="text-center">
            <h1 className="font-bold my-6 text-2xl">{name}</h1>
            <p className="font-bold text-lg">
                {cuisines.join(", ")} - {costForTwoMessage}
            </p>
            {categories.map((category,index)=>(
                <RestaurantCategory
                key={category?.card?.card.title}
                data={category?.card?.card}
                showItems={index === showIndex ? true : false}
                setShowIndex={() => {
                    if(index===showIndex)
                        setShowIndex(null)
                    else
                        setShowIndex(index)}}
              />
            ))}
        </div>
    )
}

export default RestaurantMenu
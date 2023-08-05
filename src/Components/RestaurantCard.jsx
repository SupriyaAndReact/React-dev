import { CDN_URL } from "../utils/constant"

const RestaurantCard=(props)=>{
    const {name,cuisines,avgRating,costForTwo,sla,cloudinaryImageId} = props.resData?.info
    return (
     <div className="res-card">
        <img className="res-logo" alt="biryani" src= {CDN_URL+ cloudinaryImageId}></img>
        <h3>{name}</h3>
        <h4>{cuisines.join(',')}</h4>
        <h4>{avgRating} stars</h4>
        <h4>{costForTwo}</h4>
        <h4>{sla.deliveryTime} minutes</h4>
     </div>   
    )
}

export default RestaurantCard
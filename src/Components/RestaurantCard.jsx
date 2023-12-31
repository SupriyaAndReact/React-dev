import { CDN_URL } from "../utils/constant"

const RestaurantCard=(props)=>{
    const {name,cuisines,avgRating,costForTwo,sla,cloudinaryImageId} = props.resData?.info
    return (
     <div className="m-4 p-4 w-[220px] h-[450px] rounded-lg bg-gray-100 hover:bg-gray-200 break-words">
        <img className="rounded-lg w-[220px] h-[180px]" alt="biryani" src= {CDN_URL+ cloudinaryImageId}></img>
        <h3>{name}</h3>
        <h4>{cuisines.join(',')}</h4>
        <h4>{avgRating} stars</h4>
        <h4>{costForTwo}</h4>
        <h4>{sla.deliveryTime} minutes</h4>
     </div>   
    )
}

export const withPromtedLabel = (RestaurantCard) => {
    return (props) => {
      return (
        <div>
          <label className="absolute bg-black text-white m-2 p-2 rounded-lg">
            Promoted
          </label>
          <RestaurantCard {...props} />
        </div>
      )
    }
}

export default RestaurantCard
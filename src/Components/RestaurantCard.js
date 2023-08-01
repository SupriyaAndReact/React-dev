const RestaurantCard=(props)=>{
    const {name,cuisines,avgRating,costForTwo,sla,cloudinaryImageId} = props.resData
    return (
     <div className="res-card">
        <img className="res-logo" alt="biryani" src= {"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+ cloudinaryImageId}></img>
        <h3>{name}</h3>
        <h4>{cuisines.join(',')}</h4>
        <h4>{avgRating} stars</h4>
        <h4>{costForTwo}</h4>
        <h4>{sla.deliveryTime} minutes</h4>
     </div>   
    )
}

export default RestaurantCard
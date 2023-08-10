import ItemList from "./ItemList"

const RestaurantCategory = ({data,setShowIndex, showItems}) => {

    const handleClick =()=>{
        setShowIndex()
    }

    return (
        <div className="w-6/12 mx-auto my-4 bg-gray-50 shadow-lg p-4 cursor-pointer" onClick={handleClick}> 
            <div className="flex justify-between">
            <span>{data.title}</span>
            <span>⬇️</span>
            </div>
            {showItems && <ItemList items={data.itemCards}/> }
        </div>
    )
}

export default RestaurantCategory
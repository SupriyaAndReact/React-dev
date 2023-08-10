import { companyLogo } from "../utils/constant"
import { Link } from 'react-router-dom'
import useOnlineStatus from "../utils/useOnlineStatus"
import { useSelector } from "react-redux";
import UserContext from "../utils/UserContext";
import React,{ useContext } from "react";

const Header =()=>{
    const onlineStatus = useOnlineStatus()
    const { loggedInUser } = useContext(UserContext);
    const cartItems = useSelector((store) => store.cart.items)

    return (
        <div className="flex justify-between bg-pink-100 shadow-lg sm:bg-yellow-50 lg:bg-green-50">
            <div>
                <img className="w-56" src= {companyLogo}></img>
            </div>
            <div className="flex items-center">
                <ul className="flex p-4 m-4"> 
                    <li className="px-4">Online Status {onlineStatus? "🟢" : "🟡"}</li>
                    <li className="px-4"><Link to='/'>Home</Link></li>
                    <li className="px-4"><Link to='/about'>About Us</Link></li>
                    <li className="px-4"><Link to='/grocery'>Grocery</Link></li>
                    <li className="px-4"><Link to='/about'>Contact Us</Link></li>
                    <li className="px-4 font-bold text-xl">
                        <Link to="/cart">🛒 - ({cartItems.length} items)</Link>
                    </li>
                    <li className="px-4 ">{loggedInUser}</li>
                </ul>
            </div>
        </div>
    )   
}

export default Header
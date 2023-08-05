import { companyLogo } from "../utils/constant"
import { Link } from 'react-router-dom'
import useOnlineStatus from "../utils/useOnlineStatus"

const Header =()=>{
    const onlineStatus = useOnlineStatus()
    return (
        <div className="header">
            <div className="logo-containner">
                <img className="logo" src= {companyLogo}></img>
            </div>
            <div className="nav-items">
                <ul>
                    <li>Online Status {onlineStatus? "🟢" : "🟡"}</li>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/about'>About Us</Link></li>
                    <li><Link to='/grocery'>Grocery</Link></li>
                    <li><Link to='/about'>Contact Us</Link></li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )   
}

export default Header
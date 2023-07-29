import { companyLogo } from "../utils/constant"


const Header =()=>{
    return (
        <div className="header">
            <div className="logo-containner">
                <img className="logo" src= {companyLogo}></img>
            </div>
            <div className="nav-container">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )   
}

export default Header
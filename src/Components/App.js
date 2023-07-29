import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./Header";
import Body from "./Body";

/*
Food app
-Header
-> Logo
-> Nav Links -> Home,About Us, Contact Us,Cart
-Body
-> Search Bar
-> Restaurant Container - Image, name, Cuisine, Price per person
- Footer
-> Copyright
-> Links
-> address
-> Contact
*/

const AppLayout =()=>{
    return (
        <div className="parent">
        <Header />  
        <Body /> 
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<AppLayout />)
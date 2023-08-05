import React, { Children, Suspense, lazy } from "react";
import ReactDOM from "react-dom/client";
import Header from "./Header";
import Body from "./Body";
import { createBrowserRouter,Outlet,RouterProvider } from "react-router-dom";
import About from "./About";
import Contact from "./Contact";
import Error from "./Error";
import RestaurantMenu from "./RestaurantMenu";
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
const Grocery= lazy(()=> import('./Grocery'))

const AppLayout =()=>{
    return (
        <div className="app">
        <Header />  
        <Outlet /> 
        </div>
    )
}

const appRouter= createBrowserRouter([
    {
        path : "/",
        element : <AppLayout />,
        children : [
            {
                path : "/",
                element : <Body />
            },
            {
                path : "/about",
                element : <About />
            },
            {
                path: "/contact",
                element : <Contact />
            },
            {
                path: "/grocery",
                element : 
                <Suspense fallback={<h1>Loading...</h1>}><Grocery /></Suspense>              
            },
            {
                path: "/restaurants/:resId",
                element: <RestaurantMenu />,
            }
        ],
        errorElement: <Error /> 
    }     
])

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<RouterProvider router={appRouter} />)
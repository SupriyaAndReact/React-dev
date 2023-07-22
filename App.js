import React from "react";
import ReactDOM from "react-dom/client";

const Title =()=> {
    return (<h1 className="title" tabIndex='5'>
        Namaste React inside Title
    </h1>)
}

const Heading =()=>{
    return (
        <div id="parent">
        <Title/>
        <h1>Namaste React inside heading</h1>    
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<Heading />)
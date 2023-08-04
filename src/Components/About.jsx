import UserClass from './UserClass'
import React from 'react'
import { Component } from 'react'

class About extends Component{
    constructor(props){
        super(props)
        console.log('Parent constructor')
    }
    componentDidMount(){
        console.log('Parent componentDidMount')
    }
    render(){
        console.log('Parent render')
        return (
            <div>
                <h1>About</h1>
                <h3>Hi, we are a food delivery app.</h3>
                <UserClass name={"Supriya Gupta"} location={"Noida"}/>
            </div>
        ) 
    }
}

export default About
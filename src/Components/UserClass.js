import React from "react";

class UserClass extends React.Component{
    constructor(props){
        super(props)
        this.state={
            userInfo : {
                name : 'dummy',
                location: 'default',
                avatar_url: ''
            }
        }
        console.log('Child constructor')
    }
    
    async componentDidMount(){
        const data= await fetch('https://api.github.com/users/SupriyaAndReact')
        const json =await data.json()
        this.setState({
            userInfo: json
        })

    }

    render() {
        console.log('Child render')
        const {login, type,avatar_url}= this.state.userInfo
        return (
            <div className="m-4 p-4 bg-gray-50 rounded-lg">
                <img src={avatar_url}/>
                <h2>Login: {login}</h2>
                <h2>Type: {type}</h2>
            </div>
        )
    }
}

export default UserClass
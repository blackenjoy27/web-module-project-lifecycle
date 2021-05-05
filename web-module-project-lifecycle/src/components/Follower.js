import React from "react";
import axios from "axios";
import User from "./User";


class Follower extends React.Component {
    state={
        user: null
    }
    componentDidMount(){
        axios.get(`https://api.github.com/users/${this.props.follower.login}`)
        .then(res=>{

            this.setState({user: res.data});

        })
        .catch(e=>{
            console.log("Something went wrong");
        })
    }

    render(){
        return (
            <div>              
                {this.state.user && <User user={this.state.user}/>}
            </div>

        )
    }
}

export default Follower;
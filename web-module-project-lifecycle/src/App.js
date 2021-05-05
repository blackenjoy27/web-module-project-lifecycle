import './App.css';
import React from 'react';
import axios from 'axios';
import Follower from "./components/Follower";
import User from "./components/User";



class App extends React.Component{

  state = {
    user:"",
    followers: [],
    input:""
  }

  componentDidMount(){
    axios.get(`https://api.github.com/users/blackenjoy27`)
      .then(res=>{
        this.setState({user:res.data});
      })
      .catch(e=>{
        console.log(e);
      })
      axios.get(`https://api.github.com/users/blackenjoy27/followers`)
      .then(res=>{
        this.setState({followers: res.data});
      })
      .catch(e=>{
        console.log(e);
      })
  }
  updateInput = (evt)=>{
    this.setState({input:evt.target.value});
  }

  submitForm = (evt)=>{
    evt.preventDefault();
    axios.get(`https://api.github.com/users/${this.state.input}`)
    .then(res=>{
      this.setState({user:res.data});
    })
    .catch(e=>{
      console.log(e);
    })
    axios.get(`https://api.github.com/users/${this.state.input}/followers`)
    .then(res=>{
      this.setState({followers: res.data});
    })
    .catch(e=>{
      console.log(e);
    })
    this.setState({input:""});
  }

  render(){
    return (
      <div className="App">
          <form onSubmit={this.submitForm}>
            <input type="text" value={this.state.input} onChange ={this.updateInput} placeholder="Enter Github User Name" />
            <button>Search This User</button>
          </form>
          <h2>User</h2>
          <User user={this.state.user}/>
          <h2>Followers</h2>
          <div className="followers">
            {this.state.followers && this.state.followers.map(follower=>{
                return <Follower key={follower.id} follower={follower}/>
            })}
          </div>

      </div>
    );
  }
}

export default App;

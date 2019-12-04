import React, { Component } from "react";
import axios from "axios";
import "./App.css";
import UserCard from "./Components/UserCard";
import FollowerCard from "./Components/FollowerCard";

class App extends Component {
  constructor() {
    super();
    this.state = {
      person: [],
      followers: []
    };
  }

  componentDidMount() {
    axios
     .get(`https://api.github.com/users/avkan1087`)
     .then(response => {
        console.log(response.data);
        this.setState({
          person: response.data
        });
    });

    axios
      .get(`https://api.github.com/users/avkan1087/followers`)
      .then(res => {
        console.log(res.data);
        this.setState({
          followers: res.data
        });
      })
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div>
        <h1>My Github</h1>
        <div>
          <UserCard user={this.state.person} />
        </div>
        <h2>My Followers</h2>
        <div className= "followers" >
          {this.state.followers.map(follower => (
            <FollowerCard key={follower.id} follower={follower} />
          ))}
        </div>
      </div>
    );
  }
}

export default App;
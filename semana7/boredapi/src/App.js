import React from "react";
import axios from "axios";

export default class App extends React.Component {
  state={
    activity:{}

  }
  getActivity = () => {
    axios.get("https://www.boredapi.com/api/activity/")
    .then((res) => {
      console.log(res.data)
      this.setState({activity:res.data})
    })
    .catch((err) => {
      console.log(err)
    })
  }

  















  
  render() {
   
    return (
      <div className="App">
        <h1>Looking for what to do?</h1>
        <button onClick={ this.getActivity}>Press here Please :-) !!</button>
        <hr></hr>
        <h3>suggested activity:</h3>
        <p>name: {this.state.activity.activity} </p>
        <p>type: {this.state.activity.type}</p>
        <p>participants: {this.state.activity.participants}</p>
        <p>price: {this.state.activity.price}</p>
        <h3>and learning english:</h3>

        



      </div>
    );
  }
}


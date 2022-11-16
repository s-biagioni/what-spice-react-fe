import React, { Component } from 'react';

class App extends Component {

  constructor(props){
  super(props);

  this.state = {
    username : ''
  }

  this.updateInput = this.updateInput.bind(this);
  this.handleSubmit = this.handleSubmit.bind(this);
  }


  updateInput(event){
  this.setState({username : event.target.value})
  }


  handleSubmit(){
  console.log('Your input value is: ' + this.state.username)
  //Send state to the server code
  }



  render(){
  return (
      <div>
      <input type="text" onChange={this.updateInput}></input>
      <input type="submit" onClick={this.handleSubmit} ></input>
      </div>
    );
  }
} 


export default App;
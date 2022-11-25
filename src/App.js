import React, { Component } from 'react';

class App extends Component {

  constructor(props){
  super(props);

  this.state = {
    food : ''
  }

  this.updateInput = this.updateInput.bind(this);
  this.handleSubmit = this.handleSubmit.bind(this);
  }


  updateInput(event){
    this.setState({food : event.target.value})
  }


  handleSubmit(){
    console.log('Your input value is: ' + this.state.food)
    
    // Send state to the server code

    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        food: this.state.food
      })
    };

    // get data from what-spice service
    fetch('http://localhost:8080/api/spices/', requestOptions)
      .then(async response => {
        const isJson = response.headers.get('content-type')?.includes('application/json');
        const data = isJson && await response.json();
        // test received output
        console.log('response is: ', data);
        if(data.length === 0) {
          alert('No spices available!');
          return;
        }
        var outputForAlert = 'The spices needed are: ';
        data.forEach(element => {
          if (data[data.length-1] === element){
            // last element
            outputForAlert += element.spice + '.';
          } else {
            outputForAlert += element.spice + ', ';
          }
        });
        // output
        alert(outputForAlert);
      });
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
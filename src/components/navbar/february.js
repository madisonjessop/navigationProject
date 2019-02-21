import React, { Component } from 'react';

export default class Counter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      numCounter: 0
    }

    this.counterToggle = this.counterToggle.bind(this);
  }

  counterToggle(num) {
    this.setState({
      numCounter: this.state.numCounter + num
    }) 
  }

  render() {
    return(
      <div>
        <h2>February 2019</h2>

        <hr/>

        <h4>Number Counter</h4>

        <p>
          The value of count is: {this.state.numCounter}
        </p>

        <button onClick={() => this.counterToggle(1)}>Add</button>
        <button onClick={() => this.counterToggle(-1)}>Subtract</button>
      </div>
    )
  }
}





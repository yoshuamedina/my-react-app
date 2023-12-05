import React, { Component } from 'react';

class Counter extends Component {
    constructor(props) {
        super(props);

        this.state = {
            count: 5
        };
    }

    incrementCount = () => {
        //TODO: Use setState() to modify the count. Here’s an example:
        this.setState({
            count: this.state.count + 1
        }
    );
} 
       
    render() {
        return (
         /*TODO (Counter): display the value of count*/

        /*TODO (Counter): add a button that calls incrementCount() when clicked*/
        
        <div className="counter">
           <h1>{this.state.count}</h1>
           <button onClick={this.incrementCount}>Increment</button>
        </div>
        );
    }
}

export default Counter;
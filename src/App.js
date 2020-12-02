import React from 'react';
import PropTypes from 'prop-types';


class App extends React.Component{
  constructor(props){
    super(props);
    console.log("constructor");
  }

  state = {
    count:0
  };

  add = () => {
    this.setState(current => ({ count: current.count + 1}));//this.setState({count: this.state.count +  1});
  };
  minus = () => {
    this.setState(current => ({ count: current.count - 1}));
  };

  componentDidMount(){
    console.log("if the component is rendered at first time, it is work");
  }

  componentDidUpdate(){
    console.log("component is updated");
  }

  render(){
    console.log("render");
    return (
      <div>
        <h1>The number is: {this.state.count}</h1>
        <button onClick={this.add}>Add</button>
        <button onClick={this.minus}>Minus</button>
      </div>
    ); 
  }
}

export default App;

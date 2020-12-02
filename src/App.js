import React from 'react';

class App extends React.Component{
  state = {
    isLoading:true,
    movies:[]
  };

  componentDidMount(){
    setTimeout(() => this.setState({isLoading: false}),1000);
  }

  render(){
    const {isLoading} = this.state;
    return (
      <div>
        {isLoading ? 
        <div>
          <h1>Loading....</h1>
        </div> :
        <div>
          <h1>We are ready!</h1>
        </div>
        }
      </div>
    ); 
  }
}

export default App;

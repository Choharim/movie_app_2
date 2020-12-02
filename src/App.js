import React from 'react';
import axios from 'axios';

class App extends React.Component{
  state = {
    isLoading:true,
    movies:[]
  };

  getMovies = async() => {
    const {data:{data:{movies}}} = await axios.get("https://yts.mx/api/v2/list_movies.json");
    console.log(movies);
    this.setState({isLoading: false});
  }
  
  componentDidMount(){
    this.getMovies();
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

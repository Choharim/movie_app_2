import React from 'react';
import axios from 'axios';
import Movie from './Movie';

class App extends React.Component{
  state = {
    isLoading:true,
    movies:[]
  };

  getMovies = async() => {
    const {data:{data:{movies}}} = await axios.get("https://yts.mx/api/v2/list_movies.json?sort_by=rating");
    this.setState({
      isLoading: false,
      movies});
  }
  
  componentDidMount(){
    this.getMovies();
  }

  render(){
    const {isLoading,movies} = this.state;
    return (
      <div>
        {isLoading ? 
        <div>
          <h1>Loading....</h1>
        </div> :
        movies.map((movie) => { return <Movie key={movie.id} id={movie.id} title={movie.title} summary={movie.summary} year={movie.year} poster={movie.medium_cover_image}></Movie>})
        }
      </div>
    ); 
  }
}

export default App;

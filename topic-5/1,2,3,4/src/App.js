import React, { Component } from 'react';
import MovieList from './MovieList.jsx';
import AddMovie from './AddMovie.jsx';


const movieList = [{id:1,title:'Avatar',category:'Science Fiction',rating:5,isFav:false},
  {id:3,title:'Fast and Furious',category:'Suspense',rating:4,isFav:true},
  {id:4,title:'The Imitation Game',category:'Drama',rating:4,isFav:true}];
 
  if (localStorage.length === 0) {
    localStorage.setItem("movies", JSON.stringify(movieList));
    
  }

class App extends Component {

  constructor(props) {

    super(props);
    this.state = {
      movieList: [],
      formAdd : false
    }
    this.editMovieSubmit = this.editMovieSubmit.bind(this);
    this.deleteMovie = this.deleteMovie.bind(this);
    this.addNewMovie = this.addNewMovie.bind(this);
    this.setFormMovie = this.setFormMovie.bind(this);
  }

    componentWillMount() {

      this.setState({
          movieList: (JSON.parse(localStorage.getItem("movies")))
        }
      );
    }

  addNewMovie(id, title, category, rating, isFav) {
    this.setState((prevState, props) => ({
       movieList: [...prevState.movieList, { id:id, title: title, category: category, rating:rating, isFav: isFav}]
     }));
     this.setState({formAdd: false});
  }

  deleteMovie(id) {
     
      let filteredMovieList = this.state.movieList.filter(x => x.id !== id);
      this.setState((prevState, props) => ({
        movieList: filteredMovieList
      }));
      
  }

  editMovieSubmit(id,title, category, rating, isFav) {
    let movieListCopy = this.state.movieList.map((movie) => {

      if (movie.id === id) {
        movie.title = title;
        movie.category = category;
        movie.rating = rating;
        movie.isFav = isFav;
      }
      return movie;
    });
    this.setState({movieList: movieListCopy});
    localStorage.setItem('movies', JSON.stringify(movieListCopy));
  }

setFormMovie() {
  if(this.state.formAdd === false)
    this.setState({formAdd: true});
  else  
  this.setState({formAdd: false});
}
  render() {
    const isAdd = this.state.formAdd;
    return (

      <div className="container-fluid">
        <div className="row mt-3">
          <div className="col-lg-12">
          <div className="card">
            <div className="card-header">
              Movie Registry
            </div>
            <div className="card-body">
              <table className="table table-hover">
                <thead className="thead-dark">
                  <tr>
                    <th>Title</th>
                    <th>Category</th>
                    <th>Rating</th>
                    <th>Favorite</th>
                    <th>Edit/Save</th>
                    <th>Delete</th>
                  </tr>
                </thead>
                <MovieList deleteMovie={this.deleteMovie} movieList={this.state.movieList} editMovieSubmit={this.editMovieSubmit} />
              
              {isAdd ? (
                <AddMovie addNewMovie={this.addNewMovie} setFormMovie={this.setFormMovie}></AddMovie>
              ) : (
                <button className="btn btn-dark pull-left" onClick={this.setFormMovie}>New Movie</button>
              )}   
              </table>
            </div>
            </div>
          </div>
        </div>   
      </div>
      
    );
  }
}

export default App;

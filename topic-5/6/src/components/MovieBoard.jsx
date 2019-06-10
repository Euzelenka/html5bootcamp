import React, { Component } from 'react';
import '../App.css';
import MovieList from './MovieList.jsx';
import AddMovie from './AddMovie.jsx'
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import {addMovie,deleteMovie,updateMovie} from '../actions/movieActions'

class MovieBoard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formAdd : false
    }
    this.addNewMovie = this.addNewMovie.bind(this);
    this.deleteMovie = this.deleteMovie.bind(this);
    this.editMovieSubmit = this.editMovieSubmit.bind(this);
    this.setFormMovie = this.setFormMovie.bind(this);
  }

  addNewMovie(id, title, category, rating) {
    this.props.addMovie({id:id,title:title,category:category,rating:rating});
    this.setState({formAdd: false});

  }

  deleteMovie(id) {
    this.props.deleteMovie(id);
    
  }

  editMovieSubmit(id,title,category,rating) {
    this.props.updateMovie({id:id,title:title,category:category,rating:rating});
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
       
             <div className="card-body">
              <table className="table table-hover">
                <thead className="thead-dark">
                  <tr>
                    <th>Title</th>
                    <th>Category</th>
                    <th>Rating</th>
                    <th>Edit/Save</th>
                    <th>Delete</th>
                  </tr>
                </thead>
                <MovieList deleteMovie={this.deleteMovie} movieList={this.props.movieList} editMovieSubmit={this.editMovieSubmit} />
              
              {isAdd ? (
                <AddMovie addNewMovie={this.addNewMovie} setFormMovie={this.setFormMovie}></AddMovie>
              ) : (
                <button className="btn btn-dark pull-left" onClick={this.setFormMovie}>New Movie</button>
              )}   
              </table>
            </div> 
      
    );
  }
}


const mapStateToProps = (state) => {
    return {
      movieList : state
    }
  }
  
  const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
      addMovie:addMovie,
      deleteMovie:deleteMovie,
      updateMovie:updateMovie
    },dispatch);
  }

export default connect(mapStateToProps,mapDispatchToProps)(MovieBoard);

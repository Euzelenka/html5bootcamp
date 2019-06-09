import React, { Component } from 'react';
import MovieItem from './MovieItem.jsx';

export default class MovieList extends Component {
    render() {
        let movies = this.props.movieList;
        
        const trItem = movies.map( (item,index) => 
              <MovieItem key={index} movie={item} index={index} 
                        editMovieSubmit={this.props.editMovieSubmit} 
                        deleteMovie={this.props.deleteMovie}/>)
      return (
            <tbody>{trItem}</tbody>
      );
    }
  }
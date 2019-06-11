import React, { Component } from 'react';
import FavItem from './FavItem.jsx';

export default class FavoriteMovies extends Component {
    render() {
        
        let movies = this.props.movieList;
        
        const trItem = movies.map( (item,index) => 
              <FavItem key={index} movie={item}/>)
      return (
            <tbody>{trItem}</tbody>
      );
    }
  }
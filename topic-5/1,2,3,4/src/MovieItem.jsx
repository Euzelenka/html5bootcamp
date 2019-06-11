import React, { Component } from 'react';
import './Style.css';

class MovietItem extends Component {
  
  constructor(props) {
    super(props);

    this.state = {isEdit:false,
                  favTouch:false,
                  dataFav:''};
  
    this.editMovie = this.editMovie.bind(this);
    this.editMovieSubmit = this.editMovieSubmit.bind(this);
    this.deleteMovie = this.deleteMovie.bind(this);
    this.onChangeFav = this.onChangeFav.bind(this);
  }
  
  deleteMovie() {
    const {id} = this.props.movie;
    this.props.deleteMovie(id);
  }

  editMovie() {
    this.setState((prevState,props) => ({
      isEdit : !prevState.isEdit
    }))
  }

  editMovieSubmit() {
    const {id} = this.props.movie;
    this.setState((prevState,props) => ({
      isEdit : !prevState.isEdit
    }));
    let {isFav} = this.props.movie;
    if(this.state.favTouch === true) {
      isFav = this.state.dataFav;
    }
    this.props.editMovieSubmit(id,this.titleInput.value,this.categoryInput.value,this.ratingInput.value,isFav);
  }

  onChangeFav(e) {
    let fav = e.target.checked;
    this.setState({favTouch:true});
    this.setState({dataFav:fav});
  }

render() {

      const {title,category,rating,isFav} = this.props.movie;

      let i = 0;
      let starArray = [];
      for(i = 1; i <= rating; i++) {
        starArray.push(
        <i className="material-icons" key={i} style={{color:'#EBC200'}}>grade</i>
        );
      }
      let fav;
      if(isFav) {
        fav = <i className="material-icons" style={{color:'red'}}>favorite</i>;
      }
      else {fav = <i className="material-icons">clear</i>;} 
        
      
    return (

        this.state.isEdit === true ? 

        <tr className="bg-warning" key={this.props.index}>

          <td>
            <input ref={titleInput => this.titleInput = titleInput} defaultValue ={title}/>
          </td>
          <td>
          <select ref={categoryInput => this.categoryInput = categoryInput} defaultValue ={category}>
                <option value="">{category}</option>
                <option value="Adventure">Adventure</option>
                <option value="Animation">Animation</option>
                <option value="Biography">Biography</option>
                <option value="Comedy">Comedy</option>
                <option value="Drama">Drama</option>
                <option value="Romance">Romance</option>
                <option value="Suspense">Suspense</option>
                <option value="Science fiction">Science fiction</option>
                <option value="Thriller">Thriller</option>
            </select>
          </td>

          <td>
          <select ref={ratingInput => this.ratingInput = ratingInput} defaultValue={rating}>
                <option value="">{rating}</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
            </select>
          </td>
              
          <td>
            <label> 
                <input type="checkbox" defaultChecked={isFav} 
                ref={favInput => this.favInput = favInput}
                 onChange={this.onChangeFav}
                /> 
                <span> Is favorite? </span> 
              </label>
          </td>

          <td>
            <i className="far fa-save" onClick={this.editMovieSubmit}></i>
          </td>

          <td>
            <i className="fas fa-trash"></i>
          </td>
        </tr>
 :
        <tr key={this.props.index}>
          <td>
            {title}
          </td>
          
          <td>
            {category}
          </td>

          <td>
            <p>{starArray}</p>
          </td>
        
          <td>
            <p>{fav}</p>
          </td>

          <td>
            <i className="far fa-edit" onClick={this.editMovie}></i>
          </td>

          <td>
            <i className="fas fa-trash" onClick={this.deleteMovie}></i>
          </td>
        </tr>     
      );
    }
}

export default MovietItem;
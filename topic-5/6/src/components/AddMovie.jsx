import React from 'react';
import uuid from 'uuid';
import '../Style.css';

class AddMovie extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
        title: (this.props) ? this.props.title : "",
        category: (this.props) ? this.props.category : "",
        rating: (this.props) ? this.props.rating : "",
      }
    this.addNewMovie = this.addNewMovie.bind(this);
    this.newCategory = this.newCategory.bind(this);
    this.newRating = this.newRating.bind(this);
    this.newTitle = this.newTitle.bind(this);
    this.setFormMovie = this.setFormMovie.bind(this);
    }

    addNewMovie(e) {

        e.preventDefault();
        if(this.state.title)
            this.props.addNewMovie(uuid.v4(),this.state.title,this.state.category,this.state.rating);
}

newTitle() {
  if(this.refs.title !== "") {
    this.setState({
      title: this.refs.title.value
    });
  }
}

newCategory() {
  this.setState({
    category: this.refs.category.value
    });
}

newRating() {

    this.setState({
        rating: this.refs.rating.value
    });
}

setFormMovie() {
  this.props.setFormMovie();
}

render() {
    const category = (this.props.id) ? `Choose category.` : "Choose category";
    const rating = (this.props.id) ? `Choose rating.` : "Choose rating";

    return (
        <tr className="formAdd">
          <td>
            <textarea placeholder="Movie title" ref="title" onChange={this.newTitle} rows='1'></textarea>
          </td>
          <td>
            <select ref="category" onClick={this.newCategory}>
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
            <select ref="rating" onClick={this.newRating}>
                <option value="">{rating}</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
            </select>
          </td>
          <td>
            <button className="btn btn-dark pull-left" onClick={this.addNewMovie} >Add</button>
          </td>
          <td>
            <button className="btn btn-dark pull-left" onClick={this.setFormMovie} >Cancel</button>
          </td>
      </tr>
    

    );
  }
}

export default AddMovie;
import React from "react";
import uuid from "uuid";
import "./Style.css";

class AddMovie extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: this.props ? this.props.title : "",
      category: this.props ? this.props.category : "",
      rating: this.props ? this.props.rating : ""
    };
    this.addNewMovie = this.addNewMovie.bind(this);
    this.newCategory = this.newCategory.bind(this);
    this.newRating = this.newRating.bind(this);
    this.newTitle = this.newTitle.bind(this);
    this.setFormMovie = this.setFormMovie.bind(this);
  }

  addNewMovie(e) {
    e.preventDefault();
    if (this.state.title) this.props.addNewMovie(uuid.v4(), this.state.title, this.state.category, this.state.rating);
  }

  newTitle() {
    if (this.refs.title !== "") {
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
    const category = this.props.id ? `Choose category.` : "Choose category";
    const rating = this.props.id ? `Choose rating.` : "Choose rating";
    return h("tr", {
      className: "formAdd"
    }, h("td", null, h("textarea", {
      placeholder: "Movie title",
      ref: "title",
      onChange: this.newTitle,
      rows: "1"
    })), h("td", null, h("select", {
      ref: "category",
      onClick: this.newCategory
    }, h("option", {
      value: ""
    }, category), h("option", {
      value: "Adventure"
    }, "Adventure"), h("option", {
      value: "Animation"
    }, "Animation"), h("option", {
      value: "Biography"
    }, "Biography"), h("option", {
      value: "Comedy"
    }, "Comedy"), h("option", {
      value: "Drama"
    }, "Drama"), h("option", {
      value: "Romance"
    }, "Romance"), h("option", {
      value: "Suspense"
    }, "Suspense"), h("option", {
      value: "Science fiction"
    }, "Science fiction"), h("option", {
      value: "Thriller"
    }, "Thriller"))), h("td", null, h("select", {
      ref: "rating",
      onClick: this.newRating
    }, h("option", {
      value: ""
    }, rating), h("option", {
      value: "1"
    }, "1"), h("option", {
      value: "2"
    }, "2"), h("option", {
      value: "3"
    }, "3"), h("option", {
      value: "4"
    }, "4"), h("option", {
      value: "5"
    }, "5"))), h("td", null, h("button", {
      className: "btn btn-dark pull-left",
      onClick: this.addNewMovie
    }, "Add")), h("td", null, h("button", {
      className: "btn btn-dark pull-left",
      onClick: this.setFormMovie
    }, "Cancel")));
  }

}

export default AddMovie;
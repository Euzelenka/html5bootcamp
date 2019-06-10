import React, { Component } from "react";
import star from "./star.png";
import "./Style.css";
export default class MovieItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isEdit: false
    };
    this.editMovie = this.editMovie.bind(this);
    this.editMovieSubmit = this.editMovieSubmit.bind(this);
    this.deleteMovie = this.deleteMovie.bind(this);
  }

  deleteMovie() {
    const {
      id
    } = this.props.movie;
    this.props.deleteMovie(id);
  }

  editMovie() {
    this.setState((prevState, props) => ({
      isEdit: !prevState.isEdit
    }));
  }

  editMovieSubmit() {
    this.setState((prevState, props) => ({
      isEdit: !prevState.isEdit
    }));
    this.props.editMovieSubmit(this.props.movie.id, this.titleInput.value, this.categoryInput.value, this.ratingInput.value);
  }

  render() {
    const {
      title,
      category,
      rating
    } = this.props.movie;
    let i = 0;
    let starArray = [];

    for (i = 1; i <= rating; i++) {
      starArray.push(h("img", {
        src: star,
        key: i
      }));
    }

    return this.state.isEdit === true ? h("tr", {
      className: "bg-warning",
      key: this.props.index
    }, h("td", null, h("input", {
      ref: titleInput => this.titleInput = titleInput,
      defaultValue: title
    })), h("td", null, h("select", {
      ref: categoryInput => this.categoryInput = categoryInput,
      defaultValue: category
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
      ref: ratingInput => this.ratingInput = ratingInput,
      defaultValue: rating
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
    }, "5"))), h("td", null, h("i", {
      className: "far fa-save",
      onClick: this.editMovieSubmit
    })), h("td", null, h("i", {
      className: "fas fa-trash"
    }))) : h("tr", {
      key: this.props.index
    }, h("td", null, title), h("td", null, category), h("td", null, h("p", null, starArray)), h("td", null, h("i", {
      className: "far fa-edit",
      onClick: this.editMovie
    })), h("td", null, h("i", {
      className: "fas fa-trash",
      onClick: this.deleteMovie
    })));
  }

}
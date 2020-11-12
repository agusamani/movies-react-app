import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { removeMovieFavorite } from "../../actions/index";
import './Favorites.css';

export class ConnectedList extends Component {

  render() {
    return (
      <div>
        <h2>Películas Favoritas</h2>
        <ul>
          {
            this.props.movies.map((movie) => {
              return (
                <div key={movie.id}>
                  <Link to={`/movie/${movie.id}`}>
                    {movie.title}
                  </Link>
                  <button onClick={() => this.props.removeMovieFavorite({title: movie.title, id: movie.id})}>Remove</button>
                </div>
              )
            })
          }
        </ul>
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    movies: state.movies
  }
}

export default connect(mapStateToProps, { removeMovieFavorite })(ConnectedList);

import React, { useState } from 'react';
import { connect } from "react-redux";
import { Link, NavLink } from 'react-router-dom';
import './Buscador.css';
import { addMovieFavorite, getMovies } from '../../actions';

export function BuscadorFuncional({ movies, getMovies, addMovieFavorite }) {
  const [ title, setTitle ] = useState('');

  function handleChange(e) {
    setTitle(e.target.value);
  };

  function handleSubmit(e) {
    e.preventDefault();
    getMovies(title)
  }

  return (
    <div>
    <h2>Buscador</h2>
    <form className="form-container" onSubmit={handleSubmit}>
      <div>
        <label className="label" htmlFor="title">Película: </label>
        <input
          type="text"
          id="title"
          autoComplete="off"
          value={title}
          onChange={handleChange}
        />
      </div>
      <button type="submit">BUSCAR</button>
    </form>
    <ul>
     {
       movies.map((movie) => {
         return (
           <div key={movie.imdbID}>
             <Link to={`/movie/${movie.imdbID}`}>
              {movie.Title}
             </Link>
             <button onClick={() => addMovieFavorite({title: movie.Title, id: movie.imdbID})}>Fav</button>
           </div>
         )
       })
     }
    </ul>
  </div>
  )
}
function mapStateToProps(state) {
  return {
    movies: state.moviesLoaded
  };
}

function mapDispatchToProps(dispatch) {
  return {
    addMovieFavorite: movie => dispatch(addMovieFavorite(movie)),
    getMovies: title => dispatch(getMovies(title))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(BuscadorFuncional);

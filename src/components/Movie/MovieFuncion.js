import React, { useEffect } from 'react';
import { connect, useSelector, useDispatch } from 'react-redux';
import { getMovieDetail } from '../../actions/index';

function MovieFuncion({ match }) {
  const dispatch = useDispatch();
  const movie = useSelector(state => state.movieDetail);
  
  useEffect(() => {
    const id = match.params.id;
    dispatch(getMovieDetail(id))
  },[])

  if(Object.keys(movie).length < 1) return <h1>Cargando...</h1>
  const { Title, Year, Director, Genre, Runtime } = movie;
  return (
    <div className="movie-detail">
      Detalle de la pelicula  
      <div>
          Title: {Title}
      </div>
      <div>
          Year: {Year}
      </div>
      <div>
          Director: {Director}
      </div>
      <div>
          Genre: {Genre}
      </div>
      <div>
          Runtime: {Runtime}
      </div>
    </div>
  )
};

// function mapStateToProps(state) {
//   return {
//       movie: state.movieDetail
//   }
// }


// export default connect(mapStateToProps,{ getMovieDetail })(MovieFuncion);

export default MovieFuncion;
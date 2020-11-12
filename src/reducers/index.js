const initialState = {
  movies: [], // peliculas favoritas
  moviesLoaded: [], // peliculas que vienen de la API
  movieDetail: {} // detalles de una pelicula especifica
};
// [{
//   title: 'scarface',
//   id:'1234'
// },{
//   title: 'godfather',
//   id:'1234'
// }]
function rootReducer(state = initialState, action) {
  switch(action.type) {
    case 'ADD_MOVIE_FAVORITE': 
      return {
        ...state,
        movies: state.movies.concat(action.payload)
      }
    case 'REMOVE_MOVIE_FAVORITE':
      return {
        ...state,
        movies: state.movies.filter( movie => movie.id !== action.payload.id)
      }
    case 'GET_MOVIES':
      return {
        ...state,
        moviesLoaded: action.payload.Search
      }
    case 'GET_MOVIE_DETAIL':
      return {
        ...state,
        movieDetail: action.payload
      }
    default:
      return state
  }
}

export default rootReducer;
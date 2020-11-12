import React from 'react';
import { connect } from 'react-redux';
import { getMovieDetail } from '../../actions/index';

import './Movie.css';

class Movie extends React.Component {

    componentDidMount() {
        const id = this.props.match.params.id;
        this.props.getMovieDetail(id)
    }
    render() {
        if(Object.keys(this.props.movie).length < 1) return <h1>Cargando...</h1>
        const { Title, Year, Director, Genre, Runtime } = this.props.movie
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
        );
    }
}

function mapStateToProps(state) {
    return {
        movie: state.movieDetail
    }
}


export default connect(mapStateToProps,{ getMovieDetail })(Movie);
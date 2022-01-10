import React, { useContext } from 'react'
import ReactDOM from "react-dom";
import { formatDate } from '../../helpers/date';

import './MovieDetailModal.css'

import GenreArrayContext from '../../Context/GenreArrayContext';

function MovieDetailModal({ status, movie, setStatus }) {

    //Genre array values from use context
    const genreArrayValues = useContext(GenreArrayContext);

    if (status === false) return null;

    const closeModal = (event) => {
        event.preventDefault();
        setStatus(false);
    }

    //Get movie genres
    const returnGenre = () => {
        let outputGenres = "";

        genreArrayValues.forEach( genre => {
            if (movie.genre_ids.includes(genre.id)) {
                outputGenres += `${genre.name}, `;
            }
        })
        return outputGenres.substring(0, outputGenres.length - 2);
    }

    //Format rating of the movie
    const formatRating = () => {
        const rating = Number(movie.vote_average);
        
        if (rating <= 5.0) 
            return <span className='rating-box red-rating'>{rating}</span>
        else if (rating >= 5.0 && rating < 8.0) 
            return <span className='rating-box yellow-rating'>{rating}</span>
        else 
            return <span className='rating-box green-rating'>{rating}</span>
    }

    //ReactDOM to create modal outside of the parent hierarchy
    return ReactDOM.createPortal(
        <>
            <div className="black-overlay-wrapper" onClick={closeModal}></div>
            <div className="movie-detail-wrapper-modal">
                <div className="left-area" style={{ backgroundImage: `url(https://image.tmdb.org/t/p/original/${movie.backdrop_path})` }}></div>
                <div className="right-area">
                    <h2>{movie.title}</h2>
                    <p>{movie.overview ? movie.overview : "No overview found!"}</p>
                    <p className="rating">{movie.vote_average ? formatRating() : "Movie hasn't been rated yet!"} 
                        {movie.vote_average ? ` as rated by ${movie.vote_count} voters` : ``}</p>
                    <p>Release date: {movie.release_date ? formatDate(movie.release_date) : "Release date not found!"}</p>
                    <p>Genres: {movie.genre_ids.length !== 0 ? returnGenre() : "No listed genre!"}</p>
                    <button
                        onClick={closeModal}
                        className='common-button close-modal-button'>Close</button>
                    <button
                        onClick={closeModal}
                        className='common-button close-modal-X-button'>X</button>
                </div>
            </div>
        </>, document.body)
}

export default MovieDetailModal

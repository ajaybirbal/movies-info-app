import React, { useContext, useState } from 'react'

import MovieDetailModal from '../MovieDetailsModal/MovieDetailModal';
import './SingleMovie.css'

function SingleMovie({ movie }) {

    const [displayModal, setDisplayModal] = useState(false);
    const displayMovieModal = () => setDisplayModal(true);

    const backdropImage = movie.backdrop_path !== null ?
        { backgroundImage: `url(https://image.tmdb.org/t/p/original/${movie.backdrop_path})` }
        : { backgroundColor: "white" };
 

    return (
        <>
            <MovieDetailModal status={displayModal} movie={movie} setStatus={setDisplayModal} />
            <div className='card' style={backdropImage}>
                <div className="card-black-transparent">
                    <h2>{movie.title}</h2>
                    <p>{movie.overview.substring(0, 150)}...</p>
                    <button
                        onClick={displayMovieModal}
                        className="common-button view-more-button-single-movie">Display more</button>
                </div>
            </div>
        </>
    )
}

export default SingleMovie

import React, { useState } from 'react'
import MovieDetailModal from '../MovieDetailsModal/MovieDetailModal';
import './HeroArea.css';

function HeroArea({ movie = {} }) {

    const [displayModal, setDisplayModal] = useState(false);
    const displayMovieModal = () => setDisplayModal(true);

    if (typeof movie === undefined) {
        console.log("I am undefined");
    }

    const backdropImage = movie.backdrop_path !== undefined ?
        { backgroundImage: `url(https://image.tmdb.org/t/p/original/${movie.backdrop_path})` }
        : { backgroundColor: "white" };
    return (
        <>
            <MovieDetailModal status={displayModal} movie={movie} setStatus={setDisplayModal} />
            <div className="hero-container" style={backdropImage} >
                <div className="content-width info-container">
                    <div className="inner-container">
                        <h1>{movie.title ? movie.title : "No results found!"}</h1>
                        <p>{movie.overview ? `${movie.overview.substring(0, 250)}...` : ""}</p>
                        {
                            Object.keys(movie).length !== 0 ? <button
                                onClick={displayMovieModal}
                                className="common-button view-more-button-hero">Display more</button>
                                : ""
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default HeroArea

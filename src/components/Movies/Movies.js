import React from 'react'
import SingleMovie from '../SingleMovie/SingleMovie';
import './Movies.css';

function Movies({movies}) {
    return (
        <div className='movies-container'>
            <div className="content-width">
                <h1>{ Object.keys(movies).length !== 0 ? "Movies: " : "Please enter movie name"}</h1>
                <div className="card-container">
                    {
                        movies.map(movie => <SingleMovie key={movie.id} movie={movie} />)
                    }
                </div>
            </div>
        </div>
    )
}

export default Movies

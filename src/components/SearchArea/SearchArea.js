import React, { useState } from 'react'
import './SearchArea.css'

function SearchArea({ setSearch }) {

    return (
        <>
            <div className="search-container main-brand-color">
                <div className="content-width">
                    <div className="input-container">
                        <input placeholder="Enter a movie here: " onChange={event => setSearch(event.target.value)}/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SearchArea

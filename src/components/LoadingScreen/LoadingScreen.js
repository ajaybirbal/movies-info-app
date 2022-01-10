import React from 'react';
import { useState, useEffect } from 'react';
import './LoadingScreen.css';

function LoadingScreen({status}) {

    const [loadingText, setLoadingText] = useState("Loading the site...");

    //check if site loading failed and display appropiate message
    useEffect(() => {
        if (status) {
            setLoadingText("Website loading failed. Try reloading website!");
        }
    }, [loadingText, status])

    return (
        <div className="loading-screen">
            <h1 className={ status === false? "blink-text" : ""}>{loadingText}</h1>
        </div>
    )
}

export default LoadingScreen

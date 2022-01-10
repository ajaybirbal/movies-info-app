import React, { useState, useEffect } from 'react';
import './App.css';
import Footer from './components/Footer/Footer';

//components imports
import HeroArea from './components/HeroArea/HeroArea';
import LoadingScreen from './components/LoadingScreen/LoadingScreen';
import Movies from './components/Movies/Movies';
import SearchArea from './components/SearchArea/SearchArea';

//utility imports
import { getMovies, getGenreList } from './helpers/api.js';

//Context imports
import GenreArrayContext from './Context/GenreArrayContext';

function App() {

  //------------------Variables---------------------------------
  //Is website loaded for first time?
  const [loadingFirstTime, setLoadingFirstTime] = useState(true);
  //Has the  site  loading  failed? If yes, pass that to loading component
  const [loadingFailed, setLoadingFailed] = useState(false);
  //Stores movie to be displayed
  const [moviesDetails, setMoviesDetails] = useState({});
  //Stores Search terms
  const [searchTerm, setSearchTerm] = useState("");
  //Stores genre array information to be used in whole app 
  const [genreArray, setGenreArray] = useState([]);

  //Helper function to set the variables
  const setMoviesAndPages = result => {
    setMoviesDetails(result.results);
  }

  //To be run first time the website is loaded
  useEffect(() => {
    
    getMovies()
      .then(res => {
        setMoviesAndPages(res);
      })
      .then(() => setLoadingFirstTime(false));
    
    //Load genres to the context
    getGenreList()
      .then(res => {
        setGenreArray(res)
      })
    
  }, [])

  //It will be executed everytime text is entered on box
  useEffect(() => {
    if (searchTerm !== "") {
      getMovies(searchTerm).then(res => {
        setMoviesAndPages(res);
      });
    }
    else {
      getMovies().then(res => {
        setMoviesAndPages(res);
      });
    }
  }, [searchTerm]);


  //If the details of api haven't been loaded
  if (Object.keys(moviesDetails).length === 0 && loadingFirstTime) {
    //Add a beautiful loading screen here

    //------Error occurs here-----------------
    //check for the same thing after 5 seconds, if initial data still has been loaded?
    setTimeout(() => {
      if (Object.keys(moviesDetails).length === 0 && loadingFirstTime) {
        setLoadingFailed(true);
      }
    }, 20000);

    return (
      <LoadingScreen status={loadingFailed} />
    )
  }

  return (
    <>
      <GenreArrayContext.Provider value={genreArray}>
          <HeroArea movie={moviesDetails[0]} />
          <SearchArea setSearch={setSearchTerm} />
          <Movies movies={moviesDetails}  />
          <Footer />
      </GenreArrayContext.Provider>
    </>
  );
}

export default App;

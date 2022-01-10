import React from 'react';

//Context to load the genre type array and avoid loading of 
//them all the time on singleview
const GenreArrayContext = React.createContext([]);

export default GenreArrayContext;
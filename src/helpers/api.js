import axios from 'axios';

const base_url = "/api/"

//Gets the list of the movies
export const getMovies = async input => {

    const top_movies_url = base_url;
    const search_url = `${base_url}search/`;

    const final_url = input ? search_url + `${encodeURIComponent(input)}` 
                         : top_movies_url;
         
    return await axios.get(final_url).then(res => res.data);
}

//Gets the list of all the genres
export const getGenreList = async () => {

    const genreUrl = `${base_url}genres`;    
    const result =  await axios.get(genreUrl);
    return result.data.genres;
}


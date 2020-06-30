import Axios from 'axios';
const url = 'https://api.themoviedb.org/3/';
const api = 'e7cb255c86f16a1298fc080124739f65';

export const getImageSource = (path) => {
  const image = path === null ? 'https://source.unsplash.com/CiUR8zISX60/500x300' : 'https://image.tmdb.org/t/p/w500/' + path;
  return image;
}

const fetchMovieGenres = async () => {
  try {
    const changeableURL = url + 'genre/movie/list?api_key=' + api;
    const { data } = await Axios.get(changeableURL);
    return data.genres;
  } catch {
    // @TODO: Handle error
  }
}

export const getMovieGenre = (genres, genre_ids) => {
  genre_ids = genre_ids.slice(0,2);
  const names = genres.filter(movie => genre_ids.some(id => id === movie.id));
  const list = names.map(genre => genre.name);
  return list.join(', ');
}

export const fetchPopulerMovies = async (region = "IN") => {
    const changeableURL = url + 'movie/popular?api_key='+ api +'&page=1&region=' + region;
    try {
      const { data: { results } } = await Axios.get(changeableURL);
      const genres = await fetchMovieGenres();
      const movies = results.map(movie => ({
          id: movie.id,
          title: movie.title, 
          image: getImageSource(movie.backdrop_path), 
          vote_average: movie.vote_average,
          overview: movie.overview.slice(0,250),
          release_date: movie.release_date,
          genre_name: getMovieGenre(genres, movie.genre_ids)
      }));

      return movies.slice(0,18);
    } catch (err) {
        console.log(err)
    }
}

export const fetchSearchResult = async (input) => {
  const changeableURL = url + 'search/movie?api_key='+ api + '&query='+ input +'&page=1'
  try {
    const { data: { results } } = await Axios.get(changeableURL);
    const genres = await fetchMovieGenres();
    const movies = results.map(movie => ({
        id: movie.id,
        title: movie.title, 
        image: getImageSource(movie.backdrop_path), 
        vote_average: movie.vote_average,
        overview: movie.overview.slice(0,250),
        release_date: movie.release_date,
        genre_name: getMovieGenre(genres, movie.genre_ids)
    }));
    return movies;
  } catch (err) {
      console.log(err)
  }
}
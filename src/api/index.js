import Axios from 'axios';
const url = 'https://api.themoviedb.org/3/';
const api = 'e7cb255c86f16a1298fc080124739f65';

export const getImageSource = (path) => {
  return 'https://image.tmdb.org/t/p/w500/' + path;
}


export const getMovieGenre = async (genre_ids) => {
  genre_ids = genre_ids.slice(0,2)
  const changeableURL = url + 'genre/movie/list?api_key=' +  api;
  const { data: { genres } } = await Axios.get(changeableURL);
  const names = genres.filter(movie => genre_ids.some(id => id === movie.id))
  return [names.map(genre => genre.name)].join(", ");
}


export const fetchPopulerMovies = async (region = "IN") => {
    const changeableURL = url + 'movie/popular?api_key='+ api +'&page=1&region=' + region;
    try {
      const { data: { results } } = await Axios.get(changeableURL);
      const cleanData = results.map(movie => {
        const newdata = {
          id: movie.id,
          title: movie.title, 
          image: getImageSource(movie.backdrop_path), 
          vote_average: movie.vote_average,
          overview: movie.overview.slice(0,250),
          release_date: movie.release_date,
          genre: movie.genre_ids,
        }
        // getMovieGenre(movie.genre_ids).then(data => newdata.genre = data[0].join(", "))
        return newdata;
      })
      return cleanData;
    } catch (err) {
        console.log(err)
    }
}

export const fetchSearchResult = async (input) => {
  const changeableURL = url + 'search/multi?api_key='+ api + '&query='+ input +'&page=1'
  try {
    const { data: { results } } = await Axios.get(changeableURL);
    return results;
  } catch (err) {
      console.log(err)
  }
}
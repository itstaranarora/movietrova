import React, { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import { fetchMovieById, getImageSource } from "../../api";
import styles from "./Movie.module.css";
import Card from "../../components/Card/Card";
import ReactLoading from "react-loading";

const Movie = () => {
  const [film, setFilm] = useState();
  const { id } = useParams();
  const history = useHistory();
  const [showGuide, setShowGuide] = useState("");

  useEffect(() => {
    fetchMovieById(id).then((data) => setFilm(data));
  }, [id]);

  const listContent = (label) => {
    return (
      film.parentalData &&
      film.parentalData
        .filter((data) => data.label === label)
        .map((data) =>
          data.items.map((item) => <li key={item.id}>{item.text}</li>)
        )
    );
  };

  const handleClick = (e) => {
    setShowGuide(e.currentTarget.value);
  };

  return (
    <div className={styles.container}>
      <div className={styles.cross}>
        <span onClick={() => history.push("/")} className="material-icons">
          close
        </span>
      </div>
      {!film ? (
        <div className={styles.contentLoading}>
          <ReactLoading type="spin" color="#89939c" />
        </div>
      ) : (
        <div className={styles.content}>
          <h1 className={styles.title}>{film.title}</h1>
          <p className={styles.discription}>{film.overview}</p>
          <span className={styles.vote}>{film.vote_average}</span>
          <div className={styles.info}>
            <div className={styles.infoItem}>
              <p>Original Language</p>
              <h3>{film.original_language}</h3>
            </div>
            <div className={styles.infoItem}>
              <p>Status</p>
              <h3>{film.status}</h3>
            </div>
            <div className={styles.infoItem}>
              <p>Year Released</p>
              <h3>
                {film.vote_average ? film.release_date.slice(0, 4) : null}
              </h3>
            </div>
          </div>
          <img
            className={styles.img}
            src={getImageSource(film.backdrop_path)}
            alt={film.title}
          />
          <div className={styles.genres}>
            <h2>Geners</h2>
            <div className={styles.genresNames}>
              {film.genres
                ? film.genres.map((data) => (
                    <span key={data.id}>{data.name}</span>
                  ))
                : null}
            </div>
          </div>
          <div className={styles.parentalGuide}>
            <h2>Parental Guide</h2>
            <div className={styles.guideButtons}>
              {film.parentalData &&
                film.parentalData.map((data) => (
                  <button
                    onClick={handleClick}
                    key={data.label}
                    value={data.label}
                  >
                    {data.label}
                  </button>
                ))}
            </div>
            <div className={styles.guideDiscription}>
              <ol>{showGuide ? listContent(showGuide) : null}</ol>
            </div>
          </div>
          <div className={styles.similarMovies}>
            <h2>Similar Movies</h2>
            <div className={styles.similarMoviesCards}>
              {film.similarMovies &&
                film.similarMovies.map((data) => (
                  <Card data={data} key={data.id} />
                ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Movie;

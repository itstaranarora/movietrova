import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import styles from "./Explore.module.css";
import TinderCard from "react-tinder-card";
import { fetchTrendingMovies } from "../../api";
import ReactLoading from "react-loading";

function Explore(props) {
  const [movieList, setMovieList] = useState(null);
  useEffect(() => {
    fetchTrendingMovies().then((data) => setMovieList(data));
  }, []);

  return (
    <div className={styles.container}>
      <Navbar />
      <div className={styles.body}>
        {movieList ? (
          movieList.map((data) => (
            <TinderCard
              className={styles.swipe}
              key={data.id}
              onSwipe={(dir) =>
                dir === "up" && props.history.push(`/movie/${data.id}`)
              }
              preventSwipe={["down"]}
            >
              <div className={styles.card}>
                <img src={data.image} alt={data.title} />
              </div>
            </TinderCard>
          ))
        ) : (
          <ReactLoading type="spin" color="#89939c" />
        )}
      </div>
    </div>
  );
}

export default Explore;

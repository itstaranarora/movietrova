import React from 'react';
import styles from './Card.module.css';
import StarRatings from 'react-star-ratings';

const Card = ({ data }) => {

    const newrating = (data.vote_average / 2);
    return (
      <div className={styles.card}>
          <div className={styles.cardHeader}>
            <img src={data.image} alt={data.title}/>
          </div>
          <div className={styles.cardBody}>
            <div className={styles.info}>
              <span className={styles.flag}>{data.genre_name}</span>
              <span className={styles.date}>{data.release_date}</span>
            </div>
            <h3>{data.title}</h3>
            <p>{data.overview}</p>
            <div className={styles.cardFooter}>
              <button className={styles.button}>View More</button>
              <span>
                <StarRatings 
                  rating={newrating}
                  numberOfStars={5}
                  name="rating"
                  starRatedColor="rgb(25,109,182)"
                  starDimension="15px"
                  starSpacing="3px"
                />
              </span>
            </div>
          </div>
      </div>   
    );
}

export default Card;
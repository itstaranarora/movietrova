import React,{useEffect,useState} from 'react';
import styles from './Card.module.css';
import {getMovieGenre} from '../../api';

const Card = ({ data: { genre,title,image,overview,release_date,vote_average }}) => { 
    return (
      <div className={styles.card}>
          <div className={styles.cardHeader}>
            <img src={image} alt={title}/>
          </div>
          <div className={styles.cardBody}>
            <div className={styles.info}>
              <span className={styles.flag}>{}</span>
              <span className={styles.date}>{release_date}</span>
            </div>
            <h3>{title}</h3>
            <p>{overview}</p>
            <div className={styles.cardFooter}>
              <button className={styles.button}>View More</button>
              <span>{vote_average}</span>
            </div>
          </div>
      </div>   
    );
}

export default Card;
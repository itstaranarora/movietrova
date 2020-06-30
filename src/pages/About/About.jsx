import React from 'react'
import styles from './About.module.css';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';

const About = () => {
    return (
        <div className={styles.container}>
            <Navbar className={styles.navbar}/>
            <div className={styles.headingComponent}>
                <h1 className={styles.pageTitle}>About Movietrova</h1>
                <h2 className={styles.pageDiscription}>
                    Movietrova helps you find ratings and reviews for the newest Movie and TV shows.
                </h2>
            </div>
            <div className={styles.about}>
                <p>Hey! Its Taran Arora, I'm the developer of Movietrova. it helps you find rating for the lastest Movies and TV shows. This Web App is build using React and TheMovieDB Api</p>
            </div>
            <Footer className={styles.footer}/>
        </div>
    );
}

export default About;
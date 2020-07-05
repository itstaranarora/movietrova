import React from 'react'
import styles from './About.module.css';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';

const About = () => {
    return (
        <div className={styles.container}>
            <Navbar className={styles.navbar}/>
            <div className={styles.headingComponent}>
                <h1 className={styles.pageTitle}>About this site</h1>
                <h2 className={styles.pageDiscription}>
                    Movietrova helps you find ratings and parental guide for the newest Movie and TV shows.
                </h2>
            </div>
            <div className={styles.about}>
                <p>Lets Face it. It is becoming harder  </p>
            </div>
            <Footer className={styles.footer}/>
        </div>
    );
}

export default About;
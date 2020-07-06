import React from 'react';
import styles from './Footer.module.css';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className={styles.footer}>
            <Link to="/" className={styles.logo}> Movietrova </Link>
            <div className={styles.navContainer}>
                <Link className={styles.navLinks} to="/about">about</Link>
                <a href="https://www.linkedin.com/in/taran-arora/" className={styles.navLinks} >contact</a>
                <a href="https://github.com/itstaranarora" className={styles.navLinks} >github</a>
            </div>
            <span className={styles.credit}>Built with <span className="material-icons">favorite</span> by Taran Arora</span>
        </div>
    );
}

export default Footer;
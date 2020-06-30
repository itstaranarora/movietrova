import React from 'react';
import styles from './Footer.module.css';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className={styles.footer}>
            <Link to="/" className={styles.logo}> Movietrova </Link>
            <div className={styles.navContainer}>
                <Link className={styles.navLinks} to="/about">about</Link>
                <Link className={styles.navLinks} to="#">contact</Link>
                <Link className={styles.navLinks} to="#">github</Link>
            </div>
            <span className={styles.credit}>Made with <span className="material-icons">favorite</span> by Taran Arora</span>
        </div>
    );
}

export default Footer;
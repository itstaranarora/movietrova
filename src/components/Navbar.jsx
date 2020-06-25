import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';

const Navbar = () => {

  return (
    <nav className={styles.navbar}>
      <span className={styles.navbarToggle} onClick={() => document.getElementById('js-menu').classList.toggle(styles.active)}>
        <i className="material-icons">menu</i>
      </span>
      <Link to="/" className={styles.logo}>
        MovieFinder
      </Link>
      <ul className={styles.mainNav} id="js-menu">
        <li>
          <Link to="/" className={styles.navLinks}>
            home
          </Link>
        </li>
        <li>
          <Link to="/about" className={styles.navLinks}>
            about
          </Link>
        </li>
        <li>
          <Link to="/about" className={styles.navLinks}>
            github
          </Link>
        </li>
      </ul>
      <div className={styles.search}>
        <i className="material-icons">info</i>
      </div>
    </nav>
  );
};

export default Navbar;
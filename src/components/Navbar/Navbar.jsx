import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <span
        className={styles.navbarToggle}
        onClick={() =>
          document.getElementById("js-menu").classList.toggle(styles.active)
        }
      >
        <i className="material-icons">menu</i>
      </span>
      <NavLink exact to="/" className={styles.logo}>
        Movietrova
      </NavLink>
      <ul className={styles.mainNav} id="js-menu">
        <li>
          <NavLink
            exact
            to="/"
            activeClassName={styles.navLinksActive}
            className={styles.navLinks}
          >
            home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/explore"
            activeClassName={styles.navLinksActive}
            className={styles.navLinks}
          >
            trending
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about"
            activeClassName={styles.navLinksActive}
            className={styles.navLinks}
          >
            about
          </NavLink>
        </li>
      </ul>
      <div className={styles.search}>
        <i className="material-icons">
          <a href="https://github.com/itstaranarora/movietrova">code</a>
        </i>
      </div>
    </nav>
  );
};

export default Navbar;

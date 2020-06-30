import React from 'react'
import { Link } from 'react-router-dom';
import styles from './Error404.module.css';

const Error404 = () => {
    return(
        <div className={styles.container}>
            <h1>404</h1>
            <h3>Not Found</h3>
            <p>The resource requested could not be found on this server</p>
            <Link to="/">Home</Link>
        </div>
    );
}

export default Error404;
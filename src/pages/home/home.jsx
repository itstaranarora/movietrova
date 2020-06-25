import React,{useEffect,useState} from 'react';
import Navbar from '../../components/Navbar';
import styles from './home.module.css';
import { fetchPopulerMovies } from '../../api';
import Result from '../../components/Results/Result';

const Home = () => {

    const [state,setState] = useState({
        tranding: [],
    })

    useEffect(() => {
        fetchPopulerMovies().then(data => setState({tranding: data}))
      }, []);

    return(
        <div className={styles.container}>
            <Navbar className={styles.navbar}/>
            <div className={styles.headingComponent}>
                <h1 className={styles.pageTitle}>Discover New Movies</h1>
                <h2 className={styles.pageDiscription}>
                    Find ratings and reviews for the newest movie and TV shows.
                </h2>
                <input type="search" className={styles.searchBar} placeholder="Search"/>
            </div>
            <Result data={state.tranding}/>
        </div>
    );
}

export default Home;
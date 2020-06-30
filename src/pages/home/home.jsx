import React,{useEffect,useState} from 'react';
import Navbar from '../../components/Navbar/Navbar';
import styles from './home.module.css';
import { fetchPopulerMovies, fetchSearchResult } from '../../api';
import Result from '../../components/Results/Result';
import Footer from '../../components/Footer/Footer';

const Home = () => {

    const [state,setState] = useState({
        movies: [],
        search: "g",
    })

    useEffect(() => {
        fetchPopulerMovies().then(data => setState({movies: data}))
      }, []);
    

      const search = (e) => {
          if (e.key === "Enter"){
            fetchSearchResult(state.search).then(data => setState({...state,movies: data}))
          }
      }

    return(
        <div className={styles.container}>
            <Navbar className={styles.navbar}/>
            <div className={styles.headingComponent}>
                <h1 className={styles.pageTitle}>Discover New Movies</h1>
                <h2 className={styles.pageDiscription}>
                    Find ratings and reviews for the newest movie and TV shows.
                </h2>
                <input type="search" onChange={(e) => setState({...state,search: e.target.value})} onKeyPress={search} className={styles.searchBar} placeholder="Search"/>
            </div>
            <Result data={state.movies}/>
            <Footer className={styles.footer}/>
        </div>
    );
}

export default Home;
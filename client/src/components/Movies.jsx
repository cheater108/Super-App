import styles from "./Movies.module.css";
import { useEffect, useState } from "react";
import fetchMovies from "../api/fetchMovies";

function Movies({ genre }) {
    const [movies, setMovies] = useState([]);
    useEffect(() => {
        async function loadMovies() {
            setMovies(await fetchMovies(genre));
        }
        loadMovies();
    }, []);
    return (
        <div className={styles.movies}>
            <p>{genre}</p>
            <div className={styles.movies_container}>
                {movies.map(({ id, poster_path }) => (
                    <div key={id} className={styles.tile}>
                        <img
                            src={`http://image.tmdb.org/t/p/w780${poster_path}`}
                            alt=""
                            width="150px"
                        />{" "}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Movies;

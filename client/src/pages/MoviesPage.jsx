import SupperApp from "../components/SupperApp";
import styles from "./MoviesPage.module.css";
import avatar from "../assets/userAvatar-sm.png";
import { useEffect, useState } from "react";
import fetchMovies from "../utils/fetchMovies";

function MoviesPage() {
    const [movies, setMovies] = useState([]);
    useEffect(() => {
        async function loadMovies() {
            setMovies(await fetchMovies("Drama"));
        }
        loadMovies("Drama");
    }, []);
    return (
        <div className={styles.container}>
            <header className={styles.header}>
                <SupperApp size="2rem" />
                <img src={avatar} alt="" className={styles.avatar} />
            </header>
            <div className={styles.movies_container}>
                <h3>Entertainment according to your choice</h3>
                <div className={styles.movies}>
                    {movies.map(({ id, original_title, poster_path }) => (
                        <div key={id}>
                            {original_title}{" "}
                            <img
                                src={`http://image.tmdb.org/t/p/w300${poster_path}`}
                                alt=""
                                style={{ width: "100px" }}
                            />{" "}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default MoviesPage;

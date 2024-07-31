import SupperApp from "../components/SupperApp";
import styles from "./MoviesPage.module.css";
import avatar from "../assets/userAvatar-sm.png";
import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import Movies from "../components/Movies";

function MoviesPage() {
    const { selectedGenre } = useContext(AppContext);

    return (
        <div className={styles.container}>
            <header className={styles.header}>
                <SupperApp size="2rem" />
                <img src={avatar} alt="" className={styles.avatar} />
            </header>
            <div className={styles.movies_container}>
                <h3>Entertainment according to your choice</h3>
                {selectedGenre.map((genre) => (
                    <Movies key={genre} genre={genre} />
                ))}
            </div>
        </div>
    );
}

export default MoviesPage;

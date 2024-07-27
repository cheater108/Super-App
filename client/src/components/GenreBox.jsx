import styles from "./GenreBox.module.css";

function GenreBox({ genre, color, handleClick }) {
    return (
        <div
            className={styles.container}
            style={{ backgroundColor: color }}
            onClick={() => handleClick(genre)}
        >
            {genre}
        </div>
    );
}

export default GenreBox;

import styles from "./Note.module.css";

function Note() {
    return (
        <div className={styles.container}>
            <h1>All notes</h1>
            <textarea name="note" id="note" className={styles.note}></textarea>
        </div>
    );
}

export default Note;

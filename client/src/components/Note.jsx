import { useEffect, useRef } from "react";
import { getUserNote, saveUserNote } from "../utils/saveNote";
import styles from "./Note.module.css";

function Note() {
    const note = useRef(null);
    function handleChange() {
        const content = note.current.value;
        saveUserNote(content);
    }
    useEffect(() => {
        note.current.value = getUserNote();
    });
    return (
        <div className={styles.container}>
            <h1>All notes</h1>
            <textarea
                name="note"
                id="note"
                ref={note}
                className={styles.note}
                onChange={handleChange}
            ></textarea>
        </div>
    );
}

export default Note;

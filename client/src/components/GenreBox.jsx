import styles from "./GenreBox.module.css";
import { motion } from "framer-motion";
function GenreBox({ genre, color, handleClick }) {
    return (
        <motion.div
            className={styles.container}
            style={{ backgroundColor: color }}
            onClick={() => handleClick(genre)}
            animate={{ scale: 1 }}
            initial={{ scale: 0 }}
            transition={{ delay: 0.3 }}
        >
            {genre}
        </motion.div>
    );
}

export default GenreBox;

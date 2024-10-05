import React, { useContext, useState } from "react";
import styles from "./GenresPage.module.css";
import SupperApp from "../components/SupperApp";
import genres, { colors } from "../data/genres";
import GenreBox from "../components/GenreBox";
import { AppContext } from "../context/AppContext";
import { useNavigate } from "react-router-dom";
import saveGenres from "../utils/saveGenre";
import { AnimatePresence, motion } from "framer-motion";

function GenresPage() {
    const navigate = useNavigate();
    const { selectedGenre, setSelectedGenre } = useContext(AppContext);
    const [required, setRequired] = useState(false);
    function handleGenreClick(key) {
        if (selectedGenre.includes(key)) {
            setSelectedGenre(selectedGenre.filter((e) => key !== e));
        } else {
            setSelectedGenre([...selectedGenre, key]);
            if (required) {
                if (selectedGenre.length >= 2) setRequired(false);
            }
        }

        // console.log(selectedGenre);
    }

    function handleNext() {
        if (selectedGenre.length >= 3) {
            saveGenres(selectedGenre);
            navigate("/carousel");
        } else {
            setRequired(true);
        }
    }
    return (
        <motion.div
            className={styles.container}
            animate={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            exit={{ opacity: 0 }}
        >
            <div className={styles.left}>
                <SupperApp align="left" />
                <h1>Choose your entertainment category</h1>
                <div
                    className={styles.selected_list}
                    style={{ marginTop: "20px" }}
                >
                    <AnimatePresence>
                        {selectedGenre.map((ele) => (
                            <motion.div
                                layout
                                key={ele}
                                className={styles.selected}
                                onClick={() => handleGenreClick(ele)}
                                animate={{ scale: 1 }}
                                initial={{ scale: 0 }}
                                exit={{ scale: 0 }}
                            >
                                {ele} <span>&#x2716;</span>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>
                {required && (
                    <div className={styles.error}>
                        &#9888; &nbsp; Minimum 3 category required
                    </div>
                )}
            </div>
            <div className={styles.right} style={{ flex: "1" }}>
                <div className={styles.right_container}>
                    <div className={styles.movies_container}>
                        {genres.map((ele, ind) => (
                            <GenreBox
                                key={ind}
                                genre={ele}
                                color={colors[ind]}
                                handleClick={handleGenreClick}
                            />
                        ))}
                    </div>
                    <div>
                        <button className={styles.btn} onClick={handleNext}>
                            Next Page
                        </button>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}

export default GenresPage;

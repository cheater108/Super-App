import axios from "axios";
import { genres_code } from "../data/genres";

async function fetchMovies(genre = 28) {
    const genre_code = genres_code[genre];
    //console.log(genre_code);
    const {
        data: { results },
    } = await axios.get(
        `https://api.themoviedb.org/3/discover/movie?include_adult=true&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=${genre_code}`,
        {
            headers: {
                Authorization: `Bearer ${
                    import.meta.env.VITE_MOVIES_ACCESS_TOKEN
                }`,
                accept: "application/json",
            },
        }
    );
    return results;
}

export default fetchMovies;

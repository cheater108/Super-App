async function fetchMovieImage() {
    const data = await axios.get(`https://api.themoviedb.org/3${25}`, {
        headers: {
            Authorization: `Bearer ${import.meta.env.VITE_MOVIES_ACCESS_TOKEN}`,
            accept: "application/json",
        },
    });
}

function saveGenres(genres) {
    localStorage.setItem("selectedGenre", JSON.stringify(genres));
}

export default saveGenres;

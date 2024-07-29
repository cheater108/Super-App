import axios from "axios";

async function fetchNews() {
    if (localStorage.getItem("news")) {
        console.log("stored news from local storage");
        return JSON.parse(localStorage.getItem("news"));
    } else {
        console.log("no news stored making a call");
        const { data } = await axios.get("https://newsapi.org/v2/everything", {
            params: {
                apiKey: import.meta.env.VITE_NEWS_API_KEY,
                q: "India",
                pageSize: 40,
            },
        });
        localStorage.setItem("news", JSON.stringify(data));
        return data;
    }
}

export default fetchNews;

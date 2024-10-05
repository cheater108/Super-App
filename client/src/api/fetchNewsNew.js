import axios from "axios";

//new news api - https://www.thenewsapi.com/documentation
async function fetchNews() {
    if (localStorage.getItem("news")) {
        console.log("stored news from local storage");
        return JSON.parse(localStorage.getItem("news"));
    } else {
        console.log("no news stored making a call");
        const { data } = await axios.get(
            "https://api.thenewsapi.com/v1/news/top",
            {
                params: {
                    api_token: import.meta.env.VITE_NEW_NEWS_API_KEY,
                    q: "in",
                    limit: 3,
                },
            }
        );
        console.log("call made");
        // console.log(data);
        localStorage.setItem("news", JSON.stringify(data));
        return data;
    }
}

export default fetchNews;

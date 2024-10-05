import { useEffect, useState } from "react";
import styles from "./News.module.css";
import fetchNews from "../api/fetchNewsNew";

function News() {
    const [news, setNews] = useState({});
    useEffect(() => {
        async function loadNews() {
            const { data } = await fetchNews();
            // console.log(data);
            const randomNews = data[Math.floor(Math.random() * 3)];
            // console.log(randomNews);
            setNews(randomNews);
        }
        loadNews();
    }, []);

    function handleNewsClick(url) {
        window.open(url, "_blank").focus();
    }
    return (
        <div className={styles.container}>
            <div className={styles?.img_container}>
                <img src={news?.image_url} alt="" />
                <div className={styles.title_overlay}>
                    <p onClick={() => handleNewsClick(news?.url)}>
                        {news?.title}
                    </p>
                    <p>{news?.published_at}</p>
                </div>
            </div>
            <div className={styles.news}>
                <p>{news?.description}</p>
                <p>{news?.snippet}</p>
            </div>
        </div>
    );
}

export default News;

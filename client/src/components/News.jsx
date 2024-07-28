import { useEffect, useState } from "react";
import styles from "./News.module.css";
import fetchNews from "../api/fetchNews";

function News() {
    const [news, setNews] = useState({});
    useEffect(() => {
        async function loadNews() {
            const data = await fetchNews();
            // console.log(data);
            const randomNews = data.articles[Math.floor(Math.random() * 20)];
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
                <img src={news?.urlToImage} alt="" />
                <div className={styles.title_overlay}>
                    <p onClick={() => handleNewsClick(news?.url)}>
                        {news?.title}
                    </p>
                    <p>{news?.publishedAt}</p>
                </div>
            </div>
            <div className={styles.news}>
                <p>{news?.description}</p>
                <p>{news?.content}</p>
            </div>
        </div>
    );
}

export default News;

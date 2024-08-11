import { useContext } from "react";
import Account from "../components/Account";
import styles from "./CaraouselPage.module.css";
import { AppContext } from "../context/AppContext";
import Weather from "../components/Weather";
import News from "../components/News";
import { useNavigate } from "react-router-dom";

function CaraouselPage() {
    const navigate = useNavigate();
    const { user, selectedGenre } = useContext(AppContext);
    return (
        <>
            <div className={styles.container}>
                <div className={styles.cssportal_grid}>
                    <div className={styles.account}>
                        <Account
                            name={user?.name}
                            username={user?.username}
                            email={user?.email}
                            genres={selectedGenre}
                        />
                    </div>
                    <div className={styles.news}>
                        <News />
                    </div>
                    <div className={styles.weather}>
                        <Weather />
                    </div>
                </div>
            </div>
            <button
                className={styles.btn}
                onClick={() => navigate("/dashboard")}
            >
                Dashboard
            </button>
        </>
    );
}

export default CaraouselPage;

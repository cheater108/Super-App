import Account from "../components/Account";
import styles from "./Dashboard.module.css";
import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import News from "../components/News";
import { useNavigate } from "react-router-dom";
import Note from "../components/Note";
import Timer from "../components/Timer";
import Weather from "../components/Weather";

function Dashboard() {
    const navigate = useNavigate();
    const { user, selectedGenre } = useContext(AppContext);
    return (
        <>
            <div className={styles.container}>
                <div className={styles.div1}>
                    <Account
                        name={user?.name}
                        username={user?.username}
                        email={user?.email}
                        genres={selectedGenre}
                    />
                </div>
                <div className={styles.div2}>
                    <Weather />
                </div>
                <div className={styles.div3}>
                    <Timer />
                </div>
                <div className={styles.div4}>
                    <Note />
                </div>
                <div className={styles.div5}>
                    <News />
                </div>
            </div>
            <div>
                <button
                    className={styles.btn}
                    onClick={() => navigate("/movies")}
                >
                    Browse
                </button>
            </div>
        </>
    );
}

export default Dashboard;

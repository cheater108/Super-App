import styles from "./SupperApp.module.css";

function SupperApp({ align, size = "3rem" }) {
    return (
        <h1
            className={styles.logo}
            style={{ textAlign: align, fontSize: size }}
        >
            Supper app
        </h1>
    );
}

export default SupperApp;

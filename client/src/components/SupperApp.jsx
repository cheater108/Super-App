import styles from "./SupperApp.module.css";

function SupperApp({ align }) {
    return (
        <h1 className={styles.logo} style={{ textAlign: align }}>
            Supper app
        </h1>
    );
}

export default SupperApp;

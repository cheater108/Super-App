import { useContext, useState } from "react";
import Form from "../components/Form";
import styles from "./RegisterPage.module.css";
import { AppContext } from "../context/AppContext";

function RegisterPage() {
    const { user, setUser } = useContext(AppContext);

    return (
        <div className={styles.container}>
            <div className={styles.left}>
                <h1>Discover new things on Superapp</h1>
            </div>
            <div className={styles.right}>
                <div className={styles.right_container}>
                    <div className={styles.header}>
                        <h1>Supper app</h1>
                        <p>Create your new account</p>
                    </div>
                    <Form user={user} setUser={setUser} />
                    <div className={styles.footer}>
                        <p>
                            By clicking on Sign up. you agree to Superapp{" "}
                            <span>Terms and Conditions of Use</span>
                        </p>
                        <p>
                            To learn more about how Superapp collects, uses,
                            shares and protects your personal data please head
                            Superapp <span>Privacy Policy</span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default RegisterPage;

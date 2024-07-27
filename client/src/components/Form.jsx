import { useState } from "react";

import styles from "./Form.module.css";
import validateForm from "../utils/validateForm";
import { useNavigate } from "react-router-dom";

function Form({ user, setUser }) {
    console.log(user);
    const navigate = useNavigate();
    const [error, setError] = useState({
        name: false,
        username: false,
        email: false,
        phone: false,
        consent: false,
    });

    function validate(e) {
        e.preventDefault();
        const res = validateForm(user);
        console.log(res);
        if (res.valid) {
            navigate("/genres");
        } else {
            setError(res.error);
        }
    }

    return (
        <form action="#" className={styles.form}>
            <input
                type="text"
                name="name"
                placeholder="name"
                className={error.name ? "error_input" : "none"}
                value={user.name}
                onChange={(e) =>
                    setUser({ ...user, [e.target.name]: e.target.value })
                }
            />
            {error.name && <p className={styles.error}>Field is required</p>}
            <input
                type="text"
                name="username"
                placeholder="username"
                className={error.username ? "error_input" : "none"}
                value={user.username}
                onChange={(e) =>
                    setUser({ ...user, [e.target.name]: e.target.value })
                }
            />
            {error.username && (
                <p className={styles.error}>Field is required</p>
            )}
            <input
                type="text"
                name="email"
                placeholder="email"
                className={error.email ? "error_input" : "none"}
                value={user.email}
                onChange={(e) =>
                    setUser({ ...user, [e.target.name]: e.target.value })
                }
            />
            {error.email && <p className={styles.error}>Field is required</p>}
            <input
                type="text"
                name="phone"
                placeholder="phone"
                className={error.phone ? "error_input" : "none"}
                value={user.phone}
                onChange={(e) =>
                    setUser({ ...user, [e.target.name]: e.target.value })
                }
            />
            {error.phone && <p className={styles.error}>Field is required</p>}
            <div>
                <input
                    type="checkbox"
                    id="data"
                    name="consent"
                    checked={user.consent}
                    onChange={(e) =>
                        setUser({ ...user, [e.target.name]: e.target.checked })
                    }
                />
                <label htmlFor="data" style={{ marginLeft: "5px" }}>
                    Share my registration data with Superapp
                </label>
            </div>
            {error.consent && <p className={styles.error}>Field is required</p>}
            <button onClick={validate}>SIGN UP</button>
        </form>
    );
}

export default Form;

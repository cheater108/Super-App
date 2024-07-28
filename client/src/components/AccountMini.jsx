import React from "react";
import avatar from "../assets/userAvatar.png";
import styles from "./AccountMini.module.css";

function AccountMini({ name, username, email, genres }) {
    return (
        <div className={styles.container}>
            <div>
                <img src={avatar} alt="" />
            </div>
            <div className={styles.details}>
                <p>{name}</p>
                <p>{email}</p>
                <h1>{username}</h1>
                <div className={styles.genres}>
                    {genres.map((gen) => (
                        <div key={gen} className={styles.genre}>
                            {gen}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default AccountMini;

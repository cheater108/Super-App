import styles from "./Form.module.css";

function Form() {
    return (
        <form action="#" className={styles.form}>
            <input type="text" name="name" placeholder="name" />
            <input type="text" name="username" placeholder="username" />
            <input type="text" name="email" placeholder="email" />
            <input type="text" name="phone" placeholder="phone" />
            <div>
                <input type="checkbox" id="data" name="datashare" />
                <label htmlFor="data" style={{ marginLeft: "5px" }}>
                    Share my registration data with Superapp
                </label>
            </div>
            <button>SIGN UP</button>
        </form>
    );
}

export default Form;

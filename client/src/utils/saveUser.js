import validateForm from "./validateForm";

function saveUser(user) {
    const { valid } = validateForm(user);
    if (valid) localStorage.setItem("user", JSON.stringify(user));
}

export default saveUser;

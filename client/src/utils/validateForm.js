function validateForm({ name, email, username, phone, consent }) {
    const email_regex = /^[A-Za-z0-9\._+\-]+@[A-Za-z0-9\.\-]+\.[A-Za-z]{2,}$/;
    const phone_regex = /[0-9]{10}/;
    const username_regex = /^[A-Za-z0-9\._-]+$/;
    const name_regex = /[A-za-z]{1,}/;

    let valid = true;
    let error = {
        name: false,
        email: false,
        username: false,
        phone: false,
        consent: false,
    };

    if (!name || !email || !username || !phone || !consent) {
        // console.log("here 1");
        valid = false;
    }
    error.name = !name_regex.test(name);
    error.email = !email_regex.test(email);
    error.username = !username_regex.test(username);
    error.phone = !phone_regex.test(phone);
    error.consent = !consent;

    for (let prop in error) {
        if (error[prop]) {
            valid = false;
        }
    }

    return { valid, error };
}

export default validateForm;

const personName = document.getElementById("name");
const email = document.getElementById("email");
const subject = document.getElementById("subject");
const message = document.getElementById("message");
const submitButton = document.getElementById("submit");

const inputEmpty = () => {
    if (personName.value.trim() === "") {
        alert("Please enter your name in the appropriate input box.");
        return false;
    }

    if (email.value.trim() === "") {
        alert("Please enter your email address in the appropriate input box.");
        return false;
    }

    if (subject.value.trim() === "") {
        alert("Please enter your message subject in the appropriate input box.");
        return false;
    }

    if (message.value.trim() === "") {
        alert("Please enter your message in the appropriate input box.");
        return false;
    }

    return true;
}

const emailValid = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.value.trim())) {
        alert("Please enter a valid email address.");
        return false;
    }

    return true;
}


submitButton.addEventListener("click", function(event) {
    if (inputEmpty() && emailValid()) {
        alert("Almost there!");
    } else {
        event.preventDefault();
    }
});

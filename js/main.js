const pass = process.env.Password;

function sendEmail() {
    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "wianvanniekerk@protonmail.com",
        Password : pass,
        To : 'wianvanniekerk@protonmail.com',
        From: 'wianvanniekerk@protonmail.com',
        Body : document.getElementById("email").value,
        Subject : document.getElementById("subject").value,
        Body : "Name: " + document.getElementById("body").value +
                "<br> Body: " + document.getElementById("body").value
    }).then(
      message => alert(message)
    );
}
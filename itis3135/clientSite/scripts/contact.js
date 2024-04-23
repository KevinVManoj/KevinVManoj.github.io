const form = document.querySelector('form');
const name = document.getElementById('name');
const email = document.getElementById('email');
const subject = document.getElementById('subject');
const message = document.getElementById('message');

function sendEmail() {
    const bodyMessage = `Full Name: ${name.value}<br> Email: ${email.value}<br> Message: ${message.value}`;

    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "kmanoj@charlotte.edu",
        Password : "A29EE6FA5B5A2F2C8A8FB5D52CC7B0B5A9B9",
        To : 'kmanoj@charlotte.edu',
        From : "kmanoj@charlotte.edu",
        Subject : subject.value,
        Body : bodyMessage
    }).then(
      message => alert(message)
    );
}

form.addEventListener("submit", (e) => {
    e.preventDefault();
    sendEmail();
})
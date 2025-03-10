// Selecting form elements from the DOM
const form = document.querySelector('form');
const name = document.getElementById('name');
const email = document.getElementById('email');
const subject = document.getElementById('subject');
const message = document.getElementById('message');

// Function to send an email when the form is submitted
function sendEmail() {
    // Constructing the email body with user inputs
    const bodyMessage = `Full Name: ${name.value}<br> Email: ${email.value}<br> Message: ${message.value}`;

    // Using EmailJS to send the email via SMTP
    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "kmanoj@charlotte.edu",
        Password : "A29EE6FA5B5A2F2C8A8FB5D52CC7B0B5A9B9",
        To : 'kmanoj@charlotte.edu',
        From : "kmanoj@charlotte.edu",
        Subject : subject.value,
        Body : bodyMessage
    }).then(
      message => alert(message) // Displaying the result of the email sending operation in an alert
    );
}

// Adding event listener for the form submit event
form.addEventListener("submit", (e) => {
    e.preventDefault(); // Preventing the default form submission behavior
    sendEmail(); // Calling the sendEmail function
})

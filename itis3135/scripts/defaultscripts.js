
function fullDateTime() {
    var now = new Date();
    var hours = now.getHours();
    var midday = hours >= 12 ? 'PM' : "AM";
    hours = hours % 12 || 12;
    var minutes = now.getMinutes();
    var seconds = now.getSeconds();
    var fullTime = `${hours}:${minutes}:${seconds} ${midday}`;

    document.getElementById('datetime').innerHTML = `Today is ${fullTime} on ${now.toDateString()}`;
}
setInterval(fullDateTime, 1000);

var userName = document.getElementById('userName');
var userMood = document.getElementById('userMood');
function userGreeting() {

    document.getElementById('siteResponse').innerHTML = `Welcome ${userName.value} to my website, you are currently feeling ${userMood.value}`;
}
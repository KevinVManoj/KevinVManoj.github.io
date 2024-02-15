
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

function printAlphabetAlot() {
    var numberTimes = document.getElementById('numberAlphabet').value;
  
    if (numberTimes !== "" && !isNaN(numberTimes)) {
      var alphabetRepetitions = document.getElementById('alphabetRepitions');
      alphabetRepetitions.innerText = "";
  
      for (let x = 0; x < Number(numberTimes); x++) {
        alphabetRepetitions.innerText += "abcdefghijklmnopqrstuvwxyz \n";
      }
    } else {
      alert("Please input a valid number");
      return;
    }
  }


  function randomYoutubeLink() {
    var inputNumber = document.getElementById('randomYoutube').value;
    var linkParagraph = document.getElementById('randomLink');

    if (inputNumber === '1') {
      linkParagraph.innerText = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ';
    } else if (inputNumber === '2') {
      linkParagraph.innerText = 'https://www.youtube.com/watch?v=jNQXAC9IVRw';
    } else if (inputNumber === '3') {
      linkParagraph.innerText = 'https://www.youtube.com/watch?v=AKJfakEsgy0';
    } else {
      linkParagraph.innerText = 'Invalid input. Please enter 1, 2, or 3.';
    }
  }

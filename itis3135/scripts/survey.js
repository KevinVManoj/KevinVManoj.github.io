const courses = document.getElementById("coursesTaking");
const coursesInput = document.getElementById("coursesInput");
const coursesButton = document.getElementById("coursesButtons");
var count = 0;

courses.addEventListener("click", () => {
    instantiateDelete();
    var newInput = document.createElement('input');
    newInput.type = 'text';
    newInput.id = 'coursesUserTaken';
    newInput.className = 'coursesUserTaken';
    coursesInput.appendChild(newInput);
    count++;
})

function instantiateDelete() {
    if (!document.getElementById('deleteButton') && count >= 1) {
        var deleteButton = document.createElement('input');
        deleteButton.type = 'button';
        deleteButton.id = 'deleteButton';
        deleteButton.className = 'deleteButton';
        deleteButton.value = 'Delete';
        coursesButton.appendChild(deleteButton);

        deleteButton.addEventListener("click", () => {
            if (coursesInput.lastChild) {
                coursesInput.removeChild(coursesInput.lastChild);
                count--; 
                if (count === 0) {
                    deleteButton.remove();
                }
            }
        });
    }    
}

const fName = document.getElementById("fName");
const mascot = document.getElementById("mascot");
const image = document.getElementById("image");
const imageCaption = document.getElementById("imageCaption");
const personalBackground = document.getElementById("personalBackground");
const professionalBackground = document.getElementById("professionalBackground");
const academicBackground = document.getElementById("academicBackground");
const backgroundDevelopment = document.getElementById("backgroundDevelopment");
const primaryComputer = document.getElementById("primaryComputer");
const funnyThing = document.getElementById("funnyThing");
const anythingElse = document.getElementById("anythingElse");
const submit = document.getElementById("submit");
const reset = document.getElementById("reset");
const introBox = document.getElementById("Introduction");

submit.addEventListener("click", () => {
    introBox.innerHTML += '<h2>Introduction</h2>';
    introBox.innerHTML += `
    <h2> ${fName} || ${mascot}</h2>
    <figure>
        <img src="${image}">
        <figcaption>${imageCaption}</figcaption>
        <figcaption>${fName}</figcaption>
    </figure>
        <ol>
            <li><b>Personal Background:</b> ${personalBackground}</li>
            <li><b>Professional Background:</b>  ${professionalBackground}</li>
            <li><b>Academic Background:</b> ${academicBackground}</li>
            <li><b>Background in this Subject:</b> ${backgroundDevelopment}</li>
            <li><b>Primary Computer Platform:</b>  ${primaryComputer}</li>
            <li><b>Courses I'm Taking & Why:</b>
                <ul>
                    <li class="aids"><b>ITCS 3155 Software Engineering:</b> Wants to learn new skills, frameworks, and tools to better chances at an internship</li>
                    <li class="aids"><b>ITCS 3200 Intro To Info Security and Priv:</b> I am trying to get into the cybersecurity field so this is my first step</li>
                    <li class="aids"><b>ITSC 3135 Web-Based Application Design & Development:</b> Want to learn how to make my portfolio and maybe an app in the future</li>
                    <li class="aids"><b>ITSC 3688 Computers and their impact on society:</b> I want to try and speak in front of people and get better public speaking skills</li>
                    <li class="aids"><b>ANTH 1101 Intro to Anthropology:</b> honestly I just wanted an easy class lol</li>
                </ul>
            <li><b>Funny/Interesting Item to Remember me by:</b> I once won a squishmellow via lottery</li> 
            <li><b>I'd also like to Share:</b>  trying to play some lethal company and CS so add me on Steam “Vivamus” I have the V pfp</li>
        </ol>
    `;
}) 


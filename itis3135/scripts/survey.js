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

function createIntro() {
    <h2>Introduction</h2>
        <h2>Kevin Manoj || Keen Monkey</h2>
        <figure>
            <img src="data:image/jpeg;base64,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" alt="Cayde-6 Duck">
            <figcaption></figcaption>
            <figcaption>Kevin Manoj</figcaption>
        </figure>
        <ol>
            <li><b>Personal Background:</b> Born in the UK, Manchester, and lived in Morrisville, NC for most of my life</li>
            <li><b>Professional Background:</b> Working as tech support for Belk</li>
            <li><b>Academic Background:</b> Graduated from TMSA in 2022, currently studying computer science with a cybersecurity concentration</li>
            <li><b>Background in this Subject:</b> Tried making a website but failed. Has coded a little bit.</li>
            <li><b>Primary Computer Platform:</b> Uses an HP laptop but trying to use a new PC more</li>
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
}


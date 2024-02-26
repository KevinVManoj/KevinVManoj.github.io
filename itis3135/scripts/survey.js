const coursesInput = document.getElementById("coursesInput");
const coursesButton = document.getElementById("coursesButtons");
const coursesTaking = document.getElementById("coursesTaking");
var count = 0;

coursesTaking.addEventListener("click", addCourseInput); 

function addCourseInput() {
    instantiateDelete();
    var newInput = document.createElement('input');
    newInput.type = 'text';
    newInput.id = 'coursesUserTaken';
    newInput.className = 'coursesUserTaken';
    coursesInput.appendChild(newInput);
    var lineBreak = document.createElement('br');
    coursesInput.appendChild(lineBreak);
    count++;
}

function instantiateDelete() {
    if (!document.getElementById('deleteButton') && count >= 1) {
        var deleteButton = document.createElement('input');
        deleteButton.type = 'button';
        deleteButton.id = 'deleteButton';
        deleteButton.className = 'deleteButton';
        deleteButton.value = 'Delete';
        coursesButton.appendChild(deleteButton);
        var spacing = document.createElement('br');
        coursesButton.appendChild(spacing);

        deleteButton.addEventListener("click", () => {
            if (coursesInput.lastChild) {
                coursesInput.removeChild(coursesInput.lastChild);
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
const introBox = document.getElementById("introduction");
const form = document.getElementById("form");
const resetAgain = document.getElementById("resetAgain");

    form.addEventListener("submit", function(event) {
        event.preventDefault();
        const courseListHTML = displayCourses();

        var imageLoad = image.files[0];
        const imageURL = URL.createObjectURL(imageLoad);
        var text = "<img src=\"" + imageURL + "\" >";
        
        introBox.innerHTML = '';
        introBox.innerHTML = `
        <h2>Introduction</h2>
        <h2> ${fName.value} || ${mascot.value}</h2>
        <figure>
            ${text}
            <figcaption>${imageCaption.value}</figcaption>
        </figure>
            <ol>
                <li><b>Personal Background:</b> ${personalBackground.value}</li>
                <li><b>Professional Background:</b>  ${professionalBackground.value}</li>
                <li><b>Academic Background:</b> ${academicBackground.value}</li>
                <li><b>Background in this Subject:</b> ${backgroundDevelopment.value}</li>
                <li><b>Primary Computer Platform:</b>  ${primaryComputer.value}</li>
                <li><b>Courses I'm Taking & Why:</b>
                    <ul>
                        ${courseListHTML}
                    </ul>
                </li>
                <li><b>Funny/Interesting Item to Remember me by:</b> ${funnyThing.value}</li> 
                <li><b>I'd also like to Share:</b> ${anythingElse.value}</li>
            </ol>
            <button onClick="window.location.href=window.location.href">Refresh Page</button>
        `;
    });
    
    function displayCourses() {
        let coursesListHTML = ''; 
        for(let x = 0; x < coursesInput.children.length-1; x++) {
            coursesListHTML += `<li>${coursesInput.children[x].value}</li>`;
        }
        return coursesListHTML;
    }
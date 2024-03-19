const names = [];
const salaries = [];
const form = document.getElementById("form");
const table = document.getElementById("results_table");
const submit = document.getElementById("tableSubmit");
const nameArray = document.getElementById('nameArray');
const salary = document.getElementById("salaryArray");
const namesList = document.getElementById("namesList");
const salaryEdit = document.getElementById("salaryEdit");
const editSubmit = document.getElementById("editSubmit");
const average = document.getElementById("average");
const highest = document.getElementById("highest");


nameArray.focus();

submit.addEventListener("click", function(event) {
    event.preventDefault(); 
    const nameSubmit = nameArray.value; 
    const salarySubmit = salary.value; 
    
    if(nameSubmit && salarySubmit){
        addSalary(nameSubmit, salarySubmit);
        displaySalary();
        document.getElementById("nameArray").value = "";
        document.getElementById("salaryArray").value = "";
    
        let dropdownAddition = `<option value="${nameSubmit}">${nameSubmit}</option>`;
        namesList.innerHTML += dropdownAddition;
        displayResults();
    } else{
        alert("Fill in both text boxes");
    }
});

editSubmit.addEventListener("click", function(event) {
    event.preventDefault(); 
    modifySalary();
});

function addSalary(name, salary) {
    names.push(name);
    salaries.push(parseFloat(salary));
}

function displaySalary() {
    let tableContent = 
    `<tr>
        <th>Name</th>
        <th>Salary</th>
    </tr>`;
    for(let x = 0; x < names.length; x++){
        let nameLoop = names[x];
        let salaryLoop = salaries[x];
        tableContent += 
        `<tr>
            <td>${nameLoop}</td>
            <td>${salaryLoop}</td>
        </tr>`;
    }
    table.innerHTML = tableContent;
}

function modifySalary() {
    const selectedName = namesList.value;
    const newSalary = salaryEdit.value;

    const index = names.findIndex(name => name === selectedName);

    salaries[index] = newSalary;
    displaySalary();
    salaryEdit.value = "";
}

function displayResults() {
    let highestV = 0;
    let averageV = 0;
    for(let x = 0; x < salaries.length; x++){
        if(salaries[x] > highestV){
            highestV = salaries[x];
        }
        averageV = averageV + salaries[x];
    }
    averageV = averageV/salaries.length;
    highest.innerHTML = `Highest: ${highestV}`;
    average.innerHTML = `Average: ${averageV}`;
}


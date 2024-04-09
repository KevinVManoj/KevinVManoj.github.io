document.addEventListener("DOMContentLoaded", function() {
    loadDynamicContent("scripts/header.json", "dynamic-header");
    loadDynamicContent("scripts/footer.json", "dynamic-footer");
    loadDynamicContent("scripts/Crap.json", "dynamic-crap");

    function loadDynamicContent(jsonFilePath, containerId) {
        fetch(jsonFilePath)
            .then(response => response.json())
            .then(data => {
                const container = document.getElementById(containerId);

                if(containerId === "dynamic-header") {
                    const headerTitle = document.createElement('h1');
                    headerTitle.innerHTML = "Kevin Manoj 🐒 Keen Monkey ITIS-3135";
                    container.appendChild(headerTitle);
                }

                let isFirstItem = true;

                data.forEach(item => {
                    if (["Manoj Aperature Inc.", "Certified in RWD", "Certified in JS"].includes(item.name)) {
                        return; 
                    } else if(["Valid HTML!", "Valid CSS!", "Valid Disability/Accessibility Design!"].includes(item.name)) {
                        return;
                    }

                    if (item.name === "About Quote") {
                        addBreaksAndContent(container, item.quote, item.url);
                    } else {
                        if (!isFirstItem && containerId !== "dynamic-crap") {
                            container.appendChild(document.createTextNode(" 🐒 "));
                        } else {
                            isFirstItem = false;
                        }

                        const linkElement = document.createElement("a");
                        linkElement.href = item.url;
                        linkElement.textContent = item.name;
                        container.appendChild(linkElement);
                    }
                });

                if (containerId === "dynamic-footer") {
                    addDesignedBySection(container);
                    addButtons(container);
                }
            })
            .catch(error => console.error(`Error fetching data from ${jsonFilePath}:`, error));
    }

    function addBreaksAndContent(container, text, url) {
        const br = document.createElement("br");
        container.appendChild(br.cloneNode()); 
        container.appendChild(br.cloneNode()); 
        const quoteElement = document.createElement("a");
        quoteElement.textContent = text;
        quoteElement.href = url;
        container.appendChild(quoteElement);
        container.appendChild(br.cloneNode()); 
    }

    function addDesignedBySection(container) {
        const designedByText = document.createElement("p");
        designedByText.innerHTML = `Designed by <a href="http://ManojAperatureInc.com/">Manoj Aperature Inc.</a>, <a href="https://www.freecodecamp.org/certification/KevinVManoj/responsive-web-design">Certified in RWD</a>, <a href="https://www.freecodecamp.org/certification/KevinVManoj/javascript-algorithms-and-data-structures-v8">Certified in JS</a>`;
        container.appendChild(designedByText);
    }

    function addButtons(container) {
        const htmlValidationLink = document.createElement("a");
        htmlValidationLink.href = "https://validator.w3.org/check?uri=" + location.href;
        htmlValidationLink.id = "validation_link_html";
        const htmlValidationImg = document.createElement("img");
        htmlValidationImg.style = "border:0;width:88px;height:31px;margin:auto; display: flex;";
        htmlValidationImg.src = "https://mytienhoang.github.io/itis3135/z_archives/html_validation.png";
        htmlValidationImg.alt = "Valid HTML!";
        htmlValidationLink.appendChild(htmlValidationImg);
        container.appendChild(htmlValidationLink);

        const cssValidationLink = document.createElement("a");
        cssValidationLink.href = "https://jigsaw.w3.org/css-validator/validator?uri=" + location.href;
        cssValidationLink.id = "validation_link_css";
        const cssValidationImg = document.createElement("img");
        cssValidationImg.style = "border:0;width:88px;height:31px;margin:auto; display: flex;";
        cssValidationImg.src = "https://jigsaw.w3.org/css-validator/images/vcss";
        cssValidationImg.alt = "Valid CSS!";
        cssValidationLink.appendChild(cssValidationImg);
        container.appendChild(cssValidationLink);

        const disabilityValidationLink = document.createElement("a");
        disabilityValidationLink.href = "https://wave.webaim.org/report#/" + location.href;
        disabilityValidationLink.id = "validation_link_disability";
        const disabilityValidationImg = document.createElement("img");
        disabilityValidationImg.style = "border:0;width:88px;height:31px;margin:auto; display: flex;";
        disabilityValidationImg.src = "Images/Valid.png"; 
        disabilityValidationImg.alt = "Valid Disability/Accessibility Design!";
        disabilityValidationLink.appendChild(disabilityValidationImg);
        container.appendChild(disabilityValidationLink);
    }
});



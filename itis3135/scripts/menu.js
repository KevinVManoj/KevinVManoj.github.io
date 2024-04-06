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
                    // Directly setting the h1 tag as part of the container's content
                    const headerTitle = document.createElement('h1');
                    headerTitle.innerHTML = "Kevin Manoj 🐒 Keen Monkey ITIS-3135";
                    container.appendChild(headerTitle);
                }

                let isFirstItem = true; // Adjusted logic to use isFirstItem for initial item check

                data.forEach(item => {
                    // Skip specific items that are added manually later
                    if (["Manoj Aperature Inc.", "Certified in RWD", "Certified in JS"].includes(item.name)) {
                        return; // Skip adding these items here
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
        container.appendChild(br.cloneNode()); // Add extra spacing above
        const quoteElement = document.createElement("a");
        quoteElement.textContent = text;
        quoteElement.href = url;
        container.appendChild(quoteElement);
        container.appendChild(br.cloneNode()); // Add extra spacing below
    }

    function addDesignedBySection(container) {
        const designedByText = document.createElement("p");
        designedByText.innerHTML = `Designed by <a href="http://ManojAperatureInc.com/">Manoj Aperature Inc.</a>, <a href="https://www.freecodecamp.org/certification/KevinVManoj/responsive-web-design">Certified in RWD</a>, <a href="https://www.freecodecamp.org/certification/KevinVManoj/javascript-algorithms-and-data-structures-v8">Certified in JS</a>`;
        container.appendChild(designedByText);
    }

    function addButtons(container) {
        const buttonsMade1 = document.createElement("a");
        buttonsMade1.innerHTML = `<img style="border:0;width:88px;height:31px;margin:auto; display: flex;" src="https://mytienhoang.github.io/itis3135/z_archives/html_validation.png" alt="Valid HTML!">`;
    }
});





function validateHTML() {
    const currentURL = encodeURIComponent(window.location.href);
    window.open(`https://validator.w3.org/nu/?doc=${currentURL}`, "_blank");
}

function validateCSS() {
    const currentURL = encodeURIComponent(window.location.href);
    window.open(`https://jigsaw.w3.org/css-validator/validator?uri=${currentURL}&profile=css3svg&usermedium=all&warning=1&vextwarning=&lang=en`, "_blank");
}

function validateAIM() {
    const currentURL = encodeURIComponent(window.location.href);
    window.open("https://webaim.org/search/?q=" + currentURL, "_blank");
}

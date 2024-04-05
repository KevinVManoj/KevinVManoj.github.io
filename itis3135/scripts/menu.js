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
                    container.innerHTML = `<h1>Kevin Manoj 🐒 Keen Monkey ITIS-3135</h1>` + container.innerHTML;
                }
                
                const fragment = document.createDocumentFragment();
                let needSeparator = false; // Initially, no separator is needed
                let isFirstValidationLink = true; // Track the first validation link

                data.forEach(item => {
                    // Skip specific items to be added manually later
                    if (["Manoj Aperature Inc.", "Certified in RWD", "Certified in JS"].includes(item.name)) {
                        return; // Skip adding these items here
                    }

                    if (item.name === "About Quote") {
                        const br = document.createElement("br");
                        fragment.appendChild(br);
                        fragment.appendChild(br.cloneNode());
                        const quoteElement = document.createElement("a");
                        quoteElement.textContent = item.quote;
                        quoteElement.href = item.url;
                        fragment.appendChild(quoteElement);
                        fragment.appendChild(br.cloneNode());
                        fragment.appendChild(br.cloneNode());
                    } else {
                        if (needSeparator && !(containerId === "dynamic-footer" && isFirstValidationLink)) {
                            fragment.appendChild(document.createTextNode(" 🐒 "));
                        } else {
                            needSeparator = true; // After the first item, separators are needed
                        }

                        const linkElement = document.createElement("a");
                        linkElement.href = item.url;
                        linkElement.textContent = item.name;
                        fragment.appendChild(linkElement);

                        // After appending the first validation link, ensure the flag is set to false
                        if (containerId === "dynamic-footer" && ["Valid HTML!", "Valid CSS!", "Valid Disability/Accessibility Design!"].includes(item.name)) {
                            isFirstValidationLink = false;
                        }
                    }
                });

                container.appendChild(fragment);

                // Add the "Designed by..." part only to the footer
                if (containerId === "dynamic-footer") {
                    const designedByText = document.createElement("p");
                    designedByText.innerHTML = `Designed by <a href="http://ManojAperatureInc.com/">Manoj Aperature Inc.</a>, <a href="https://www.freecodecamp.org/certification/KevinVManoj/responsive-web-design">Certified in RWD</a>, <a href="https://www.freecodecamp.org/certification/KevinVManoj/javascript-algorithms-and-data-structures-v8">Certified in JS</a>`;
                    container.appendChild(designedByText);
                }
            })
            .catch(error => console.error(`Error fetching data from ${jsonFilePath}:`, error));
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

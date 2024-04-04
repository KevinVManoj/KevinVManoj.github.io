document.addEventListener("DOMContentLoaded", function() {
    loadDynamicContent("scripts/header.json", "dynamic-header");
    loadDynamicContent("scripts/footer.json", "dynamic-footer");
    loadDynamicContent("scripts/Crap.json", "dynamic-crap");

    function loadDynamicContent(jsonFilePath, containerId) {
        fetch(jsonFilePath)
            .then(response => response.json())
            .then(data => {
                const container = document.getElementById(containerId);
                let addedSeparator = false; // Track if the separator was added for the current item

                if(containerId === "dynamic-header") {
                    container.innerHTML += `<h1>Kevin Manoj 🐒 Keen Monkey ITIS-3135</h1>`;
                }
                
                const navElement = document.createElement("nav");
                container.appendChild(navElement);

                data.forEach((item, index) => {
                    if (item.name === "About Quote") {
                        // Handle the "About Quote" differently to ensure spacing
                        if (addedSeparator) {
                            navElement.appendChild(document.createElement("br")); // Add space before the quote
                        }
                        const quoteElement = document.createElement("a");
                        quoteElement.textContent = item.quote;
                        quoteElement.href = item.url;
                        navElement.appendChild(quoteElement);
                        navElement.appendChild(document.createElement("br")); // Add space after the quote
                        navElement.appendChild(document.createElement("br"));
                        addedSeparator = false; // Reset the separator flag
                    } else {
                        // Add a separator before the current item if it's not the first item
                        if (addedSeparator) {
                            navElement.appendChild(document.createTextNode(" 🐒 "));
                        } else {
                            addedSeparator = true; // Mark that the next item will need a separator before it
                        }
                        const linkElement = document.createElement("a");
                        linkElement.href = item.url;
                        linkElement.textContent = item.name;
                        navElement.appendChild(linkElement);
                    }
                });
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

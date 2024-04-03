document.addEventListener("DOMContentLoaded", function() {
    loadDynamicContent("scripts/header.json", "dynamic-header");
    loadDynamicContent("scripts/footer.json", "dynamic-footer");
    loadDynamicContent("scripts/Crap.json", "dynamic-crap");

    function loadDynamicContent(jsonFilePath, containerId) {
        fetch(jsonFilePath)
            .then(response => response.json())
            .then(data => {
                const container = document.getElementById(containerId);
                container.innerHTML += `<nav>`;
                data.forEach(item => {
                    const linkElement = document.createElement("a");
                    linkElement.href = item.url;
                    linkElement.textContent = item.name;
                    container.appendChild(linkElement);
                    if (containerId !== "dynamic-crap") {
                        container.appendChild(document.createTextNode(" 🐒 "));
                    }
                });
                container.innerHTML += `</nav>`;
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

document.addEventListener("DOMContentLoaded", function () {
    "use strict";

    const searchInput = document.getElementById("produceSearch");
    const productGrid = document.querySelector(".grid-container");

    
    if (!searchInput || !productGrid) {
        return;
    }

    const productCards = productGrid.querySelectorAll(".product-card-item, .produce-card");
   
    const noResults = document.createElement("p");
    noResults.textContent = "No matching farm produce found. Try another search.";
    noResults.style.textAlign = "center";
    noResults.style.color = "#5c4033";
    noResults.style.fontWeight = "bold";
    noResults.style.marginTop = "2rem";
    noResults.style.display = "none";
    noResults.setAttribute("role", "status");
    noResults.setAttribute("aria-live", "polite");

    productGrid.insertAdjacentElement("afterend", noResults);


    searchInput.addEventListener("input", function () {
        const searchTerm = searchInput.value.trim().toLowerCase();
        let visibleProducts = 0;

        productCards.forEach(function (card) {
            const productName = card.querySelector("h3");
            const productDescription = card.querySelector("p");

            const name = productName
                ? productName.textContent.toLowerCase()
                : "";

            const description = productDescription
                ? productDescription.textContent.toLowerCase()
                : "";

            const matches =
                name.includes(searchTerm) ||
                description.includes(searchTerm);

            if (matches) {
                card.style.display = "";
                card.style.opacity = "1";
                visibleProducts++;
            } else {
                card.style.display = "none";
                card.style.opacity = "0";
            }
        });

       
        noResults.style.display = visibleProducts === 0 ? "block" : "none";
    });

    searchInput.addEventListener("keydown", function (event) {
        if (event.key === "Escape") {
            searchInput.value = "";
            searchInput.dispatchEvent(new Event("input"));
            searchInput.blur();
        }
    });

    console.log("Sunrise Acres Farm product search is ready.");
});

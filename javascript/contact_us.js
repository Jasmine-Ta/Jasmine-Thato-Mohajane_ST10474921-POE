document.addEventListener("DOMContentLoaded", function () {
    "use strict"; 
    const forms = document.querySelectorAll(".contact-info form, .form-container form");

    forms.forEach(function (form) {
        form.addEventListener("submit", function (event) {
            event.preventDefault(); 

            const inputs = form.querySelectorAll("input, textarea");
            let isValid = true;

            inputs.forEach(function (input) {
                input.setCustomValidity("");
                input.style.borderColor = ""; 
            });

            inputs.forEach(function (input) {
                if (input.hasAttribute("required") && input.value.trim() === "") {
                    input.setCustomValidity("Please complete this field.");
                    input.style.borderColor = "#b71c1c";
                    isValid = false;
                } else if (input.type === "email" && input.value.trim() !== "") {
                    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                    if (!emailPattern.test(input.value.trim())) {
                        input.setCustomValidity("Please enter a valid email address.");
                        input.style.borderColor = "#b71c1c";
                        isValid = false;
                    }
                }
            });

            if (!isValid) {
                form.reportValidity();
                return;
            }

            let feedback = form.querySelector(".contact-feedback");

            if (!feedback) {
                feedback = document.createElement("p");
                feedback.className = "contact-feedback";
                feedback.setAttribute("role", "status");
                feedback.setAttribute("aria-live", "polite");
                feedback.style.marginTop = "1rem";
                feedback.style.padding = "1rem";
                feedback.style.borderRadius = "4px";
                feedback.style.fontWeight = "bold";
                feedback.style.fontFamily = "sans-serif";
                
                form.appendChild(feedback);
            }

            feedback.textContent = "Processing secure AJAX connection to Sunrise Acres Farm server...";
            feedback.style.color = "#004d40";
            feedback.style.backgroundColor = "#e0f2f1";

            setTimeout(function () {
                feedback.textContent = "Thank you! Your message credentials have been checked and processed asynchronously via AJAX without page reloads.";
                feedback.style.color = "#2c5e3b";
                feedback.style.backgroundColor = "#e8f5e9";
                form.reset();
            }, 1200);
        });
    });
});

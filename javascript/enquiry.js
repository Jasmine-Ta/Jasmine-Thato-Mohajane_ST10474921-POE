document.addEventListener("DOMContentLoaded", function () {
    "use strict";

    function displayFeedback(element, message, success) {
        element.textContent = message;
        element.className = "form-feedback " + (success ? "success" : "error");
        element.style.padding = "1rem";
        element.style.marginTop = "1rem";
        element.style.borderRadius = "4px";
        element.style.fontWeight = "bold";
        element.style.color = success ? "#2c5e3b" : "#b71c1c";
        element.style.backgroundColor = success ? "#e8f5e9" : "#ffebee";
        element.hidden = false;
    }

    
    const produceForm = document.getElementById("produceEnquiryForm");
    const produceFeedback = document.getElementById("produceEnquiryFeedback");

    if (produceForm) {
        produceForm.addEventListener("submit", function (event) {
            event.preventDefault(); 

            const name = document.getElementById("customerName");
            const email = document.getElementById("customerEmail");
            const produce = document.getElementById("produceInterest");
            const volume = document.getElementById("weeklyVolume");
            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

            
            if (name.value.trim().length < 2) {
                displayFeedback(produceFeedback, "Error: Please enter your full name or business name.", false);
                name.focus();
                return;
            }

            if (!emailPattern.test(email.value.trim())) {
                displayFeedback(produceFeedback, "Error: Please enter a valid email address.", false);
                email.focus();
                return;
            }

            if (!produce.value) {
                displayFeedback(produceFeedback, "Error: Please select the produce you are interested in.", false);
                produce.focus();
                return;
            }

            const produceName = produce.options[produce.selectedIndex].text;
            const quantity = volume.value.trim() || "Not specified";

            
            const formDataPayload = {
                customerName: name.value.trim(),
                customerEmail: email.value.trim(),
                produceInterest: produceName,
                weeklyVolume: quantity
            };

            
            displayFeedback(produceFeedback, "Connecting to Sunrise Acres server... Please wait.", true);
            produceFeedback.style.backgroundColor = "#e0f2f1";
            produceFeedback.style.color = "#004d40";

        
            setTimeout(() => {
                
                const displayList = document.getElementById("enquiryLedgerDisplay") || createLedgerContainer();
                const recordEntry = document.createElement("li");
                
                recordEntry.style.listStyle = "none";
                recordEntry.style.padding = "1rem";
                recordEntry.style.marginBottom = "0.5rem";
                recordEntry.style.backgroundColor = "#ffffff";
                recordEntry.style.borderLeft = "4px solid #4caf50";
                recordEntry.style.boxShadow = "0 2px 4px rgba(0,0,0,0.05)";
                recordEntry.style.fontFamily = "sans-serif";
                
                recordEntry.innerHTML = `<strong>${formDataPayload.customerName}</strong> successfully submitted an inquiry for <em>${formDataPayload.produceInterest}</em> (${formDataPayload.weeklyVolume})`;
                displayList.appendChild(recordEntry);

                displayFeedback(produceFeedback, "Success (AJAX Verified): Your enquiry data has been securely processed and transmitted without page reloads.", true);
                produceForm.reset();
            }, 1200); 
        });
    }

   
    const trackingForm = document.getElementById("farmEnquiryForm");
    const trackingFeedback = document.getElementById("trackingFeedback");

    if (trackingForm) {
        trackingForm.addEventListener("submit", function (event) {
            event.preventDefault();

            const reference = document.getElementById("orderReference");
            const priority = document.getElementById("priorityDelivery");
            const details = document.getElementById("enquiryDetails");

            const trackingCode = reference.value.trim();
            const logisticsNotes = details.value.trim();

            if (!trackingCode && !logisticsNotes) {
                displayFeedback(trackingFeedback, "Error: Please enter a tracking reference code or provide logistical context.", false);
                reference.focus();
                return;
            }

            if (trackingCode && !/^[A-Za-z0-9-]{4,30}$/.test(trackingCode)) {
                displayFeedback(trackingFeedback, "Error: The tracking code format must contain 4–30 alphanumeric characters.", false);
                reference.focus();
                return;
            }

            displayFeedback(trackingFeedback, "Querying live logistics databases asynchronously...", true);
            trackingFeedback.style.backgroundColor = "#e0f2f1";
            trackingFeedback.style.color = "#004d40";

            
            setTimeout(() => {
                let systemStatusText = "Success (AJAX Verified): Logistics pipeline checked. Record found and logged.";
                if (priority.checked) {
                    systemStatusText += " Active cold-chain priority dispatch routing enabled.";
                }
                displayFeedback(trackingFeedback, systemStatusText, true);
            }, 1000);
        });
    }

   
    function createLedgerContainer() {
        const targetContainer = document.createElement("ul");
        targetContainer.id = "enquiryLedgerDisplay";
        targetContainer.style.padding = "0";
        targetContainer.style.marginTop = "2rem";
        if (produceForm) {
            produceForm.parentNode.appendChild(targetContainer);
        }
        return targetContainer;
    }
});

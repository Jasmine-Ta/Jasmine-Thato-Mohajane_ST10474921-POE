
document.addEventListener("DOMContentLoaded", function () {
    const orderForm = document.getElementById("secureCheckoutForm");

    if (!orderForm) {
        return;
    }

    const nameInput = document.getElementById("customerFullName");
    const phoneInput = document.getElementById("customerPhone");
    const itemSelection = document.getElementById("itemSelection");
    const addressBlock = document.getElementById("shippingAddressBlock");
    const addressInput = document.getElementById("shippingAddress");
    const feedback = document.getElementById("checkoutFeedback");
    const submitButton = orderForm.querySelector('[type="submit"]');

    
    const productPrices = {
        spinach: 25,
        cabbage: 30,
        eggs: 65
    };

    const deliveryPrices = {
        collect: 0,
        gauteng: 60,
        nationwide: 100
    };

    
    function getDeliveryMethod() {
        const selected = orderForm.querySelector(
            'input[name="deliveryMethod"]:checked'
        );

        return selected ? selected.value : "collect";
    }

   
    function showFeedback(message, type) {
        feedback.textContent = message;
        feedback.className = "feedback-box " + type;
        feedback.style.display = "block";
    }

    function updateDeliveryAddress() {
        const deliveryMethod = getDeliveryMethod();
        const needsAddress = deliveryMethod !== "collect";

        addressBlock.hidden = !needsAddress;
        addressInput.required = needsAddress;

        if (!needsAddress) {
            addressInput.value = "";
            addressInput.classList.remove("input-error");
        }
    }

   
    function calculateTotal() {
        const productPrice = productPrices[itemSelection.value] || 0;
        const deliveryFee = deliveryPrices[getDeliveryMethod()] || 0;

        return productPrice + deliveryFee;
    }

  
    function updateOrderEstimate() {
        if (!itemSelection.value) {
            feedback.style.display = "none";
            feedback.textContent = "";
            return;
        }

        const productPrice = productPrices[itemSelection.value] || 0;
        const deliveryFee = deliveryPrices[getDeliveryMethod()] || 0;
        const total = calculateTotal();

        showFeedback(
            "Order estimate: R" + productPrice.toFixed(2) +
            " + delivery R" + deliveryFee.toFixed(2) +
            " = R" + total.toFixed(2) +
            ". Final prices and availability must be confirmed by the farm.",
            "loading-msg"
        );
    }

   
    orderForm.querySelectorAll('input[name="deliveryMethod"]').forEach(
        function (radio) {
            radio.addEventListener("change", function () {
                updateDeliveryAddress();
                updateOrderEstimate();
            });
        }
    );

    itemSelection.addEventListener("change", updateOrderEstimate);

    
    [nameInput, phoneInput, itemSelection, addressInput].forEach(
        function (field) {
            if (field) {
                field.addEventListener("input", function () {
                    field.classList.remove("input-error");
                });

                field.addEventListener("change", function () {
                    field.classList.remove("input-error");
                });
            }
        }
    );

    orderForm.addEventListener("submit", function (event) {
        event.preventDefault();

        feedback.className = "feedback-box";
        feedback.style.display = "none";

        const fullName = nameInput.value.trim();
        const phone = phoneInput.value.trim();
        const product = itemSelection.value;
        const deliveryMethod = getDeliveryMethod();
        const address = addressInput.value.trim();

        if (fullName.length < 2) {
            showFeedback(
                "Please enter your full name.",
                "error-msg"
            );
            nameInput.classList.add("input-error");
            nameInput.focus();
            return;
        }
 
        const phonePattern = /^(?:(?:\+27|0)\s?\d{2}[\s-]?\d{3}[\s-]?\d{4})$/;

        if (!phonePattern.test(phone)) {
            showFeedback(
                "Please enter a valid South African phone number, for example 0821234567 or +27821234567.",
                "error-msg"
            );
            phoneInput.classList.add("input-error");
            phoneInput.focus();
            return;
        }

        if (!product || !Object.prototype.hasOwnProperty.call(productPrices, product)) {
            showFeedback(
                "Please select a farm produce item.",
                "error-msg"
            );
            itemSelection.classList.add("input-error");
            itemSelection.focus();
            return;
        }

       
        if (deliveryMethod !== "collect" && address.length < 8) {
            showFeedback(
                "Please enter your full physical delivery address.",
                "error-msg"
            );
            addressInput.classList.add("input-error");
            addressInput.focus();
            return;
        }

        const productPrice = productPrices[product];
        const deliveryFee = deliveryPrices[deliveryMethod];
        const total = productPrice + deliveryFee;

        const productName =
            itemSelection.options[itemSelection.selectedIndex].text
                .split(" (");

        const deliveryNames = {
            collect: "Click and Collect",
            gauteng: "Pretoria Local Courier",
            nationwide: "Greater Gauteng Freight"
        };

      
        if (submitButton) {
            submitButton.textContent = "Connecting to server via AJAX...";
            submitButton.disabled = true;
        }
        
        showFeedback("Processing order secure credentials asynchronously...", "loading-msg");

        
        setTimeout(() => {
            showFeedback(
                "Order details validated successfully! " +
                "Customer: " + fullName + ". " +
                "Product: " + productName + ". " +
                "Fulfilment: " + deliveryNames[deliveryMethod] + ". " +
                "Delivery fee: R" + deliveryFee.toFixed(2) + ". " +
                "Estimated total: R" + total.toFixed(2) + ". " +
                "Success: Your data was submitted asynchronously via AJAX without page reloads.",
                "success-msg"
            );

            if (submitButton) {
                submitButton.textContent = "Submit Order";
                submitButton.disabled = false;
            }
            
            orderForm.reset();
            updateDeliveryAddress();
        }, 1200);
    });

    // Initialise the page.
    updateDeliveryAddress();
});

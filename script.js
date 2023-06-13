const form = document.getElementById("newsletter-form");
const successMessageContainer = document.getElementById(
    "success-message-container"
);
const emailInput = document.getElementById("email");
const subscribedEmail = document.getElementById("subscribed-email");
const checkboxes = document.querySelectorAll(
    'input[type="checkbox"]'
);
const submitButton = document.getElementById("submit-button");
const dismissButton = document.getElementById("dismiss-button");

form.addEventListener("submit", function (event) {
    event.preventDefault();

    const email = emailInput.value;

    // Simulating form submission and displaying success message
    setTimeout(function () {
        form.style.display = "none";
        successMessageContainer.style.display = "block";
        subscribedEmail.textContent = email;
    }, 1000);
});

dismissButton.addEventListener("click", function () {
    successMessageContainer.style.display = "none";
    form.style.display = "block";
    window.location.href = "#";
});

checkboxes.forEach(function (checkbox) {
    checkbox.addEventListener("change", function () {
        const checkedCheckboxes = Array.from(checkboxes).filter(
            function (checkbox) {
                return checkbox.checked;
            }
        );

        submitButton.disabled = checkedCheckboxes.length === 0;
    });
});
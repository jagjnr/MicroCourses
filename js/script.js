// script.js

// Function to include header and footer from external files
function includeHTML() {
    const includes = document.querySelectorAll("[data-include]");
    includes.forEach(async (element) => {
        const file = element.getAttribute("data-include");
        console.log(`Attempting to include: ${file}`); // Debugging line
        try {
            const response = await fetch(file);
            if (response.ok) {
                const content = await response.text();
                element.innerHTML = content;
                console.log(`Successfully loaded: ${file}`); // Debugging line
            } else {
                console.error(`Error loading file: ${file} - ${response.statusText}`);
            }
        } catch (error) {
            console.error(`Error fetching file: ${file} - ${error.message}`);
        }
    });
}

// Run the include function on DOMContentLoaded
document.addEventListener("DOMContentLoaded", function () {
    includeHTML();
});

// Run the include function on DOMContentLoaded
document.addEventListener("DOMContentLoaded", function () {
    includeHTML(); // Include the header and footer

    // Wait for the DOM to fully load before attaching event listeners
    const enrollButtons = document.querySelectorAll(".btn");
    const enrollFormContainer = document.getElementById("enroll-form-container");
    const enrollForm = document.getElementById("enroll-form");
    const cancelButton = document.getElementById("cancel-button");

    // Loop through each button and attach a click event listener
    enrollButtons.forEach((button) => {
        button.addEventListener("click", function () {
            // Show the enroll form when the button is clicked
            enrollFormContainer.style.display = "flex";
        });
    });

    // Handle form submission
    enrollForm.addEventListener("submit", function (event) {
        event.preventDefault();
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const dateRange = document.getElementById("date-range").value;
        const timeframe = document.getElementById("timeframe").value;

        alert(`Thank you, ${name}! You have successfully enrolled in the course.\n\nEmail: ${email}\nClass Date Range: ${dateRange}\nTime: ${timeframe}\nCost: $500 AUD\n\nAn email will be sent confirming your enrollment with details on how to make payment.`);
        
        // Hide the form after submission
        enrollFormContainer.style.display = "none";
        enrollForm.reset();
    });

    // Handle form cancellation
    cancelButton.addEventListener("click", function () {
        enrollFormContainer.style.display = "none";
        enrollForm.reset();
    });
});

// Handle form submission with validation
document.addEventListener("DOMContentLoaded", function () {
    const contactForm = document.querySelector(".contact-form form");

    if (contactForm) {
        contactForm.addEventListener("submit", handleFormSubmit);
    }

    function handleFormSubmit(event) {
        event.preventDefault();
        const messageField = document.getElementById("message");

        if (!messageField.value.trim()) {
            alert("Please fill in the message field.");
            messageField.focus();
            return;
        }

        alert("Message successfully submitted!");
        contactForm.reset();
    }
});

// Function to dynamically load the Google Maps API
function loadGoogleMapsAPI() {
    const script = document.createElement('script');
    script.src = "https://maps.googleapis.com/maps/api/js?key=AIzaSyBjvZc5Eg4qJ4pIHDOlP38okXC2E_LePNs&callback=initMap";
    script.defer = true;
    document.head.appendChild(script);
}

// Initialize Map
function initMap() {
    var location = { lat: -33.8619, lng: 151.2087 }; // Sydney, Australia
    var map = new google.maps.Map(document.getElementById("map"), {
        zoom: 14,
        center: location
    });
    var marker = new google.maps.Marker({
        position: location,
        map: map,
        title: "MicroCourses Location"
    });
}

// Load Google Maps API when the window loads
window.onload = function () {
    loadGoogleMapsAPI();
};

window.onload = initMap;


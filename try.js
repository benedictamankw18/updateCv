function closeContact() {
    const contactDetail = document.getElementById("contactDetail");
    contactDetail.classList.add("hidden"); // Trigger hiding animation

    // Delay the display change to allow fade-out effect
    setTimeout(() => {
        contactDetail.style.display = "none"; // Finally hide it
        contactDetail.classList.remove("visible"); // Remove visible class
    }, 500); // Match this to the CSS transition duration
}

function openContact() {
    const contactDetail = document.getElementById("contactDetail");
    contactDetail.classList.remove("hidden"); // Ensure hidden class is removed
    contactDetail.style.display = "block"; // Show first

    // Allow for a slight delay to ensure the element is displayed before scaling
    setTimeout(() => {
        contactDetail.classList.add("visible"); // Fade in and scale to original size
    }, 10); // Short delay
}

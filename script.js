let noButton = document.getElementById("no-btn");
let yesButton = document.getElementById("yes-btn");
let gifContainer = document.getElementById("gif-container");

let sizeIncrease = 1;

noButton.addEventListener("click", function() {
    // Make the "Yes" button grow each time "No" is clicked
    sizeIncrease *= 1.2; // Increase size by 20% each time
    yesButton.style.transform = `scale(${sizeIncrease})`; // Grow the "Yes" button

    // Move "Yes" button away from "No" as it grows
    let offset = sizeIncrease * 50; // Controls the push distance of the "Yes" button
    yesButton.style.marginLeft = `${offset}px`;

    // Hide the "No" button once the "Yes" button is too big
    if (sizeIncrease > 5) { // Adjust this value based on when you want to hide the "No" button
        noButton.style.opacity = "0";
        noButton.style.pointerEvents = "none"; // Prevents clicking on the "No" button when it's invisible
    }
});

yesButton.addEventListener("click", function() {
    // Hide the buttons and show the gif and message
    document.getElementById("content").style.display = "none";
    gifContainer.style.display = "block";
});

let noButton = document.getElementById("no-btn");
let yesButton = document.getElementById("yes-btn");
let gifContainer = document.getElementById("gif-container");

let sizeIncrease = 1;

noButton.addEventListener("click", function() {
    sizeIncrease *= 1.2; // Vergrößert den Button jedes Mal, wenn "No" geklickt wird
    yesButton.style.transform = `scale(${sizeIncrease})`; // Skaliert den Yes-Button
});

yesButton.addEventListener("click", function() {
    // Versteckt die Buttons und zeigt den Text + Gif
    document.getElementById("content").style.display = "none";
    gifContainer.style.display = "block";
});

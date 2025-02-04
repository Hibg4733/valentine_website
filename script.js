let pleaseOptions = [
    "Please?", "Double Please?", "Triple Please?", "Pepsi Please?", "Please baby", "Baby..?", "Grrrrr", "Please ml", "Pretty Please?", "BABYYY",
    "Super Please?", "Im begging you", "Please im so sorry", "my love please", "Lovely Please?", "cutie?", "please omg", "Kms", "but Im very sorry", "please Im working on it",
    "baby omg", "just press yes already", "still no?", "but baby", "PLEAAAAAASSSEEEEEEE", "Forever Please?", "Please ml?", "Please for the love of Pepsi?", "theres no way you pressed no on that",
    "baby cmon", "Please, I beg you", "babyyyyyy JUST CLICK YES", "...", "baby.", "sweetie cmon", "I promise I will work on it", "I pinky promise", "please aaaaa", "idk what to write",
    "baby please forgive", "cmon you said no too often", "BABYY GRRR", "but I love you", "PLEASE", "huggie", "baby please", "please..", "please dont ignore", "please forgive"
];

let pleaseCount = 0; // Counter to track which "Please" option is next
let noClickCount = 0; // Counter for the number of "No" clicks
let angryGifShown = false; // Flag to track if the angry GIF has been shown already

document.getElementById('yesButton').addEventListener('click', function() {
    document.getElementById('response').style.display = 'block';
    document.getElementById('response').innerHTML = '<p>Thank you you so much, you mean so much to me and I love you, I hope you can forgive me. ❤️</p>';

    // Show the cute bear with hearts
    document.getElementById('bearArea').style.display = 'block';  // Display the bear area
    document.getElementById('bearImage').style.animation = 'heartbeat 1.5s infinite';  // Add animation to the bear image
});

document.getElementById('noButton').addEventListener('click', function() {
    noClickCount++;  // Increment the "No" button click count

    // Check if the "No" button has been clicked 4 times
    if (noClickCount >= 4 && !angryGifShown) {
        // Show the angry GIF fullscreen once
        let angryGif = document.createElement('img');
        angryGif.src = "https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExaTdkNG9lZHR5NHRxejhsZ2JkYnB3OGZqOXc1aDk4MW4zeGVvZGZoZyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/qQdL532ZANbjy/giphy.gif";  // Angry GIF link
        angryGif.alt = "Angry Face";
        angryGif.id = "angryGif";
        angryGif.style.position = 'fixed';
        angryGif.style.top = '0';
        angryGif.style.left = '0';
        angryGif.style.width = '100%';
        angryGif.style.height = '100%';
        angryGif.style.objectFit = 'cover';  // Make the GIF cover the entire screen
        angryGif.style.zIndex = '1000';  // Ensure it's on top of all content

        // Append the angry GIF to the body
        document.body.appendChild(angryGif);

        // Hide the GIF after 2 seconds
        setTimeout(function() {
            angryGif.style.display = 'none';  // Hide the angry GIF after 2 seconds
        }, 2000);

        // Set the flag to prevent the GIF from showing again
        angryGifShown = true;

        // Reset the "No" counter after the angry GIF is shown
        noClickCount = 0;
    } else {
        // Show the next "Please" option from the array
        document.getElementById('forgiveButton').innerHTML = pleaseOptions[pleaseCount % pleaseOptions.length];  // Loop through options
        pleaseCount++;  // Increment the counter for the "Please" options
    }

    // If the count goes over 50, we can optionally reset it to start over
    if (pleaseCount >= pleaseOptions.length) {
        pleaseCount = 0; // Reset to start over, or you could keep it at the max for fun!
    }
});

document.getElementById('forgiveButton').addEventListener('click', function() {
    // Trigger "Baby grrr" message and display angry GIF
    if (document.getElementById('forgiveButton').innerHTML === "Baby grrr") {
        // Show the angry GIF
        let angryGif = document.createElement('img');
        angryGif.src = "https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExZGMyOWRpOTZkcTZyY3FsbzAzY2pvYjhzYmN5MGdnM2hqcDQ3OHV1OCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/aNFT7eG2rIKK715uLk/giphy.gif";  // Angry GIF link
        angryGif.alt = "Angry Face";
        angryGif.id = "angryGif";
        angryGif.style.width = '300px';
        angryGif.style.marginTop = '20px';
        
        // Append the angry GIF to the body or a specific div
        document.getElementById('bearArea').appendChild(angryGif);
        
        // Hide the GIF after 3 seconds
        setTimeout(function() {
            angryGif.style.display = 'none';  // Hide the angry GIF after 3 seconds
        }, 3000);
    }
});

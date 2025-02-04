let pleaseOptions = [
    "Please?", "Double Please?", "Triple Please?", "Pepsi Please?", "Cute Please?", "Adorable Please?", "Sweet Please?", "Please, Baby?", "Pretty Please?", "Kindly Please?",
    "Super Please?", "Best Please?", "Peachy Please?", "Fancy Please?", "Lovely Please?", "Hungry Please?", "Soft Please?", "Sparkly Please?", "Big Please?", "Funny Please?",
    "Silly Please?", "Tasty Please?", "Happy Please?", "Warm Please?", "Please x1000?", "Forever Please?", "Please pretty please?", "Please for the love of Pepsi?", "Cool Please?",
    "Fun Please?", "Please, I beg you?", "Cuddly Please?", "Lovable Please?", "Muffin Please?", "Sweetheart Please?", "Fizzy Please?", "Pink Please?", "Perfect Please?", "Rainbow Please?",
    "Cute as a Button Please?", "Charming Please?", "Delicious Please?", "Endless Please?", "Kind Please?", "Cheerful Please?", "Playful Please?", "Hug Please?", "Kiss Please?", "Magical Please?"
];

let pleaseCount = 0; // Counter to track which "Please" option is next
let noClickCount = 0; // Counter for the number of "No" clicks

document.getElementById('yesButton').addEventListener('click', function() {
    document.getElementById('response').style.display = 'block';
    document.getElementById('response').innerHTML = '<p>Thank you! You mean so much to me. Let\'s work together. ❤️</p>';

    // Show the cute bear with hearts
    document.getElementById('bearArea').style.display = 'block';  // Display the bear area
    document.getElementById('bearImage').style.animation = 'heartbeat 1.5s infinite';  // Add animation to the bear image
});

document.getElementById('noButton').addEventListener('click', function() {
    noClickCount++;  // Increment the "No" button click count

    // Check if the "No" button has been clicked 4 times
    if (noClickCount >= 4) {
        // Show the angry GIF fullscreen
        let angryGif = document.createElement('img');
        angryGif.src = "https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExZGMyOWRpOTZkcTZyY3FsbzAzY2pvYjhzYmN5MGdnM2hqcDQ3OHV1OCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/aNFT7eG2rIKK715uLk/giphy.gif";  // Angry GIF link
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

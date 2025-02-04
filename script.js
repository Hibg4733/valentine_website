let pleaseOptions = [
    "Please?", "Double Please?", "Triple Please?", "Pepsi Please?", "Cute Please?", "Adorable Please?", "Sweet Please?", "Please, Baby?", "Pretty Please?", "Kindly Please?",
    "Super Please?", "Best Please?", "Peachy Please?", "Fancy Please?", "Lovely Please?", "Hungry Please?", "Soft Please?", "Sparkly Please?", "Big Please?", "Funny Please?",
    "Silly Please?", "Tasty Please?", "Happy Please?", "Warm Please?", "Please x1000?", "Forever Please?", "Please pretty please?", "Please for the love of Pepsi?", "Cool Please?",
    "Fun Please?", "Please, I beg you?", "Cuddly Please?", "Lovable Please?", "Muffin Please?", "Sweetheart Please?", "Fizzy Please?", "Pink Please?", "Perfect Please?", "Rainbow Please?",
    "Please Baby", "Charming Please?", "Delicious Please?", "Endless Please?", "Kind Please?", "Cheerful Please?", "Playful Please?", "Hug Please?", "Kiss Please?", "Magical Please?"
];

let pleaseCount = 0; // Counter to track which "Please" option is next

document.getElementById('yesButton').addEventListener('click', function() {
    document.getElementById('response').style.display = 'block';
    document.getElementById('response').innerHTML = '<p>Thank you! You mean so much to me. Let\'s work together. ❤️</p>';

    // Show the cute bear with hearts
    document.getElementById('bearArea').style.display = 'block';  // Display the bear area
    document.getElementById('bearImage').style.animation = 'heartbeat 1.5s infinite';  // Add animation to the bear image
});

document.getElementById('noButton').addEventListener('click', function() {
    // Show the next "Please" option from the array
    document.getElementById('forgiveButton').innerHTML = pleaseOptions[pleaseCount % pleaseOptions.length];  // Loop through options

    // Increment the counter to cycle through the "Please" options
    pleaseCount++;

    // If the count goes over 50, we can optionally reset it to start over
    if (pleaseCount >= pleaseOptions.length) {
        pleaseCount = 0; // Reset to start over, or you could keep it at the max for fun!
    }
});

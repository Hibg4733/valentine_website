let pleaseCount = 1;  // This variable will keep track of how many times "No" has been clicked.

document.getElementById('yesButton').addEventListener('click', function() {
    document.getElementById('response').style.display = 'block';
    document.getElementById('response').innerHTML = '<p>Thank you sm baby, you mean so much to me and I love you. ❤️</p>';

    // Show the cute bear with hearts
    document.getElementById('bearArea').style.display = 'block';  // Display the bear area
    document.getElementById('bearImage').style.animation = 'heartbeat 1.5s infinite';  // Add animation to the bear image
});

document.getElementById('noButton').addEventListener('click', function() {
    // Update the text of the "Please forgive me" button with a new "Please" count
    document.getElementById('forgiveButton').innerHTML = `Please ${'?'.repeat(pleaseCount)}`;

    // Increase the "Please" count for the next click
    pleaseCount++;

    // Display the updated button text after each "No" click
    if (pleaseCount > 5) {
        // If it gets to a high number, stop incrementing the text
        document.getElementById('forgiveButton').innerHTML = "Pepsi Please?";
    }
});

document.getElementById('yesButton').addEventListener('click', function() {
    document.getElementById('response').style.display = 'block';
    document.getElementById('response').innerHTML = '<p>Thank you! You mean so much to me. Let\'s work together. ❤️</p>';
    
    // Show the cute bear with hearts
    document.getElementById('bearArea').style.display = 'block';  // Display the bear area
    document.getElementById('bearImage').style.animation = 'heartbeat 1.5s infinite';  // Add animation to the bear image
});

document.getElementById('noButton').addEventListener('click', function() {
    // Change the "Please forgive me" button text to "Please?"
    document.getElementById('forgiveButton').innerHTML = 'Please?';
});

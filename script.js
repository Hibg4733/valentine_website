document.getElementById('yesButton').addEventListener('click', function() {
    document.getElementById('response').style.display = 'block';
    document.getElementById('response').innerHTML = '<p>Thank you! You mean so much to me. Let\'s work together. ❤️</p>';
});

document.getElementById('noButton').addEventListener('click', function() {
    document.getElementById('response').style.display = 'block';
    document.getElementById('response').innerHTML = '<p>I understand. I will respect your space and do better. ❤️</p>';
});

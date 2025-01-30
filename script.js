
window.onload = function() {
    alert("Welcome to The Little Taco Shop!");
};


function displayDateTime() {
    const now = new Date();
    const dateTimeString = now.toLocaleString();
    document.getElementById('datetime').textContent = `Current Date and Time: ${dateTimeString}`;
}

window.onload = function() {
    displayDateTime();
    setInterval(displayDateTime, 1000); // Update every second
};
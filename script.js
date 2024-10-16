
document.getElementById("login-form").addEventListener("submit", function(event) {
    event.preventDefault();

    // Get username input
    const username = document.getElementById("username-input").value;

    // Simulate login logic (for now just check if the fields are filled)
    if (username.trim() !== "") {
        // Hide login page
        document.getElementById("login-page").style.display = "none";

        // Show dashboard page
        document.getElementById("dashboard").style.display = "flex";

        // Set the username in the dashboard
        document.getElementById("user-name").innerText = username;
    } else {
        alert("Please enter a valid username.");
    }
});

// Logout functionality
function logout() {
    // Hide dashboard
    document.getElementById("dashboard").style.display = "none";

    // Show login page again
    document.getElementById("login-page").style.display = "block";
}
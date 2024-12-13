// Simulated login data (use in-memory variables or real backend for production)
const validUsername = 'admin';
const validPassword = 'password123';


// Handle the form submission
document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Check if the entered credentials are correct
    if (username === validUsername && password === validPassword) {
        // Store user data in localStorage to simulate a login session
        localStorage.setItem('userLoggedIn', true);

        // Redirect to the reservation page
        window.location.href = '../../views/site/reservations.php'; // Ensure it's the correct page (change '.php' to '.html' if needed)
    } else {
        alert('Invalid username or password!');
    }
});

let userName = document.getElementById("username");
userName.style.color = "#E5E7EB";
let Email = document.getElementById("email");
Email.style.color = "#E5E7EB";
let getName = document.getElementById("namesum");
getName.style.color = "#E5E7EB";





document.getElementById('myForm').addEventListener('submit', function (e) {
    // Prevent the default form submission
    e.preventDefault();

    // Clear previous error messages
    document.getElementById('usernameError').textContent = '';
    document.getElementById('emailError').textContent = '';

    // Get form values
    const username = document.getElementById('username').value.trim();
    const email = document.getElementById('email').value.trim();

    let isValid = true;

    // Validate username (must be at least 3 characters)
    if (username.length < 3) {
        document.getElementById('usernameError').textContent = 'Username must be at least 3 characters long.';
        isValid = false;
    }

    // Validate email (basic regex pattern)
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        document.getElementById('emailError').textContent = 'Please enter a valid email address.';
        isValid = false;
    }

    // If the form is valid, display a success message
    if (isValid) {
        alert('Form submitted successfully!');
        window.location.href = "../pages/topic.html"
    }
});
// btn.onclick = function(){
//     window.location.href = "../pages/summary.html"
// }


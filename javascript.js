const toggleLink = document.getElementById('toggleLink');
const formTitle = document.getElementById('formTitle');
const nameField = document.getElementById('nameField');
const submitBtn = document.getElementById('submitBtn');
const toggleText = document.getElementById('toggleText');

let isLogin = true;

toggleLink.addEventListener('click', (e) => {
    e.preventDefault(); // Stop the link from refreshing the page
    
    if (isLogin) {
        // Switch to Signup mode
        formTitle.innerText = "Signup";
        nameField.style.display = "block";
        submitBtn.innerText = "Create Account";
        toggleText.innerHTML = 'Already have an account? <a href="#" id="toggleLink">Login</a>';
    } else {
        // Switch back to Login mode
        formTitle.innerText = "Login";
        nameField.style.display = "none";
        submitBtn.innerText = "Login";
        toggleText.innerHTML = 'Don\'t have an account? <a href="#" id="toggleLink">Signup</a>';
    }
    
    isLogin = !isLogin; // Toggle the state
});

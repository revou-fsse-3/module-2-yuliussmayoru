const validateForm = ()=> {

    // getting valie from each form
    let name = document.getElementById("fname").value; // input name
    let email = document.getElementById("femail").value; // input email
    let gender = document.getElementById("dropdown-gender").value; // select gender
    let message = document.getElementById("ftextbox").value; // input message

    // Simple validation, check if fields are not empty
    // the code read :
    // if name, email, gender, and message value equal to empty ("") return false and show alert all fields must be filled out
    if (name === "" || email === "" || gender === "" || message === "") {
        alert("All fields must be filled out");
        return false; // Prevent form submission
    }

    // Regular expression to validate email format
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    // the code read "
    // if email doesn't match (!) with email pattern,return false and show alert please enter a valid email address
    if (!email.match(emailPattern)) {
        alert("Please enter a valid email address");
        return false; // Prevent form submission
    }

    alert("Message Sent!");
    return true; // Allow form submission
}

darkMode = ()=> {
  let element = document.body;
  element.classList.toggle("dark-mode");

  // Check if dark mode is enabled and save the state to local storage
  const isDarkModeEnabled = element.classList.contains("dark-mode");
  localStorage.setItem("darkModeEnabled", isDarkModeEnabled);
};

// Check local storage on page load and set dark mode accordingly
document.addEventListener("DOMContentLoaded", () => {
  const isDarkModeEnabled = JSON.parse(localStorage.getItem("darkModeEnabled")) || false;

  if (isDarkModeEnabled) {
    document.body.classList.add("dark-mode");
  }
});
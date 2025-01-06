// JavaScript for toggling the dropdown menu on click
document.querySelectorAll('.dropdown-toggle').forEach(item => {
  item.addEventListener('click', function (e) {
    e.preventDefault(); // Prevent the default anchor tag behavior
    
    // Toggle the 'show' class on the associated dropdown menu
    const dropdownMenu = this.nextElementSibling; // Get the sibling ul element (dropdown menu)
    dropdownMenu.classList.toggle('show'); // Add/remove the 'show' class to toggle visibility
  });
});

// Select the login and register buttons by their IDs
const loginButton = document.getElementById("loginButton");
const registerButton = document.getElementById("registerButton");
const readMoreButton = document.getElementById("readMoreButton");

// Event listener for Login button
loginButton.addEventListener("click", function (event) {
  event.preventDefault();
  alert("Redirecting to Login page...(not yet made)");
});

// Event listener for Register button
registerButton.addEventListener("click", function (event) {
  event.preventDefault();
  alert("Redirecting to Register page...(not yet made)");
});

// Event listener for Register button
readMoreButton.addEventListener("click", function (event) {
  event.preventDefault();
  alert("Redirecting to Read More page...(not yet made)");
});
document.addEventListener("DOMContentLoaded", function () {
  const mobileNavImage = document.getElementById("mobile-nav-image");
  const navList = document.querySelector(".nav-list");

  mobileNavImage.addEventListener("click", () => {
    navList.classList.toggle("show");
  });
});

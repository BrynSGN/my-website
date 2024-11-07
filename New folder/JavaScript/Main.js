window.onload = function() {
    document.getElementById("signUpForm").addEventListener("submit", function(event) {
      event.preventDefault(); // Prevent form from submitting

      // Display the message
      document.getElementById("signupMessage").style.display = "block";
      console.log("Message displayed"); // Check if this logs in the console
    });
  };
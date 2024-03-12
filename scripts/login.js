document.addEventListener("DOMContentLoaded", function () {
    // Function to handle form submission
    function handleFormSubmission(event) {
        event.preventDefault(); 

        var enteredUsername = document.getElementById("username").value;
        var enteredPassword = document.getElementById("password").value;

        fetch("https://jsonplaceholder.typicode.com/users")
            .then(response => {
                if (!response.ok) {
                    throw new Error("API call unsuccessful");
                }
                return response.json();
            })
            .then(users => {
                
                var matchingUser = users.find(user => user.username === enteredUsername && user.email === enteredPassword);

                displayMessage(matchingUser);
            })
            .catch(error => {
                alert("Error: " + error.message);
            });
    }

    function displayMessage(matchingUser) {
        var messageBox = document.getElementById("message-box");

      
        if (!messageBox) {
            messageBox = document.createElement("div");
            messageBox.id = "message-box";
            messageBox.className = "message-box"; 
            document.body.insertBefore(messageBox, document.querySelector(".footer"));
            messageBox.style.color ="black";
        }

        var messageParagraph = document.createElement("p");

        if (matchingUser) {
  
            messageParagraph.textContent = "Login Successful!";
        } else {
         
            messageParagraph.textContent = "Invalid username or password. Please try again.";
        }

 
        messageBox.style.border = "2px solid #ccc";
        messageBox.style.padding = "10px";
        messageBox.style.margin = "20px";
        messageBox.style.backgroundColor = "#f9f9f9";

       
        messageBox.innerHTML = "";
        messageBox.appendChild(messageParagraph);
    }

    
    var loginForm = document.querySelector(".login-form form");
    loginForm.addEventListener("submit", handleFormSubmission);
});


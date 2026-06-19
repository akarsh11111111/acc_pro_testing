
function loginVulnerable(userInput, passwordInput) {
  const query = "SELECT * FROM users WHERE username = '" 
                + userInput + "' AND password = '" 
                + passwordInput + "'";
  console.log("Running query:", query);

}

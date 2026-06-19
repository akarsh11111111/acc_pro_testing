// ❌ Vulnerable code (for demo only)
function loginVulnerable(userInput, passwordInput) {
  const query = "SELECT * FROM users WHERE username = '" 
                + userInput + "' AND password = '" 
                + passwordInput + "'";
  console.log("Running query:", query);
  // Imagine this query being executed directly → unsafe
}

func1(){
  //hack it
}
/**
 * sql_injection_demo.js
 * Educational demo showing unsafe vs safe SQL query handling.
 * Author: Akarsh Vidyarthi
 */

// ❌ UNSAFE EXAMPLE (Vulnerable to SQL Injection)
function loginVulnerable(userInput, passwordInput) {
  const query = "SELECT * FROM users WHERE username = '" 
                + userInput + "' AND password = '" 
                + passwordInput + "'";
  console.log("Running query:", query);
  // This query would be executed directly in a vulnerable system
}

// ✅ SAFE EXAMPLE (Using parameterized queries)
function loginSecure(db, userInput, passwordInput) {
  const query = "SELECT * FROM users WHERE username = ? AND password = ?";
  db.execute(query, [userInput, passwordInput]);
  console.log("Secure query executed with parameters.");
}
}}}}}}}}}}}}}}}}}}}}}}}}}}}

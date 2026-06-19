// ✅ Secure code using parameterized queries
function loginSecure(db, userInput, passwordInput) {
  const query = "SELECT * FROM users WHERE username = ? AND password = ?";
  db.execute(query, [userInput, passwordInput]);
}

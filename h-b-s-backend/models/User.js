// models/user.js
class User {
  constructor(id, username, email, password) {
    this.id = id; // Unique identifier for the user
    this.username = username; // User's name
    this.email = email; // User's email
    this.password = password; // User's password (hashed)
  }
}

module.exports = User;

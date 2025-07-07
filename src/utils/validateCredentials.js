/**
 * Validates email, password, and optionally full name
 * @param {string} email - Email address to validate
 * @param {string} password - Password to validate
 * @param {string} [fullName] - Optional full name to validate
 * @returns {Object|null} - Returns object with error messages or null if valid
 */

export const validateCredentials = (email, password, fullName = null) => {
  const errors = {};

  // Email validation
  if (!email) {
    errors.email = "Email is required";
  } else if (typeof email !== "string") {
    errors.email = "Email must be a string";
  } else {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const trimmedEmail = email.trim();

    if (trimmedEmail.length === 0) {
      errors.email = "Email cannot be empty";
    } else if (!emailRegex.test(trimmedEmail)) {
      errors.email = "Invalid email format";
    } else if (trimmedEmail.length > 254) {
      errors.email = "Email is too long";
    }
  }

  // Password validation
  if (!password) {
    errors.password = "Password is required";
  } else if (typeof password !== "string") {
    errors.password = "Password must be a string";
  } else {
    if (password.length < 8) {
      errors.password = "Password must be at least 8 characters long";
    } else if (password.length > 128) {
      errors.password = "Password is too long (max 128 characters)";
    } else if (!/(?=.*[a-z])/.test(password)) {
      errors.password = "Password must contain at least one lowercase letter";
    } else if (!/(?=.*[A-Z])/.test(password)) {
      errors.password = "Password must contain at least one uppercase letter";
    } else if (!/(?=.*\d)/.test(password)) {
      errors.password = "Password must contain at least one number";
    } else if (!/(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?])/.test(password)) {
      errors.password = "Password must contain at least one special character";
    }
  }

  // Full name validation (if provided)
  if (fullName !== null && fullName !== undefined) {
    if (typeof fullName !== "string") {
      errors.fullName = "Full name must be a string";
    } else {
      const trimmedName = fullName.trim();

      if (trimmedName.length === 0) {
        errors.fullName = "Full name cannot be empty";
      } else if (trimmedName.length < 2) {
        errors.fullName = "Full name must be at least 2 characters long";
      } else if (trimmedName.length > 100) {
        errors.fullName = "Full name is too long (max 100 characters)";
      } else if (!/^[a-zA-Z\s\-'\.]+$/.test(trimmedName)) {
        errors.fullName =
          "Full name can only contain letters, spaces, hyphens, apostrophes, and periods";
      } else if (!/^[a-zA-Z]/.test(trimmedName)) {
        errors.fullName = "Full name must start with a letter";
      }
    }
  }

  // Return null if no errors, otherwise return errors object
  return Object.keys(errors).length === 0 ? null : errors;
};

// // Example usage:
// console.log("=== Example Usage ===");

// // Valid credentials
// console.log("Valid:", validateCredentials("user@example.com", "MyPassword123!", "John Doe"));

// // Invalid email
// console.log("Invalid email:", validateCredentials("invalid-email", "MyPassword123!", "John Doe"));

// // Weak password
// console.log("Weak password:", validateCredentials("user@example.com", "weak", "John Doe"));

// // Invalid name
// console.log("Invalid name:", validateCredentials("user@example.com", "MyPassword123!", "123"));

// // Missing required fields
// console.log("Missing fields:", validateCredentials("", "", ""));

// // Without full name
// console.log("Without name:", validateCredentials("user@example.com", "MyPassword123!"));

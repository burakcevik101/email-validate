const validator = require("validator");
const validateTc = require("validatetc");

function validateEmail(email) {
  return validator.isEmail(email);
}

module.exports = { validateEmail, validateTc };

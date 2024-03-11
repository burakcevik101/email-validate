const { validateEmail, validateTc } = require("./index");

console.log(validateEmail("asd@sad.com")); //  true
console.log(validateEmail("asdsad.com")); //  false
console.log(validateTc("11111111111")); //  false

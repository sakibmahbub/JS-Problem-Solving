function generatePass(length) {
  const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const lowercase = "abcdefghijklmnopqrstuvwxyz";
  const number = "0123456789";
  const special = "!@#$%^&*()-_=+[]{}|;:,.<>?";

  const allChars = uppercase + lowercase + number + special;

  let password = "";

  for (let i = 0; i < length; i++) {
    const index = Math.floor(Math.random() * allChars.length);
    password += allChars.charAt(index);
  }

  return password;
}

const passwordLength = 8;
const randomPassword = generatePass(passwordLength);
console.log(randomPassword);

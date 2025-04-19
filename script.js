function makeid(l) {
// Function to generate a random alphanumeric string of length l
function makeid(l) {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let result = '';
  const charactersLength = characters.length;

  // Generate random characters and append them to the result string
  for (let i = 0; i < l; i++) {
    const randomIndex = Math.floor(Math.random() * charactersLength);
    result += characters.charAt(randomIndex);
  }

  return result;
}

// Do not change the code below.
const l = prompt("Enter a number.");
alert(makeid(l)); // Shows the generated string with the specified length

function firstWord(str) {
  // Find the index of the first space, if any:
  const spaceIndex = str.indexOf(' ');

  // Return the appropriate substring:
  return spaceIndex === -1 ? str : str.substring(0, spaceIndex);
}

// Get input from the user:
const inputString = prompt("Enter String:");

// Call the function and display the result:
alert(firstWord(inputString));

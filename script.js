function firstWord(str) {
   if (!str || str.indexOf(' ') === -1) {
    return str; // Return the entire string
  }
	const spaceIndex = str.indexOf(' ');
  return str.substring(0, spaceIndex);

	
}

// Get input from the user:
const inputString = prompt("Enter String:");

// Call the function and display the result:
alert(firstWord(inputString));

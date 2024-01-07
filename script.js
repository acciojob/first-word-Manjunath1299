function firstWord(str) {
   if (!str || str.indexOf(' ') === -1) {
    return str; // Return the entire string
  }
	  const match = str.match(/^\w+/);
  return match ? match[0] : str;

	
}

// Get input from the user:
const inputString = prompt("Enter String:");

// Call the function and display the result:
alert(firstWord(inputString));

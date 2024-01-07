function firstWord(str) {
   if (!str || str.indexOf(' ') === -1) {
    return str;
  }
	return str.substring(0,str.indexOf(' '));
}

// Get input from the user:
const inputString = prompt("Enter String:");

// Call the function and display the result:
alert(firstWord(inputString));

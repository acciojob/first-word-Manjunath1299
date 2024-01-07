function firstWord(s) {
  // your code here
  // console.log(s);
  s=s.split(" ");
  if(s.length==1){
  return s[0]
  }
  else if(s.length<1){
  return " "
  }
  else if(s.length>1){
  return s[0];
  }
}

// Do not change the code below

const s = prompt("Enter String:");
alert(firstWord(s));

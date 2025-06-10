function countChar(string, chr) {
  let count = 0;
  for(let i = 0; i < string.length; i++) {
    if (string[i] === chr){
      count++;
    }
  }
  return count;
}

function countBs(bstring) {
  return countChar(bstring, 'B');
}

console.log(countChar("hello woooorld", 'o'));
console.log(countBs("BOB"));

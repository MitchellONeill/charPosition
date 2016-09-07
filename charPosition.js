function countLetters(str) {
  var charList = str.toLowerCase().split("");
  var charMap = {};
  for (var i = 0; i < charList.length; i++) {
    if(charMap[charList[i]] === undefined) {
      charMap[charList[i]] = {};
      charMap[charList[i]].count = 1;
      charMap[charList[i]].index = i;
    } else {
      charMap[charList[i]].count += 1;
      charMap[charList[i]].index += ", " + i;
    }

  }
  delete charMap[" "];
  return charMap;
}

console.log(countLetters("lighthouse in the house"));

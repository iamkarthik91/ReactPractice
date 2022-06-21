//Map -Create a new array by doing something with each item in an array.

//Filter - Create a new array by keeping the items that return true.

//Reduce - Accumulate a value by doing something to each item in an array.

//Find - find the first item that matches from an array.

//FindIndex - find the index of the first item that matches.
import emojipedia from "./emojipedia";

var meaningText = emojipedia.map(function (emoji) {
  console.log(emoji.meaning);
  return emoji.meaning.substring(1, 100);
});
console.log(meaningText);

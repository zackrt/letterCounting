// Using the JavaScript language, have the function LetterCountI(str) take the str parameter being passed and return the first word with the greatest number of repeated letters. For example: "Today, is the greatest day ever!" should return greatest because it has 2 e's (and 2 t's) and it comes before ever which also has 2 e's. If there are no words with repeating letters return -1. Words will be separated by spaces. 

// Sample Test Cases
// Input:"Hello apple pie"
// Output:"Hello"

// Input:"No words"
// Output:-1

function LetterCountI(str){
  //declare scoped variables 
  str = str.toLowerCase();
  var arr = str.split(" ");
  var count = 0;
  var word = "-1";
  //interate over string with nested for loops
  for (var i = 0; i < arr.length; i++) {
    for (var a = 0; a < arr[i].length; a++) {
            var countNew = 0;
            for (var b = a + 1; b < arr[i].length; b++) {
                if (arr[i][a] === arr[i][b])
                    countNew += 1;
            }
            // if statement setting word = word with most repeated letters if countNew is greater than count
            if (countNew > count) {
                count = countNew;
                word = arr[i];
            }
        }
    }
    //return word with greatest number of repeated letters
    return word;
}
console.log(LetterCountI("Today, is the greatest day ever!"))
console.log(LetterCountI("Hello apple pie"))
console.log(LetterCountI("No words"))



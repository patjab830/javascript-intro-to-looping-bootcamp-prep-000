/* TODO: Build a function forLoop. It takes an array as an argument. Start counting from 0, and, using a for loop, add a string to the array 25 times. But not just any string. If your i value is 1, add the string "I am 1 strange loop."; if your i value is anything else, add the string "I am ${i} strange loops.". (Remember flow control with if and else? And how do we interpolate i?) Then return the array. */
function forLoop(arr) {
  for ( var i = 0; i < 25; i++ ) {
    if ( i === 1 ) {
      arr[i] = "I am 1 strange loop.";
    } else {
      arr[i] = `I am ${i} strange loops.`;
    }
  }
}

/* TODO: Create a function called whileLoop in loops.js. The function should take a number as an argument. Using a while loop, count down (using console.log) from the passed in number to 0. Then return the string 'done'. */
function whileLoop(num) {
  while ( num > 0 ) {
    console.log(num--);
  }
  return 'done';
}

/*TODO: Define a function called doWhileLoop in loops.js. The function should take an array as an argument. Use the maybeTrue() function (you can copy it from this README) as the condition, and remove elements from the array until the array is empty or until maybeTrue() returns false. (Your condition might look something like array.length > 0 && maybeTrue().) Finally, return the array.*/
function doWhileLoop(arr) {
  do {
    arr.pop();
  } while ( arr.length > 0 && maybeTrue() );
}

function maybeTrue() {
  return Math.random() >= 0.5
}
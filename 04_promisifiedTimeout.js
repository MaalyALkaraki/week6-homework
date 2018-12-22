/*
## Step 5:

1. In your homework repository, create a new file called `04_promisifiedTimeout.js`.
2. Write a function that returns a promise. This promise should resolve, returning the string `"success"`, **after** the amount of milliseconds passed as an argument to the function.
    * use `setTimeout()` to implement the delay.
    * note: you effectively 'promisified' `setTimeout()`, transforming a function that use the callback pattern to one that use promises!
3. Commit and push.

*/

function delay(milliseconds) {
  return function(result) {
    return new Promise(function(resolve, reject) {
      setTimeout(function() {
        resolve(result);
      }, milliseconds);
    });
  };
}
//This is how you use it:
delay(9000)("success").then(function(result) {
  console.log(result);
});

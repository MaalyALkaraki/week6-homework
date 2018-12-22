/*
## Step 4:

1. In your homework repository, create a new file called `03_promiseDelay.js`.
2. Write a function that returns a promise. This promise should resolve, returning the string `"success"`, **after** 1 second.
    * use `setTimeout()` to implement the delay.
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
delay(1000)("success").then(function(result) {
  console.log(result);
});

/*
## Step 3:

1. In your homework repository, create a new file called`02_promiseSelector.js`.
2. Write a function that returns a promise.This promise should resolve, returning the string`"success"`, 
**if** the function is passed`true` as argument.Otherwise, it should reject with the string`"failure"`.
3. Commit and push.
*/

function promisePassedArgument(argument) {
  return new Promise(function(resolve, reject) {
    if (argument) {
      resolve("success");
    } else {
      reject("failure");
    }
  });
}
promisePassedArgument("Anything").then(function(argument) {
  console.log(argument);
});
// in case of failure the argument is empty string or boolan false
promisePassedArgument("").catch(function(argument) {
  console.log(argument);
});
promisePassedArgument(false).catch(function(argument) {
  console.log(argument);
});

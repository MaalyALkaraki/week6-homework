/*## Step 2:

1. In your homework repository, create a new file called`01_promise.js`.
2. Write a function that returns a promise.This promise should resolve, returning the string`"success"`.
3. Commit and push.
*/

function promiseResolveReturningSuccess() {
  var aPromise = Promise.resolve("success");

  var promiseReturn = aPromise.then(function(result) {
    console.log("The promise resolveed returning: " + result + ".");
    return result;
  });
  return promiseReturn;
}
var functionReturns = promiseResolveReturningSuccess();
console.log("functionReturn" + functionReturns);

//Creating a promise1 method. The promise1 will get resolved when timer times out after 6 seconds.
let myPromise1 = new Promise((resolve,reject) => {
    setTimeout(() => {
      resolve("Promise 1 resolved")
    },6000)})

//Creating a promise2 method. The promise2 will get resolved when timer times out after 3 seconds.
let myPromise2 = new Promise((resolve,reject) => {
  setTimeout(() => {
    resolve("Promise 2 resolved")
  },3000)})


//Console log before calling the promise1
console.log("Before calling promise 1");

//Call the promise 1 and wait for it to be resolved and then print a message.
myPromise1.then((successMessage) => {
    console.log("From Callback " + successMessage)
    myPromise2.then((successMessage) => {
      console.log("From Callback " + successMessage)
    })
    
  })

//Console log after calling the promise
  console.log("After calling promise 1");


//Console log before calling the promise2
console.log("Before calling promise 2");


//Console log after calling the promise
console.log("After calling promise 2");


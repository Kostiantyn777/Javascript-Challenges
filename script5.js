/*const callBackFunc = (c) => {
  return c * 4;
};

const higherOrderFunction = (a, b, func) => {
  console.log(a + b + func);
};
higherOrderFunction(1,2,callBackFunc(3))*/ 


//There are different ways to handle the async code. Those are callbacks, promises, and async/await.

//An example of callback function:
/*function printString(){
  console.log("Tom"); 

  //setTimeout is an async function
  setTimeout(() =>  { console.log("Jacob"); }, 300); 
 console.log("Mark")
}

printString();*/
let counter = 1; // this is the var that we will use to break the while loop
while (counter !== 5) {
  console.log(counter);
  counter += 1; // now counter will be whatever counter was before, plus 1
  // counter++;  // equivalent to += but only useful when you want to increment by 1.
}
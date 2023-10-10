import React from "react";

const App = () => {
// simple example of map : map convert the existing array's each item to new array by using the function (item*5)
//   const x = [1,2,3,4,5,6,7,8]

//   const newarray = x.map(item => { 
//    return item*5
//   })
// console.log('mapped array',newarray);

// simple example of filter (note : item does not change here) : filter simply filters the existing array's each item using the condition , if the condition is true then it goes to new array.
// const filteredArray = x.filter(item => {
//   return item%2 === 0;
// })
// console.log('filtered array',filteredArray);

//simple example of reduce: it takes tw0 arguments previous & next and using a function and these arguments it returns the results
  // const sum = x.reduce((prevoius,next) => {
  //   return prevoius+next;
  // })
  // console.log('sum',sum);


  // try, catch, finally , throw :- try : test the block of code for errors, catch : to handle errors , throw : create custom errors, finally : it execute code regardless of result after try and catch 
  
  //callback function

  const greet1 = (friend,callback) => {
    console.log(`${friend}`);
    callback();
};

const greet2 = () => {
    console.log('hello Deuba');
}

greet1("sagar",greet2);
// greet2();




  return(
    <div>
      <p>
        hello
      </p>
    </div>


  )
}

export default App;
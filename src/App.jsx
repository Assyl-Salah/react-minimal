import React from 'react'
import AppTitle from './AppTitle'

const App=()=>(
  <div>
  <h1>Minimal React</h1>
  <AppTitle/>
  <p>{(generateArray(10).map(index=>" "+index++))}</p>
  <p>{(generateRandomArray(10).map(x=>" "+x))}</p>
  <p>{(A1.filter(isBigEnough(15)).map(x=>" " +x))}</p>
  <p>{(squares(A2).map(x=> " " +x))}</p>
  </div>

  )
  const generateArray = (n) => ( 
    Array.from(new Array(n),(val,index)=>index+1)
  );

  const generateRandomArray =(n)=> ( //3
    Array.from({length: n}, () => Math.ceil(Math.random() * 25))
  )

  function isBigEnough(value) {
 return function(element, index, array) {
  return (element >= value);
  }
}
const A1 = [2,56,23,88,17,4];

const A2=[2, 5, 8, 10];
function squares (arr) {
  return arr.map(function (x) {
    return Math.sqrt(x);
  });
}

export default App
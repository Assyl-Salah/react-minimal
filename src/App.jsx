import React from 'react'
import AppTitle from './AppTitle'

const App=()=>(
  <div>
  <h1>Minimal React</h1>
  <AppTitle/>
  <p>{(generateArray(10).map(index=>" "+index++))}</p>
  <p>{(generateRandomArray(10).map(x=>" "+x))}</p>
  </div>

  )
  const generateArray = (n) => ( 
    Array.from(new Array(n),(val,index)=>index+1)
  );

  const generateRandomArray =(n)=> ( //3
    Array.from({length: n}, () => Math.ceil(Math.random() * 25))
  )
export default App
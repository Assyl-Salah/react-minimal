import React from 'react'
import AppTitle from './AppTitle'

const App=()=>(
  <div>
  <h1>Minimal React</h1>
  <AppTitle/>
  <p>{(generateArray(10).map(index=>" "+index++))}</p>
  </div>
 
  )
  const generateArray = (n) => ( 
    Array.from(new Array(n),(val,index)=>index+1)
  );


export default App
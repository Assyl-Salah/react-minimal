import React from 'react'
import AppTitle from './AppTitle'


class App extends React.Component{
 
constructor(props){
super(props);
}
ahandler(event){
  console.log("The value of field a is :" + event.target.value);
}
bhandler(event){
  console.log("The value of field b is :" + event.target.value);
}
render(){
  return(
    <div>
      <h1>React Minimal Salaha</h1>
      <br></br>
      <AppTitle></AppTitle>
      <br></br>
        <input type="number" onChange={this.ahandler} ></input>
        
        <input type="number" onChange={this.bhandler} ></input>
        </div>
  );
}
}


export default App
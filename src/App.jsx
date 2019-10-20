import React from 'react'
import AppTitle from './AppTitle'


class App extends React.Component{
 
constructor(props){
super(props);
this.state={
  a: 0,
  b: 0 ,
  iter : 0 ,
 arr:[]
}
this.ahandler=this.ahandler.bind(this);
this.bhandler=this.bhandler.bind(this);
this.squares=this.squares.bind(this);
}

squares () {
  this.setState({

    arr:generateArray(this.state.a ,this.state.b).map(x=>(Math.sqrt(x)))
  } );
}
ahandler(event){
  this.setState({
   a: event.target.value
  },(nextState)=>console.log(this.state.a));
  
}
bhandler(event){
  this.setState({
    b: event.target.value
   },(nextState)=>console.log(this.state.b));
}
render(){
  
  return(
    
    <div>
       <p>{(console.time("render"+this.state.iter))}</p>
     
      <h1 >Lab2</h1>
    <br></br>
      <AppTitle></AppTitle>
      <br></br>
        <input type="number" onChange={this.ahandler} ></input>
        <input type="number" onChange={this.bhandler} ></input>
        <br></br>
        <p>{(this.state.a<this.state.b && this.state.a>0)&&(generateArray(Number(this.state.a) , Number(this.state.b)).map(index=>" "+index++))}</p>
        <p>{(console.timeEnd("render" +this.state.iter++))}</p>
        <button onClick={this.squares}>Process Array</button>
        <br></br>
        <p>{this.state.arr.toLocaleString()}</p>
       
       </div>
  ); 
}
  }

  const generateArray = (start, end) => Array.from({length: end-start+1}, (_, i) => start+i);
  

  export default App
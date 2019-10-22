import React from 'react'
import AppTitle from './AppTitle'


class App extends React.Component{
 
constructor(props){
super(props);
this.state={
  a: 0,
  b: 0 ,
  iter : 0 ,
 arrf:[]
}
this.ahandler=this.ahandler.bind(this);
this.bhandler=this.bhandler.bind(this);
this.ProccessArray=this.ProccessArray.bind(this);
}

ProccessArray () {
if(this.state.a<this.state.b && this.state.a>0){
  this.setState({
    
 arrf:squares(generateArray(Number(this.state.a) , Number(this.state.b)).map(index=>" "+index++))
 
  });
}
}
ahandler(event){

  this.setState({
   a: event.target.value
  },(nextState)=> this.setState({
    arrf:generateArray(Number(this.state.a) , Number(this.state.b)).map(index=>" "+index++)
  }));
}
bhandler(event){
  this.setState({
    b: event.target.value
   },(nextState)=> this.setState({
    arrf:generateArray(Number(this.state.a) , Number(this.state.b)).map(index=>" "+index++)
  }));
}
render(){
  
  return(
    
    <div style={{backgroundColor: "lightblue"}}>
       <p>{(console.time("render"+this.state.iter))}</p>
     
      <h1  style={{color: "maroon"}}>Lab2</h1>
    <br></br>
      <AppTitle></AppTitle>
      <br></br>
        <input  type="number" onChange={this.ahandler} style={{color: "maroon"}} ></input>
        <input type="number" onChange={this.bhandler}  style={{color: "maroon"}}></input>
        <br></br>
        <p>{(this.state.a<this.state.b && this.state.a>0)&&(this.state.arrf.toString())}</p>
       
        <div>
        <button  onClick={this.ProccessArray}>Process Array</button>
        <br></br>
     </div>
        <p>{(console.timeEnd("render" +this.state.iter++))}</p>
       </div>

  ); 
}
  }

  const generateArray = (start, end) => Array.from({length: end-start+1}, (_, i) => start+i);
const squares = (arr) => arr.map(x => Math.pow(x,2));
  export default App
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

  <p>
 <button onClick={ AllStudents}> All students</button>
 <button onClick={Sort}> Sorted students</button>
 <button onClick={Old} > Old students</button>
 
 <ul id="student"></ul>
 </p>
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
const data=[
  {
    "teacherName": "Jan Nowak",
    "teacherAge": 36,
    "active": true,
    "students": [
      {
        "name": "Maciej Janosz",
        "age": 12
      },
      {
        "name": "Wojciech Kowalski",
        "age": 15
      },
      {
        "name": "Wioletta PoznaĹska",
        "age": 1000000
      }
    ]
  },
  {
    "teacherName": "Mariusz Flasinski",
    "teacherAge": 56,
    "active": true,
    "students": [
      {
        "name": "Jan Kot",
        "age": 12
      },
      {
        "name": "Jan Ziobro",
        "age": 15
      },
      {
        "name": "Adam Malysz",
        "age": 41
      }
    ]
  },
  {
    "teacherName": "Wojciech Kuzak",
    "teacherAge": 44,
    "active": false,
    "students": [
      {
        "name": "Janina Wronska",
        "age": 22
      },
      {
        "name": "John Dover",
        "age": 7
      },
      {
        "name": "Emil Petterson",
        "age": 46
      }
    ]
  }
]


function AllStudents()
{
  var studentt=[];
data.forEach(x=>x.students.forEach(x=>studentt.push(x.name)));
document.getElementById('student').innerHTML = studentt.toLocaleString();
}
function Sort()
{
  var studentt=[];
data.forEach(x=>x.students.forEach(x=>studentt.push(x.name)));
studentt.sort();
document.getElementById('student').innerHTML= studentt.toLocaleString();
}
function Old()
{
  var studentt=[];
data.forEach(x=>{if(x.active) x.students.forEach(x=>{if(x.age>20) studentt.push(x.name)})});
  studentt.sort(); 
  document.getElementById('student').innerHTML = studentt.toLocaleString();
}
export default App
import React from 'react'
import { render } from 'react-dom'


class AppTitle extends React.Component{
    componentDidMount(){
      document.title = "App Title"
    }
  
    render(){
      return(
        <b> this is my app title  </b>
      )
    }
  }
  export default AppTitle
 
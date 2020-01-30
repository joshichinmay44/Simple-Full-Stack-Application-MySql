
import React, { Component } from 'react';
//import React from 'react';
import theme from 'styled-theming';
//import logo from './logo.svg';
import './App.css';
//import {Container} from 'react-b'
import {ListGroup,ListGroupItem,Container, ThemeProvider} from 'react-bootstrap'

const theme1={
  back:{
    backgroundColor:'pink',
    borderColor:'red'
  }
}

const CreateStyle=({back})=>({
  backgroundColor: back.backgroundColor,
  borderColor : back.borderColor
})

const style1=CreateStyle(theme1)

class App extends Component{
  
   state={
    products: []
  }


   componentDidMount() {
    this.getProducts();
  }
  
  

  getProducts=_ =>{    
    fetch('http://localhost:4001/products')

    .then(response=>response.json())
    .then(response=>this.setState( {products: response}))
    .catch(err=>console.error(err))
  }
renderList=({id,name})=><div key={id}>{name}</div>

render() {
  const {products}=this.state
  return(
    <div className='App' style={style1}>
    
      <div className='lg fluid '>
     {products.map(this.renderList)}
      </div>
     
    </div>
  )
}



}

export default App;
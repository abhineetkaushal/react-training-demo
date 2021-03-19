import React, { Component } from 'react'
import { addBook } from '../../services/book';
import  './style.css';
export default class AddBookComponent extends Component {
    constructor(props){
        super(props);
        this.state = {
            title:""
        }
    }
    handleChange = (e)=>{
        const value = e.target.value;
        this.setState({
            title:value
        })
    }
    onAddBook = ()=>{
        addBook(this.state.title)
        .then(()=>{
            this.setState({title:""});
        })
        .catch(err=>alert("Error adding book"));
    }
  render() {
    return (
      <div className="addSection">
        <input className="input" name="title" onChange={this.handleChange} value={this.state.title} type="text" placeholder="Enter book title"/>
        <button className="addBook" onClick={this.onAddBook}>Add Book</button>
        
      </div>
    )
  }
}

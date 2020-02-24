import React from 'react';
import axios from 'axios';
import ListItem from './ListItem';
import ListContainer from './ListContainer'

//API https://www.googleapis.com/books/v1/volumes?q=quilting.
export default class App extends React.Component{
  constructor(props){
    super(props);
  this.state={ 
    AddIteme:["Quilting For Dummies"]
  }}
  addItem = (e) => {
    e.preventDefault();
    console.log('Add Item!');
    this.setState({
      AddIteme: [...this.state.AddIteme, this.state.newItem],
      newItem: ''
    });
  }
  onTextBoxChange = (e) => {

    this.setState({
      newItem: e.target.value
    });
  }
  // deleteItem(key){
  //   const filteredItems= this.state.items.filter(item =>
  //     item.key!==key);
  //   this.setState({
  //     items: filteredItems
  //   })}

render(){
  return(
    <div>
      <form>
        <div className="Form">
          <label className="label">Add new Item</label>
          <input type="text" value={this.state.newItem} onChange={this.onTextBoxChange}></input>
          <button onClick={this.addItem} type="submit" className="button">Add</button>
          <button onClick={this.deletItem} type="submit" className="button">deletItem</button>
        </div>
      </form>  
      <ListContainer AddIteme={this.state.AddIteme}  />
</div>
  )}}

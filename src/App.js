import React from 'react';
import axios from 'axios';
import './App.css';
import ListItem from './ListItem';
import ListContainer from './ListContainer'
import { Link } from 'react-router-dom';
//API https://www.googleapis.com/books/v1/volumes?q=quilting.
export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      addIteme: [],
      booklist:[]
    }
  }
  addItem = (e) => {
    e.preventDefault();
    console.log('Add Item!');
    this.setState({
      addIteme: [...this.state.addIteme, this.state.newItem],
      newItem: ''
    });
  }
  onTextBoxChange = (e) => {

    this.setState({
      newItem: e.target.value
    });
  }
  componentDidMount() {
    console.log(this.state)
    axios({
      method: 'get',
      url: 'https://www.googleapis.com/books/v1/volumes?q=quilting',

    })
      .then(res => {
        console.log('RESPONSE: ', res);
        const answer = res.data.items;
        let titlesArr = [];
        for (let i=0;i<answer.length;i++){
          titlesArr.push(answer[i].volumeInfo.title)
        }
        this.setState({
          booklist: titlesArr
        })  
        console.log(this.state.booklist)
      })
      .catch(err => {
        console.log('ERROR: ', err);
      });
  };
  deleteallitem(key){
    const filteredItems= this.state.items.filter(item =>
      item.key!==key);
    this.setState({
      items: filteredItems
    })}  
    deleteitem=(key)=>{
        const addItemArray=Array.prototype.slice.call(this.state.addIteme);
        console.log(addItemArray);
        
        const selectedItem=addItemArray.indexOf(key);
        addItemArray.splice(selectedItem,1);
      this.setState({
        addIteme: addItemArray
      })} 

      // DeletSlected=(e)=>{
      //   this.state.addIteme.indexOf(e)
      // }
  render() {
    return (
      <div>
        <form>
          <div className="Form">
            <label className="label">Add new Item</label>
            <input type="text" value={this.state.newItem} onChange={this.onTextBoxChange}></input>
            <button onClick={this.addItem} type="submit" className="button">Add</button>
            <button onClick={this. deleteallitem} type="submit" className="button"> deleteallitem</button>
            <ListContainer addIteme={this.state.addIteme} deleteitem={this.deleteitem} />
          </div>
        </form>
        <h1>List of recommended books</h1>
    <ul><li>{this.state.booklist[0]}</li>
    <li>{this.state.booklist[1]}</li>
    <li>{this.state.booklist[2]}</li></ul>
      </div>

    )
  }
}

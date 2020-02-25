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
      booklist:[],
      item:'',
      completed: []
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

    deleteallitem = (key) => {
        //key.preventDefault();
        console.log(key)
        const Items =this.state.addIteme;
        console.log(Items)
         Items.splice(key);
       this.setState({addIteme:Items})
      }
    deleteitem = (key) => {
      //key.preventDefault();
      console.log(key)
      const Items =this.state.addIteme;
      console.log(Items)
       Items.splice(key,1);
     this.setState({addIteme:Items})
    }
  
    edititem = (id) => {
     console.log(id)
     const filtereeditems =this.state.addIteme.filter(items =>items.id!==id);
     const selectitem=this.state.addIteme.find(items =>items.id===id);
     console.log(selectitem)
     this.setState({
      addIteme:filtereeditems,

     })
    }
    Markcomplete = (e) => {
      console.log("complete");
     const currentSelecter= this.state.addIteme.indexOf(e);
     const markedarray=this.state.completed;
     markedarray.push(currentSelecter)
      this.setState({
        completed:markedarray
      });
    }
    Markdelete = (e) => {
        const completed=Array.prototype.slice.call(this.state.completed)
        const addIteme=this.state.addIteme
        console.log("delet");
          completed.forEach(element => {
            const completedIndex=addIteme.indexOf(element);
            console.log(completedIndex);
            return addIteme.splice(completedIndex,1);
        });
        this.setState({
          addIteme:addIteme
        })
      }
  render() {
    return (
      <div>
        <form>
          <div className="Form">
            <h1>The list of books I want to read</h1>
            <label className="label">Add new Item</label>
            <input type="text" value={this.state.newItem} onChange={this.onTextBoxChange}></input>
            <button onClick={this.addItem} type="button" className="button">Add</button>
            <button onClick={this.deleteallitem} type="button" className="button"> deleteallitem</button>
            <button onClick={this.Markdelete} type="button" className="button">   Markdelete</button>
            <ListContainer addIteme={this.state.addIteme}  deleteitem={this.deleteitem}   edititem ={this.edititem} Markcomplete={this.Markcomplete}/>
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

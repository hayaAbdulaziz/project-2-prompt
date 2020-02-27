import React from "react";
import axios from "axios";
import "./App.css";
import ListItem from "./ListItem";
import ListContainer from "./ListContainer";
import { Link } from "react-router-dom";
export default class App extends React.Component {
  //Was defined state And inside it addItem array and booklis array completed array
  constructor(props) {
    super(props);
    this.state = {
      addIteme: [],
      booklist: [],
      completed: [],
    };
  }
  //Function to add names of books in empty array(list)
  addItem = e => {
    e.preventDefault();
    console.log("Add Item!");
    this.setState({
      addIteme: [...this.state.addIteme,this.state.newItem],
      newItem: ""
    });
  };
  //The function to  Text inside Box Change
  onTextBoxChange = e => {
    this.setState({
      newItem: e.target.value
    });
  };
  //The function to Axios
  componentDidMount() {
    console.log(this.state);
    axios({
      method: "get",
      url: "https://www.googleapis.com/books/v1/volumes?q=quilting"
    })
      .then(res => {
        console.log("RESPONSE: ", res);
        const answer = res.data.items;
        let titlesArr = [];
        for (let i = 0; i < answer.length; i++) {
          titlesArr.push(answer[i].volumeInfo.title);
        }
        this.setState({
          booklist: titlesArr
        });
        console.log(this.state.booklist);
      })
      .catch(err => {
        console.log("ERROR: ", err);
      });
  }
//The function to Delete All Item from list
  deleteallitem = key => {

    console.log(key);
    const Items = this.state.addIteme;
    console.log(Items);
    Items.splice(key);
    this.setState({ addIteme: Items });
  };
  //The function to Delete Item from list
  deleteitem = key => {
   
    console.log(key);
    const Items = this.state.addIteme;
    console.log(Items);
    Items.splice(key, 1);
    this.setState({ addIteme: Items });
  };
//The function to edit item  from the list
  edititem = (index, newValue) => {
    console.log(index, newValue);
    const newArray = this.state.addIteme;
    newArray[index] = newValue;

    this.setState({
      addIteme: newArray
    });
  };
  //The function to  Put mark item 
  Markcomplete = index => {
    console.log("mark complete");
    const currentSelecter = this.state.addIteme[index];
     console.log(index, "index");
    console.log(this.state.addIteme, "add item array");
    console.log(currentSelecter, "current selector");
    const markedarray = this.state.completed;
    console.log(markedarray, "compplete arr");
    markedarray.push(currentSelecter);
    this.setState({
      completed: markedarray
    });
    console.log(markedarray);
    alert("Markcomplete");
  };
  //The function to delete mark item
  markdelete = () => {
    const addIteme = this.state.addIteme;
    console.log("delete");
   this.state.completed.forEach((element) => {
       const completedIndex = addIteme[element];
      console.log(completedIndex);
      addIteme.splice(element - 1, 1);
    });
    this.setState({
      addIteme: addIteme
    });
  };
  render() {
    return (
      <div>
        <form>
          <div className="Form">
            <h1>The list of books I want to read</h1>
            <label className="label">Add new Item</label>
            <input
              type="text"
              value={this.state.newItem}
              onChange={this.onTextBoxChange}
            ></input>
            <button onClick={this.addItem} type="button" className="button">
              Add
            </button>
            <button
              onClick={this.deleteallitem}
              type="button"
              className="button"
            >
              {" "}
              deleteallitem
            </button>
            <button onClick={this.markdelete} type="button" className="button">
              Markdelete
            </button>

            <ListContainer
              addIteme={this.state.addIteme}
              deleteitem={this.deleteitem}
              edititem={this.edititem}
              Markcomplete={this.Markcomplete}
            />
          </div>
        </form>
        {/* Displays the list of books that Who extracted it from
                       API */}
        <h1>List of recommended books</h1>
        <p>{this.state.booklist[0]}</p>
        <p>{this.state.booklist[1]}</p>
        <p>{this.state.booklist[2]}</p>
      </div>
    );
  }
}

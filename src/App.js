import React from "react";
import axios from "axios";
import "./App.css";
import ListItem from "./ListItem";
import ListContainer from "./ListContainer";
import { Link } from "react-router-dom";
//API https://www.googleapis.com/books/v1/volumes?q=quilting.
//http://localhost:3000/.github.io/project-2-prompt
export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      addIteme: [],
      booklist: [],
      completed: [],
    };
  }
  addItem = e => {
    e.preventDefault();
    console.log("Add Item!");
    this.setState({
      addIteme: [...this.state.addIteme,this.state.newItem],
      newItem: ""
    });
  };
  onTextBoxChange = e => {
    this.setState({
      newItem: e.target.value
    });
  };
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

  deleteallitem = key => {
   
    console.log(key);
    const Items = this.state.addIteme;
    console.log(Items);
    Items.splice(key);
    this.setState({ addIteme: Items });
  };
  deleteitem = key => {
   
    console.log(key);
    const Items = this.state.addIteme;
    console.log(Items);
    Items.splice(key, 1);
    this.setState({ addIteme: Items });
  };

  edititem = (index, newValue) => {
    console.log(index, newValue);
    const newArray = this.state.addIteme;
    newArray[index] = newValue;

    this.setState({
      addIteme: newArray
    });
  };
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
        <h1>List of recommended books</h1>
        <p>{this.state.booklist[0]}</p>
        <p>{this.state.booklist[1]}</p>
        <p>{this.state.booklist[2]}</p>
      </div>
    );
  }
}

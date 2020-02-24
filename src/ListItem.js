import React from 'react';
import './ListItem.css';
export default class ListItem extends React.Component {
  handelClick=(e)=>{
    e.preventDefault();
    
    this.props.deleteitem();
  }

  render() {
    return (
      <div>
      <p className="list" >{this.props.taskName}</p>
      <button onClick={this.handelClick} type="submit" className="button">deleteitem</button>
      </div>
    );
  }
}
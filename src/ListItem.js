import React from 'react';
import './ListItem.css';
export default class ListItem extends React.Component {


  render() {
  

    return (
      <div>
      <p className="list" >{this.props.taskName}</p>
     
     
      </div>
    );
  }
}
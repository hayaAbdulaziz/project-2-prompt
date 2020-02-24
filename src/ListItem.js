import React from 'react';
import './ListItem.css';
export default class ListItem extends React.Component {
  render() {
    return (
    
      <p className="list" >{this.props.taskName}</p>
    );
  }
}
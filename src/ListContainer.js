import React, { Fragment } from 'react';
import ListItem from './ListItem';
export default class ListContainer extends React.Component {
  
    
  render() {
    // map to Access to all elements in array
    const allItems = this.props.addIteme.map((task, index)=> {
      return(
        <ListItem key={index+1} taskName={task}  index={index}  deleteitem={this.props.deleteitem} 
        edititem ={this.props.edititem} Markcomplete={this.props.Markcomplete} />
      ) 
    });
   
    return (
      <div>  
        {allItems}
       
      </div>
      
    );
}
}


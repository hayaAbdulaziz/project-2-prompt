import React from 'react';
import ListItem from './ListItem';

export default class ListContainer extends React.Component {
  render() {
    const allItems = this.props.addIteme.map(function(task, index) {
      return(<div>
        <ListItem taskName={task} key={index} deleteitem={()=>this.props.deleteitem(task)} />
</div>
      ) 
    });
    return (
      <ul>
        {allItems}
      </ul>
    );
  }
}
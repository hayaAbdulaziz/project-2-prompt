import React from 'react';
import ListItem from './ListItem';
export default class ListContainer extends React.Component {
  render() {
    const allItems = this.props.AddIteme.map(function(task, index) {
      return(<div>
<ListItem taskName={task} key={index} />

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
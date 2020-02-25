import React from 'react';
import ListItem from './ListItem';
export default class ListContainer extends React.Component {
  render() {
    const allItems = this.props.addIteme.map((task, index)=> {
      console.log(this)
      return(<div>
        <ListItem taskName={task} key={index}   />
  <button onClick={()=>this.props.deleteitem(index)} type="button" className="button"> deleteitem</button>
      <button onClick={()=> this.props.edititem(index)}type="button" className='button-edit'>Edit </button > 
      <button onClick={()=> this.props.Markcomplete(index)} type="button" className="button">Markcomplete</button>
</div>
      ) 
    });
    return (
      <div>  {allItems}
       
      </div>
      
     
    );
  }
}


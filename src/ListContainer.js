import React, { Fragment } from 'react';
import ListItem from './ListItem';
export default class ListContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      setEditing:false
      }
    }
    toggleState=()=>{
      let {isEdit}=this.state;
      this.setState({
        isEdit:!isEdit
      })
    }
    updateForm=()=>{
      return(
        <form onClick={this.ubdatebookname}>
          <input type="text" ref={(v)=>{this.input=v}}></input>
          <button>Update </button>
        </form>
      )
    }
    ubdatebookname=(e)=>{
    
      this.props.edititem(this.props.index,this.input.value)
      this.toggleState();
    }
  render() {
  // let {isEdit}=this.state;
    const allItems = this.props.addIteme.map((task, index)=> {
      console.log(this)
      return(<div>
        <ListItem taskName={task} key={index}   />
  <button onClick={()=>this.props.deleteitem(index)} type="button" className="button"> deleteitem</button>
      <button onClick={()=> this.toggleState(index)}type="button" className='button-edit'>Edit </button > 
      <button onClick={()=> this.props.Markcomplete(index)} type="button" className="button">Markcomplete</button>

      {/* <Fragment>
        {isEdit? this.updateForm():this.toggleState}
      </Fragment> */}
</div>
      ) 
    });
    return (
      <div>  {allItems}
       
      </div>
      
     
    );
  }
}


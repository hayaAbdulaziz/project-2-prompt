import React from 'react';
import './ListItem.css';
export default class ListItem extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
   
       input:"",
      }
    }
    //Function to handle Change input
    handleChange=(e)=>{
       this.setState({
        input:e.target.value

       })
    }
  render() {
    return (
      <div>
      <p className="list" >{this.props.taskName}</p>
     
      <button onClick={()=>this.props.deleteitem(this.props.index)} type="button" className="button"> deleteitem</button>
      <input type="text" value={this.state.input} onChange={this.handleChange}/>
     
      <button onClick={()=> this.props.edititem(this.props.index,this.state.input)}type="button" className='button-edit'>Edit </button > 
     
      <button onClick={()=> this.props.Markcomplete(this.props.index)} type="button" className="button">Markcomplete</button>

      </div>
    );
  }
}
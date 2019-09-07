import React from 'react';
import Like from '../assets/like.svg';
import star from '../assets/star-shape-rounded.svg';
import SVG from 'react-inlinesvg';
class TodosEntry extends React.Component{
  constructor(props){
    super(props);
    this.state={
      todo:this.props.todo
    }
  }

  render(){
    return (
      <div className='todo'>
      <img src={this.state.todo.imageUrl} id='pic'></img>
      <SVG src='http://ec2-34-213-74-31.us-west-2.compute.amazonaws.com:3000/like.svg' id='like'></SVG>
      <div className='kind'>{this.state.todo.kind} 
      {this.state.todo.location}</div>
      <div className='description'>{this.state.todo.description}</div>
      <div className='price'>From ${this.state.todo.price}/person</div>
      <div className='review'>
        <SVG src='http://ec2-34-213-74-31.us-west-2.compute.amazonaws.com:3000/star-shape-rounded.svg' id='star'></SVG>
      <div className='text'>
        ({this.state.todo.review})
      </div>
      </div>
    </div>
    )
  }
}

export default TodosEntry;
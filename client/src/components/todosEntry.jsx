import React from 'react';
import Like from '../assets/like.svg';
import SVG from 'react-inlinesvg';
class todosEntry extends React.Component{
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
      <SVG src={Like} id='like'></SVG>
      <div>{this.state.todo.kind} {this.state.todo.location}</div>
      <div >{this.state.todo.description}</div>
      <div>${this.state.todo.price}/night</div>
      <div>{this.state.todo.rating} Stars</div>
    </div>
    )
  }
}

export default todosEntry;
import React from 'react';
import TodosEntry from './TodosEntry.jsx';
import SVG from 'react-inlinesvg';
import leftArrow from '../assets/left-arrow.svg'
import rightArrow from '../assets/right-arrow.svg'
import $ from 'jquery';
import '../../dist/style.scss';
class Todos extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
      index: 0,
      direction: '',
      key: ''
    }
    this.moveRight = this.moveRight.bind(this);
    this.moveLeft = this.moveLeft.bind(this);
  }

  componentDidMount() {
    $.get('./api/todo', data => {
      this.setState({
        todos: data
      })
    })
  }


  moveRight() {
    this.setState({
      direction: 'right'
    }, () => {
      this.setState({
        index: this.state.index + 1
      })
    }
    )
  }

  moveLeft() {
    this.setState({
      direction: 'left'
    }, () => {
      this.setState({
        index: this.state.index - 1
      })
    }
    )
  }


  render() {
    return (
      <div className="todos">
        <div className='title'>Things to do nearby</div>
        {this.state.index > 0 ? <SVG className="arrow arrow-left" src={leftArrow} onClick={this.moveLeft}></SVG> : <span></span>}
        <div className='col'>
          <div className={`slider active-slide-${this.state.index}`}>
            <div className='wrapper' style={{
                  'transform': `translateX(-${this.state.index*(100/5)}%)`
                }}>
              {this.state.todos.map((obj) => {
                return (
                  <TodosEntry key={obj.todo_id} todo={obj} />
                )
              })}
            </div>
          </div>
        </div>
        {this.state.index < 8 ? <SVG className="arrow arrow-right" src={rightArrow}  onClick={this.moveRight}></SVG> : <span></span>}
      </div>
    )
  }
}

export default Todos;
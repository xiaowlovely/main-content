import React from 'react';
import todosEntry from './todosEntry.jsx';
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
        <div className='title'>More todos to stay</div>
        {this.state.index > 0 ? <div className="arrow arrow-left" onClick={this.moveLeft}></div> : <span></span>}
        <div className='col'>
          <div className={`slider active-slide-${this.state.index}`}>
            <div className='wrapper' style={{
                  'transform': `translateX(-${this.state.index*(100/3)}%)`
                }}>
              {this.state.todos.map((obj) => {
                return (
                  <todosEntry key={obj.todo_id} todo={obj} />
                )
              })}
            </div>
          </div>
        </div>
        {this.state.index < 8 ? <div className="arrow arrow-right" onClick={this.moveRight}></div> : <div></div>}
      </div>
    )
  }
}

export default Todos;
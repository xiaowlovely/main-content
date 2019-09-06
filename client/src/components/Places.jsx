import React from 'react';
import PlacesEntry from './PlacesEntry.jsx';
import $ from 'jquery';
import SVG from 'react-inlinesvg';
import leftArrow from '../assets/left-arrow.svg'
import rightArrow from '../assets/right-arrow.svg'
import '../../dist/style.scss';
class Places extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      places: [],
      index: 0,
      direction: '',
      key: ''
    }
    this.moveRight = this.moveRight.bind(this);
    this.moveLeft = this.moveLeft.bind(this);
  }

  componentDidMount() {
    $.get('http://ec2-34-213-74-31.us-west-2.compute.amazonaws.com:3000/api/place', data => {
      this.setState({
        places: data
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
      <div className="places">
        <div className='title'>More places to stay</div>
        {this.state.index > 0 ? <SVG className="arrow arrow-left" src={leftArrow} onClick={this.moveLeft}></SVG> : <span></span>}
        <div className='col'>
          <div className={`slider active-slide-${this.state.index}`}>
            <div className='wrapper' style={{
                  'transform': `translateX(-${this.state.index*(100/3)}%)`
                }}>
              {this.state.places.map((obj) => {
                return (
                  <PlacesEntry key={obj.place_id} place={obj} />
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

export default Places;
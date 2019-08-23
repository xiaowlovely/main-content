import React from 'react';
import $ from 'jquery';
class Places extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      places: []
    }
  }

  componentDidMount() {
    $.get('./api/place', data => {
      this.setState({
        places: data
      })
    })
  }

  render() {
    return (
      <div className='places'>
        {this.state.places.map((obj) => {
          return (
            <div>
              <img className='pic' src={obj.imageUrl}></img>
              <div>{obj.kind} {obj.location}</div>
              <div className='description'>{obj.description}</div>
              <div>From ${obj.price}/night</div>
              <div>{obj.rating} Stars</div>
            </div>
          )
        })}
      </div>
    )
  }
}

export default Places;
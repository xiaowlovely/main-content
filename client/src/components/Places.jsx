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
      <div id="switchcontrol" className="carousel slide" data-ride="carousel">
        <div className="carousel-inner">
          <div className='carousel-item active' id='places'>
          {this.state.places.slice(0, 6).map((obj) => {
              return (
                <div>
                  <img src={obj.imageUrl} className='pic'></img>
                  <div>{obj.kind} {obj.location}</div>
                  <div >{obj.description}</div>
                  <div>From ${obj.price}/night</div>
                  <div>{obj.rating} Stars</div>
                </div>
              )
            })}
            </div>
          <div className='carousel-item' id='places'>
            {this.state.places.slice(6, 12).map((obj) => {
              return (
                <div>
                  <img src={obj.imageUrl} className='pic'></img>
                  <div>{obj.kind} {obj.location}</div>
                  <div >{obj.description}</div>
                  <div>From ${obj.price}/night</div>
                  <div>{obj.rating} Stars</div>
                </div>

              )
            })}
          </div>

          <a className="carousel-control-prev" href="#switchcontrol" role="button" data-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="sr-only">Previous</span>
          </a>
          <a className="carousel-control-next" href="#switchcontrol" role="button" data-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="sr-only">Next</span>
          </a>
        </div>
        <div className='places'>
        </div>
      </div>
    )
  }
}

export default Places;
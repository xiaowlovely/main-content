import React from 'react';
import Like from '../assets/like.svg';
import star from '../assets/star-shape-rounded.svg';
import _ from 'underscore';
import SVG from 'react-inlinesvg';
class PlacesEntry extends React.Component{
  constructor(props){
    super(props);
    this.state={
      place:this.props.place
    }
  }

  render(){
    return (
      <div className='place'>
      <img src={this.state.place.imageUrl} id='pic'></img>
      <SVG src={Like} id='like'></SVG>
      <div className='kind'>{this.state.place.kind} 
      <span aria-hidden="true"> · </span>
      {this.state.place.location}</div>
      <div className='description'>{this.state.place.description}</div>
      <div className='price'>${this.state.place.price}/night</div>
      <div className='review'>{_.range(0, this.state.place.rating + 1).map(
         num => {
          return (
            <SVG src={star} id='star'></SVG>
          )
        }
      )
      }
      <div className='text'>{this.state.place.review}</div>
      </div>
    </div>
    )
  }
}

export default PlacesEntry;
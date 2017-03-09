import React, { PropTypes } from 'react'
import PhotoColumn from './photoColumn';


class Photos extends React.Component {


  render () {
    if(this.props.fotos){
      return(
        <div>
          {this.props.fotos.map(color=>{
            console.log(color);
            <PhotoColumn photos={color}></PhotoColumn>
          })}
        </div>
      )
    }
    else{
      return(
        <div></div>
      )
    }
  }
}

export default Photos;

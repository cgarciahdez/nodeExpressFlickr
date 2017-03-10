import React, { PropTypes } from 'react'
import PhotoColumn from './photoColumn';


class Photos extends React.Component {


  render () {
    if(this.props.fotos){
      return(

        <div>
          <div className="container text-center">
          <div className="row text-center">
          {this.props.fotos.map((color)=>{

            return(
              <PhotoColumn photos={color}></PhotoColumn>
            )

          })}
        </div>
        </div>
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

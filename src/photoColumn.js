import React, { PropTypes } from 'react'
import Photo from './photo'

class PhotoColumn extends React.Component {
  render () {
    console.log("columna")
    console.log(this.props.photos)
    return(

      <div>
        <div className="col-md-1 text-center">
          {this.props.photos.map((photo)=>{
            return(
                <Photo photo={photo}></Photo>
            )
          })}
        </div>
      </div>
    )
  }
}

export default PhotoColumn;

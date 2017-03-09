import React, { PropTypes } from 'react'

class PhotoColumn extends React.Component {
  render () {
    return(
      <div>
        {this.props.color.map((photo)=>{
          <div>{photo}</div>
        })}
      </div>
    )
  }
}

export default PhotoColumn;

import React, { PropTypes } from 'react'

class Photo extends React.Component {

  constructor(props) {
    super(props);
    this.state={
      url:this.getUrl()
    }
  }

  getUrl() {
        return "https://farm"+
            this.props.photo.farm +
            ".staticflickr.com/" +
            this.props.photo.server +
            "/"+
            this.props.photo.id+
            "_" +
            this.props.photo.secret +
            "_s.jpg";
    }

  render () {
    return(
      <div>
        <img src={this.state.url} alt={this.props.photo.title}></img>
      </div>
    )
  }
}

export default Photo;

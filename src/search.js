import React, { PropTypes } from 'react'

class Search extends React.Component {

  search(term){
    console.log(term);
    this.props.getPhotos(term)
  }

  render () {
    return(
      <div className="col-md-12 buscador">
        <input type="text" onChange={(event) => this.search(event.target.value)}/>
      </div>
    )
  }
}

export default Search;

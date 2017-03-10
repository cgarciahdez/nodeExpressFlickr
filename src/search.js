import React, { PropTypes } from 'react'
import { Button } from 'react-bootstrap';


class Search extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      term: ''
    }
  }


  change(val){
    console.log(val);
    this.setState({
      term:val
    })
  }

  buscar(){
    if(this.state.term){
    this.props.getPhotos(this.state.term);
  }
  else{
    alert("Please write a term!");
  }
  }

  render () {
    return(
      <div className="row buscador">
        <div className="col-md-2"></div>
        <div className="col-md-7">
          <input className="form-control" type="text" onChange={(event) => this.change(event.target.value)}/>
          </div>
          <div className="col-md-1">
          <Button onClick={()=>{this.buscar.bind(this)}}>Search</Button>
        </div>
      </div>
    )
  }
}

export default Search;

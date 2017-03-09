import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Search from './search';
import Photos from './photos';
import axios from 'axios';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      photos: [],
      colors:["red","blue"]
    }
  }

  getPhotos(terms){

    this.state.colors.map((color)=>{
      console.log("/flickr/"+terms+" "+color)
      axios.get("/flickr/"+terms+color)
      .then(response => {
        var photos = response.data.photos.photo;
        this.setState({
          photos: this.state.photos.concat(photos)
        })
      })
    })

  }


  render() {
    return (
      <div>
        <Search getPhotos={this.getPhotos.bind(this)}></Search>
        <Photos fotos={this.state.photos}></Photos>
      </div>
    )
  }
}

export default App;
